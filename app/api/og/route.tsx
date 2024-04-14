import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  // Load font
  const newsreader = await fetch(
    "https://chroxify.com/Newsreader_24pt-Regular.ttf"
  ).then((res) => res.arrayBuffer());
  const newsreaderItalic = await fetch(
    "https://chroxify.com/Newsreader_24pt-Italic.ttf"
  ).then((res) => res.arrayBuffer());

  // Get description text
  const { searchParams } = new URL(request.url);
  const hasDescription = searchParams.has("description");
  const description = hasDescription
    ? searchParams.get("description")
    : "Crafting code & drawing pixels.";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#121212",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          fontFamily: "Newsreader",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: 'url("https://chroxify.com/noise-background.png")',
          flexWrap: "nowrap",
        }}
      >
        {/* Date */}
        <span
          style={{
            color: "hsl(0 0% 75%)",
            fontSize: "26px",
            position: "absolute",
            fontFamily: "Newsreader",
            top: 32,
            left: 32,
          }}
        >
          {new Date().toLocaleDateString()}
        </span>

        {/* Title */}
        <h1
          style={{
            color: "hsl(0 0% 100%)",
            fontSize: "48px",
            fontFamily: "Newsreader",
            fontWeight: "normal",
            fontStyle: "normal",
            margin: 0,
            position: "absolute",
            bottom: 96,
            left: 32,
          }}
        >
          Christo Todorov
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            color: "hsl(0 0% 75%)",
            fontSize: "32px",
            fontFamily: "NewsreaderItalic",
            fontWeight: "normal",
            margin: 0,
            position: "absolute",
            bottom: 48,
            left: 32,
          }}
        >
          {description}
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Newsreader",
          data: newsreader,
          style: "normal",
        },
        {
          name: "NewsreaderItalic",
          data: newsreaderItalic,
          style: "italic",
        },
      ],
    }
  );
}
