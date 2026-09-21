/**
 * Monogramme ARASTE CAPITAL.
 * Un « A » de pierre dont la barre devient un tablier de laiton posé sur une
 * arche : la transition (le relais) et l'architecture, sans blason ni couronne.
 */
export function Monogram({
  className,
  tone = "forest",
  title,
}: {
  className?: string;
  tone?: "forest" | "ivory";
  title?: string;
}) {
  const color = tone === "forest" ? "#142a25" : "#f4f0e8";
  const accent = tone === "forest" ? "#aa9167" : "#cdb88f";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M32 8 L8 56 H16.5 L32 25 L47.5 56 H56 Z" fill={color} />
      <rect x="13" y="39.6" width="38" height="2.4" fill={accent} />
      <path
        d="M22 56 C22 48.6 26.5 44 32 44 C37.5 44 42 48.6 42 56"
        fill="none"
        stroke={accent}
        strokeWidth="1.7"
      />
    </svg>
  );
}
