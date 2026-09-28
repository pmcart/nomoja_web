import { ImageResponse } from "next/og";

export const alt = "Nomoja: software and AI that actually earn their keep";
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
          background: "#0c2f24",
          color: "#f4f1ea",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 56, letterSpacing: -1 }}>
            Nomoja<span style={{ color: "#ff6b3d" }}>.</span>
          </div>
          <div style={{ display: "flex", width: 72, height: 72, borderRadius: 999, background: "#ff6b3d" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>
            Software and AI that actually earn their keep.
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#a9b8af" }}>
            Software &amp; AI studio · Ireland
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
