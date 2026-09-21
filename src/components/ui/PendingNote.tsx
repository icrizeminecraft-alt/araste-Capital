/**
 * Élément à compléter avant publication : affiché comme tel, jamais inventé.
 */
export function PendingNote({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-5 border-l-2 border-champagne bg-ivory-deep/60 px-5 py-4 font-sans text-sm text-ink-soft">
      <p className="eyebrow mb-2">{label}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-champagne" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
