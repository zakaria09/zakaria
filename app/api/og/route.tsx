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
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage:
              `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontStyle: "normal",
              color: "black",
              marginTop: 30,
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              backgroundColor: "black",
              padding: "1rem",
              borderRadius: "2rem",
            }}
          >
            <b style={{ color: "white" }}>{title}</b>
          </div>
        </div>
      )
    );
  } catch (err) {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
