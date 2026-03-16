import requests
import os

def handler(request):
    if request.method != "POST":
        return {"statusCode": 405, "body": "Method not allowed"}

    fal_key = os.environ.get("FAL_KEY", "")
    if not fal_key:
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": '{"error":"FAL_KEY environment variable not set"}'
        }

    try:
        files = request.files
        file = files.get("file")
        if not file:
            return {
                "statusCode": 400,
                "headers": {"Content-Type": "application/json"},
                "body": '{"error":"No file provided"}'
            }

        file_bytes = file.read()
        filename = file.filename or "upload.jpg"
        content_type = file.content_type or "image/jpeg"

        res = requests.post(
            "https://rest.alpha.fal.ai/storage/upload",
            headers={"Authorization": f"Key {fal_key}"},
            files={"file": (filename, file_bytes, content_type)},
        )

        import json
        if not res.ok:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": res.text})
            }

        data = res.json()
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"url": data.get("url", "")})
        }

    except Exception as e:
        import json
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": str(e)})
        }
