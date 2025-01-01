import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "Christo Todorov";

    // Load font
    const geistRegular = await fetch(
      new URL("../../../public/fonts/Geist-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const geistMedium = await fetch(
      new URL("../../../public/fonts/Geist-Medium.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "64px 64px 64px 96px",
          }}
        >
          {title !== "Christo Todorov" ? (
            <div
              style={{
                fontSize: 56,
                fontFamily: "GeistRegular",
                letterSpacing: "-0.02em",
                color: "#161616",
              }}
            >
              Christo Todorov
            </div>
          ) : (
            <div />
          )}
          <div
            style={{
              fontSize: 92,
              fontFamily: "GeistMedium",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              background: "white",
              color: "#161616",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "GeistRegular",
            data: geistRegular,
            style: "normal",
          },
          {
            name: "GeistMedium",
            data: geistMedium,
            style: "normal",
          },
        ],
      }
    );
  } catch (error: any) {
    console.error(error.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
