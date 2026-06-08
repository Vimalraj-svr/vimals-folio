import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Vimalraj S — Senior Software Engineer"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "Arial Black, Impact, sans-serif",
          position: "relative",
        }}
      >
        {/* Top: red rule + role label */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "56px", height: "5px", background: "#ff2d00", flexShrink: 0 }} />
          <span style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "17px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
          }}>
            SENIOR SOFTWARE ENGINEER
          </span>
        </div>

        {/* Main name block */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: "0.88" }}>
          <span style={{
            color: "#ffffff",
            fontSize: "180px",
            fontWeight: 900,
            letterSpacing: "-4px",
            textTransform: "uppercase",
            lineHeight: "0.88",
          }}>
            VIMAL
          </span>
          <span style={{
            color: "#f5e642",
            fontSize: "180px",
            fontWeight: 900,
            letterSpacing: "-4px",
            textTransform: "uppercase",
            lineHeight: "0.88",
          }}>
            RAJ S.
          </span>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{
            color: "rgba(255,255,255,0.28)",
            fontSize: "17px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
          }}>
            IAMNEO · NIIT VENTURE · CHENNAI
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "10px", height: "10px", background: "#f5e642" }} />
            <span style={{
              color: "#ffffff",
              fontSize: "22px",
              letterSpacing: "2px",
              fontFamily: "Arial, sans-serif",
            }}>
              thisisvimal.xyz
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
