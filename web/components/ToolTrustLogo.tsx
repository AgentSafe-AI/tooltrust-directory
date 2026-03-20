export const ToolTrustLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Shield outline */}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    {/* Network nodes */}
    <circle cx="12" cy="10" r="2" />
    <circle cx="8" cy="15" r="1.5" />
    <circle cx="16" cy="15" r="1.5" />
    {/* Connecting edges */}
    <path d="M12 12v1" />
    <path d="M12 13l-3 1.5" />
    <path d="M12 13l3 1.5" />
  </svg>
);
