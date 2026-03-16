import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL provided' }, { status: 400 });
    }

    const FAL_KEY = process.env.FAL_KEY;
    if (!FAL_KEY) {
      return NextResponse.json({ error: 'FAL_KEY not configured' }, { status: 500 });
    }

    const prompt = `portrait of the same person as the input image, styled as a GTA San Andreas video game character, PS2 era 3D game style, low poly facial structure, smooth plastic-like skin shading, video game lighting, neutral wall background, center framed character portrait, shoulders visible, same hairstyle and facial features, game engine render aesthetic`;

    const response = await fetch('https://fal.run/fal-ai/flux/dev/image-to-image', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        image_url: imageUrl,
        strength: 0.75,
        num_images: 1,
        image_size: 'square_hd',
        num_inference_steps: 28,
        guidance_scale: 3.5,
        enable_safety_checker: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Fal.ai error:', errorText);
      return NextResponse.json({ error: 'Image generation failed', details: errorText }, { status: 500 });
    }

    const data = await response.json();
    const outputUrl = data?.images?.[0]?.url;

    if (!outputUrl) {
      return NextResponse.json({ error: 'No output image returned' }, { status: 500 });
    }

    return NextResponse.json({ outputUrl });
  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}
