import requests
import os
import json

GTA_PROMPT = (
    "portrait of the same person as the input image, "
    "styled as a GTA San Andreas video game character, "
    "PS2 era 3D game style, "
    "low poly facial structure, "
    "smooth plastic-like skin shading, "
    "video game lighting, "
    "neutral wall background, "
    "center framed character portrait, "
    "shoulders visible, "
    "same hairstyle and facial features, "
    "game engine render aesthetic"
)

def handler(request):
    if request.method != "POST":
        return {"statusCode": 405, "body": "Method not allowed"}

    fal_key = os.environ.get("FAL_KEY", "")
    if not fal_key:
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": "FAL_KEY environment variable not set"})
        }

    try:
        body = request.get_json()
        image_url = body.get("imageUrl", "")
        if not image_url:
            return {
                "statusCode": 400,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": "No imageUrl provided"})
            }

        res = requests.post(
            "https://fal.run/fal-ai/flux/dev/image-to-image",
            headers={
                "Authorization": f"Key {fal_key}",
                "Content-Type": "application/json"
            },
            json={
                "prompt": GTA_PROMPT,
                "image_url": image_url,
                "strength": 0.78,
                "num_images": 1,
                "image_size": "square_hd",
                "num_inference_steps": 28,
                "guidance_scale": 3.5,
                "enable_safety_checker": True,
            },
            timeout=120,
        )

        if not res.ok:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": res.text})
            }

        data = res.json()
        output_url = data.get("images", [{}])[0].get("url", "")
        if not output_url:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": "No output image returned"})
            }

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"outputUrl": output_url})
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": str(e)})
        }
