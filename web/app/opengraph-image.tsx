import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "56px",
          background:
            "radial-gradient(circle at top right, rgba(16,185,129,0.18), transparent 32%), linear-gradient(180deg, #111113 0%, #09090b 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#10b981",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "2px solid rgba(16,185,129,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10b981",
              fontSize: 24,
            }}
          >
            ⛨
          </div>
          ToolTrust
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 920 }}>
          <div style={{ fontSize: 78, lineHeight: 1.02, fontWeight: 800 }}>
            Protect Your AI Agents from Malicious MCP Tools
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#a1a1aa" }}>
            Review grades, findings, and supply-chain risk before your agent trusts an MCP server.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {[
            ["S/A/B", "Safe"],
            ["C", "Needs Approval"],
            ["D/F", "Block or Review"],
          ].map(([grade, label]) => (
            <div
              key={grade}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minWidth: 220,
                padding: "20px 22px",
                borderRadius: 22,
                border: "1px solid rgba(63,63,70,0.8)",
                background: "rgba(24,24,27,0.9)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 800 }}>{grade}</div>
              <div style={{ fontSize: 18, color: "#a1a1aa" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
