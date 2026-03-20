export const ToolTrustLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
  >
    <defs>
      <clipPath id="tt-left-over">
        <circle cx="209" cy="256" r="44" />
      </clipPath>
      <clipPath id="tt-right-over">
        <circle cx="303" cy="256" r="44" />
      </clipPath>
    </defs>

    {/* Shield */}
    <path
      d="M 256,66 C 310,66 406,100 418,142 L 418,266 Q 404,396 256,464 Q 108,396 94,266 L 94,142 C 106,100 202,66 256,66 Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="22"
      strokeLinejoin="round"
    />

    {/* Pill 1 at +45° (behind) */}
    <rect
      x="146" y="223" width="220" height="66" rx="33" ry="33"
      fill="currentColor"
      fillOpacity="0"
      stroke="currentColor"
      strokeWidth="15"
      transform="rotate(45,256,256)"
    />

    {/* Pill 2 at −45° (in front — wins at top/bottom crossings) */}
    <rect
      x="146" y="223" width="220" height="66" rx="33" ry="33"
      fill="black"
      fillOpacity="1"
      stroke="currentColor"
      strokeWidth="15"
      transform="rotate(-45,256,256)"
    />

    {/* Pill 1 restored at LEFT crossing */}
    <rect
      x="146" y="223" width="220" height="66" rx="33" ry="33"
      fill="black"
      fillOpacity="1"
      stroke="currentColor"
      strokeWidth="15"
      transform="rotate(45,256,256)"
      clipPath="url(#tt-left-over)"
    />

    {/* Pill 1 restored at RIGHT crossing */}
    <rect
      x="146" y="223" width="220" height="66" rx="33" ry="33"
      fill="black"
      fillOpacity="1"
      stroke="currentColor"
      strokeWidth="15"
      transform="rotate(45,256,256)"
      clipPath="url(#tt-right-over)"
    />
  </svg>
);
