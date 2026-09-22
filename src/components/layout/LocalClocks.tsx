"use client";

import { useSyncExternalStore } from "react";

type Place = { key: string; name: string; timeZone: string };

/** Horloge partagée : notifie ses abonnés toutes les trente secondes ; renvoie null au serveur (aucune heure rendue avant hydratation). */
const listeners = new Set<() => void>();
let timer: number | null = null;
let tick = 0;
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === null) {
    timer = window.setInterval(() => {
      tick += 1;
      listeners.forEach((l) => l());
    }, 30_000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  };
}
const getSnapshot = () => tick;
const getServerSnapshot = () => -1;

/** Heure locale de chaque implantation, mise à jour chaque demi-minute ; rendu vide côté serveur. */
export function LocalClocks({ places, locale, label, dark = false, compact = false }: { places: Place[]; locale: string; label: string; dark?: boolean; compact?: boolean }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = snapshot >= 0 ? new Date() : null;
  const format = (tz: string) => (now ? new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(now) : "");
  return (
    <ul className={`grid grid-cols-2 gap-x-6 gap-y-6 ${compact ? "" : "md:grid-cols-4 md:gap-x-8"} ${dark ? "text-ivory" : "text-forest"}`} aria-label={label}>
      {places.map((place) => (
        <li key={place.key} className={`border-t pt-4 ${dark ? "border-champagne/30" : "border-forest/30"}`}>
          <span className={`block font-serif font-medium leading-tight ${compact ? "text-xl" : "text-2xl md:text-[1.75rem]"}`}>{place.name}</span>
          <span className={`mt-2 block font-sans text-sm tabular-nums ${dark ? "text-stone" : "text-ink-soft"}`}>{now ? format(place.timeZone) : " "}</span>
        </li>
      ))}
    </ul>
  );
}
