import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#6366f1" }}>{"<"}</span>
          <span style={{ color: "#a78bfa" }}>/</span>
          <span style={{ color: "#6366f1" }}>{">"}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
