import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog — Matheus Pires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#090909",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.04) 0%, transparent 55%)" }} />

        <div style={{ fontSize: "14px", fontFamily: "monospace", color: "#3f3f46", marginBottom: "24px" }}>
          mpires.dev/posts
        </div>
        <div style={{ fontSize: "56px", fontWeight: 700, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
          Blog
        </div>
        <div style={{ fontSize: "22px", color: "#71717a", maxWidth: "560px", lineHeight: 1.5 }}>
          Writing about TypeScript, AI engineering, system design, and shipping software products.
        </div>

        <div style={{ position: "absolute", bottom: "64px", left: "64px", fontSize: "14px", color: "#27272a" }}>
          Matheus Pires · Fullstack Developer
        </div>
      </div>
    ),
    { ...size },
  );
}
