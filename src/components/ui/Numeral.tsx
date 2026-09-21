export function Numeral({ n, dark = false, className = "" }: { n: number; dark?: boolean; className?: string }) {
  return (
    <span aria-hidden="true" className={`numeral ${dark ? "numeral--dark" : ""} ${className}`}>
      {String(n).padStart(2, "0")}
    </span>
  );
}
