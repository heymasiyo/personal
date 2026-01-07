import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const geistRegular = await readFile(
    join(process.cwd(), "public/assets/Geist-Regular.ttf")
  );
  const newsreaderMediumItalic = await readFile(
    join(process.cwd(), "public/assets/Newsreader_24pt-MediumItalic.ttf")
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, #dfefff 0%, #eef7ff 40%, #ffffff 70%)",
        padding: "60px 80px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "22px",
          color: "#444",
          marginTop: "20px",
        }}
      >
        <span style={font("Geist Regular")}>
          <span style={{ color: "#111", paddingRight: "4px" }}>
            Satrio Wicaksono
          </span>
          — Software Engineer
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flex: "1",
          fontSize: "56px",
          color: "#111",
        }}
      >
        <h1 style={font("Newsreader Medium Italic")}>Thoughts</h1>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Regular",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Newsreader Medium Italic",
          data: newsreaderMediumItalic,
          style: "italic",
          weight: 500,
        },
      ],
    }
  );
}

function font(fontFamily: string) {
  return { fontFamily };
}
