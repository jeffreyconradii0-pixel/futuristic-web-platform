import { ImageResponse } from "next/og";

export const alt = "Futuristic World — Digital Assets & Blockchain Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1726",
          color: "#F7F9FC",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#42C7D9" }}>
          FUTURISTIC WORLD
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.05, maxWidth: 920 }}>
            Building the Next Generation of Digital Finance.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#C8A96B" }}>
            Digital Assets & Blockchain Technologies
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
