import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.has('title') ? searchParams.get('title') : 'Blog Title'
    const image = searchParams.get('imageUrl');
    return new ImageResponse(
      (
        <div tw="w-full h-full flex flex-col justify-end items-stretch bg-slate-300">
          {image && <img  src={image} tw="w-full h-full" style={{objectFit: 'contain'}}/>}
          <div tw="bg-white flex flex-col p-8">
            <div tw="text-5xl">{title}</div>
          </div>
        </div>
      )
    );
  } catch (err) {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
