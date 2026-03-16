import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const FAL_KEY = process.env.FAL_KEY;
    if (!FAL_KEY) {
      return NextResponse.json({ error: 'FAL_KEY not configured' }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Upload to fal.ai storage
    const uploadResponse = await fetch('https://rest.alpha.fal.ai/storage/upload/initiate', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file_name: file.name,
        content_type: file.type,
      }),
    });

    if (!uploadResponse.ok) {
      // Fallback: convert to base64 data URL and use directly
      const buffer = await file.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      const dataUrl = `data:${file.type};base64,${base64}`;
      return NextResponse.json({ url: dataUrl });
    }

    const { upload_url, file_url } = await uploadResponse.json();

    // Upload the actual file
    const fileBuffer = await file.arrayBuffer();
    await fetch(upload_url, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: fileBuffer,
    });

    return NextResponse.json({ url: file_url });
  } catch (err: any) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: err.message || 'Upload failed' }, { status: 500 });
  }
}
