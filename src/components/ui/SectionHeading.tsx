import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  size = "lg",
  className = "",
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  dark?: boolean;
  size?: "lg" | "md";
  className?: string;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? <Eyebrow dark={dark} className="mb-5">{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={`${size === "lg" ? "display-lg" : "display-md"} ${dark ? "text-ivory" : ""}`}>
        {title}
      </h2>
      {body ? (
        <p className={`lead measure mt-6 ${dark ? "text-stone" : "text-ink-soft"} ${align === "center" ? "mx-auto" : ""}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
