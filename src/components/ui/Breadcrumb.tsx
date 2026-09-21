import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className="mb-8 font-sans text-sm text-ink-soft">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-forest hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-forest">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? (
              <span aria-hidden="true" className="text-stone-dark">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
