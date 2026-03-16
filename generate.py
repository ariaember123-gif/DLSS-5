"""
DLSS 5 MEMES — Python backend
FAL_KEY is read from environment variable (never hardcoded).

For Vercel: set FAL_KEY in Settings → Environment Variables.
For local:  FAL_KEY=your_key python generate.py

Install:  pip install flask requests
Run:      FAL_KEY=your_key python generate.py
Open:     http://localhost:5000
"""

import os
import requests
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder=".")

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


def fal_headers():
    key = os.environ.get("FAL_KEY", "")
    if not key:
        raise ValueError("FAL_KEY environment variable is not set.")
    return {"Authorization": f"Key {key}"}


@app.route("/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/api/upload", methods=["POST"])
def upload():
    """Upload image to fal.ai storage, return URL."""
    try:
        headers = fal_headers()
    except ValueError as e:
        return jsonify({"error": str(e)}), 500

    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file provided"}), 400

    res = requests.post(
        "https://rest.alpha.fal.ai/storage/upload",
        headers=headers,
        data=file.read(),
        params={"filename": file.filename},
    )
    if not res.ok:
        return jsonify({"error": res.text}), 500

    return jsonify(res.json())


@app.route("/api/generate", methods=["POST"])
def generate():
    """Transform uploaded image into GTA character."""
    try:
        headers = fal_headers()
    except ValueError as e:
        return jsonify({"error": str(e)}), 500

    body = request.get_json()
    image_url = body.get("imageUrl")
    if not image_url:
        return jsonify({"error": "No imageUrl provided"}), 400

    res = requests.post(
        "https://fal.run/fal-ai/flux/dev/image-to-image",
        headers={**headers, "Content-Type": "application/json"},
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
        return jsonify({"error": res.text}), 500

    data = res.json()
    output_url = data.get("images", [{}])[0].get("url")
    if not output_url:
        return jsonify({"error": "No output image returned"}), 500

    return jsonify({"outputUrl": output_url})


if __name__ == "__main__":
    if not os.environ.get("FAL_KEY"):
        print("⚠  WARNING: FAL_KEY not set. Set it with: FAL_KEY=your_key python generate.py")
    print("🎮 DLSS 5 MEMES server starting at http://localhost:5000")
    app.run(debug=True, port=5000)
