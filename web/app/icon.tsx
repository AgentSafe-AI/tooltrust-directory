import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#10b981",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44" height="44" fill="none">
          <path
            d="M 256,66 C 310,66 406,100 418,142 L 418,266 Q 404,396 256,464 Q 108,396 94,266 L 94,142 C 106,100 202,66 256,66 Z"
            stroke="currentColor"
            strokeWidth="22"
            strokeLinejoin="round"
          />
          <rect
            x="146"
            y="223"
            width="220"
            height="66"
            rx="33"
            ry="33"
            stroke="currentColor"
            strokeWidth="15"
            transform="rotate(45,256,256)"
          />
          <rect
            x="146"
            y="223"
            width="220"
            height="66"
            rx="33"
            ry="33"
            fill="#09090b"
            stroke="currentColor"
            strokeWidth="15"
            transform="rotate(-45,256,256)"
          />
        </svg>
      </div>
    ),
    size
  );
}
