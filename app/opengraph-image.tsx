import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matheus Pires — Fullstack Developer & AI Engineer";
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
          justifyContent: "flex-end",
          padding: "64px",
          background: "#090909",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          }}
        />

        {/* Top: availability badge */}
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: "64px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "#71717a",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            padding: "6px 16px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          Available for contracts
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            top: "64px",
            right: "64px",
            fontSize: "14px",
            color: "#3f3f46",
            fontFamily: "monospace",
          }}
        >
          mpires.dev
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "48px", fontWeight: 600, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Matheus Pires
          </div>
          <div style={{ fontSize: "28px", fontWeight: 400, color: "#a1a1aa", lineHeight: 1.3 }}>
            Fullstack Developer · AI Engineer · TypeScript Expert
          </div>
          <div
            style={{
              marginTop: "8px",
              fontSize: "16px",
              color: "#52525b",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            7+ years shipping TypeScript-first products — from food-tech at iFood to cloud infra at Devopness.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "64px",
            right: "64px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["Next.js", "TypeScript", "Node.js", "OpenAI"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: "13px",
                fontFamily: "monospace",
                color: "#52525b",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "4px 10px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
