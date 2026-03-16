# DLSS 5 MEMES — Website

GTA San Andreas-themed meme coin website with AI PFP generator.

## Setup

```bash
npm install
npm run dev
```

## Vercel Deployment

1. Push this folder to GitHub
2. Import to Vercel: https://vercel.com/new
3. Add environment variable:
   - Key: `FAL_KEY`
   - Value: Your fal.ai API key (get it at https://fal.ai/dashboard)
4. Deploy!

## How the PFP Generator Works

1. User uploads a photo
2. Photo is sent to fal.ai storage via `/api/upload`
3. The fal.ai `flux/dev/image-to-image` model transforms it into a GTA San Andreas PS2-style character
4. Both original and transformed images are shown side-by-side for comparison
5. User can download their new GTA PFP

## Environment Variables

| Variable | Description |
|----------|-------------|
| `FAL_KEY` | Your fal.ai API key from https://fal.ai/dashboard |

## Contract Address

`2KGmEy1MSNVUvkvXW3dzPgG6oPiEXD2NxdPte7KApump`
