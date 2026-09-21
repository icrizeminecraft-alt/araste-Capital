import { useId } from "react";
import type { PlateKind } from "@/config/images";

/**
 * Compositions architecturales originales en SVG.
 * Style : planches gravées aux plans nets — pierre claire, ombres douces,
 * laiton discret. Le viewBox est vertical (4:5) et se recadre en « slice ».
 * Décoratives par défaut ; passer `title` pour une image significative.
 */
const C = {
  skyTop: "#f8f4ec",
  skyBottom: "#e7dfcd",
  stoneLight: "#ede6d8",
  stone: "#dad3c7",
  stoneMid: "#c9bfad",
  stoneDark: "#b3a894",
  stoneDeep: "#9d9280",
  forest: "#142a25",
  forestSoft: "#1f3b34",
  sea: "#bfcac4",
  seaDeep: "#a6b5ae",
  brass: "#aa9167",
};

function archHole(cx: number, spring: number, r: number, floor: number) {
  return `M${cx - r} ${floor} V${spring} A${r} ${r} 0 0 1 ${cx + r} ${spring} V${floor} Z`;
}

export function ArchitecturalPlate({
  kind,
  className = "",
  title,
  priority = false,
}: {
  kind: PlateKind;
  className?: string;
  title?: string;
  priority?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `${uid}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      data-plate={kind}
      data-priority={priority ? "true" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.skyTop} />
          <stop offset="1" stopColor={C.skyBottom} />
        </linearGradient>
        <linearGradient id={id("floor")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.stone} />
          <stop offset="1" stopColor={C.stoneMid} />
        </linearGradient>
        <linearGradient id={id("reveal")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.forest} stopOpacity="0.42" />
          <stop offset="1" stopColor={C.forest} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("revealV")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.forest} stopOpacity="0.35" />
          <stop offset="1" stopColor={C.forest} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("light")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("shade")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.forest} stopOpacity="0" />
          <stop offset="1" stopColor={C.forest} stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={id("interior")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.forest} />
          <stop offset="1" stopColor={C.forestSoft} />
        </linearGradient>
        <linearGradient id={id("glow")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbf8f1" />
          <stop offset="1" stopColor={C.skyBottom} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id("sun")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffdf7" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fffdf7" stopOpacity="0" />
        </radialGradient>
        {kind === "arcade" ? (
          <>
            <clipPath id={id("clipA1")}><path d={archHole(160, 430, 120, 830)} /></clipPath>
            <clipPath id={id("clipA2")}><path d={archHole(400, 430, 120, 830)} /></clipPath>
            <clipPath id={id("clipA3")}><path d={archHole(640, 430, 120, 830)} /></clipPath>
          </>
        ) : null}
        {kind === "vault" ? (
          <clipPath id={id("clipV")}><path d={archHole(400, 520, 300, 1000)} /></clipPath>
        ) : null}
      </defs>

      {kind === "arcade" ? <Arcade id={id} url={url} /> : null}
      {kind === "colonnade" ? <Colonnade url={url} /> : null}
      {kind === "stair" ? <Stair url={url} /> : null}
      {kind === "facade" ? <Facade url={url} /> : null}
      {kind === "horizon" ? <Horizon url={url} /> : null}
      {kind === "vault" ? <Vault id={id} url={url} /> : null}
      {kind === "cornice" ? <Cornice url={url} /> : null}
    </svg>
  );
}

type U = (name: string) => string;
type I = (name: string) => string;

/* --- Arcade : trois arches de pierre claire ouvrant sur une seconde arcade et la mer. */
function Arcade({ id, url }: { id: I; url: U }) {
  const front = [160, 400, 640];
  const far = [100, 300, 500, 700];
  return (
    <g>
      <rect width="800" height="1000" fill={url("sky")} />
      <rect x="0" y="600" width="800" height="100" fill={C.sea} />
      <rect x="0" y="600" width="800" height="2" fill={C.seaDeep} />
      <rect x="0" y="640" width="800" height="1" fill={C.seaDeep} opacity="0.5" />
      {/* Arcade lointaine */}
      <path
        fillRule="evenodd"
        fill={C.stoneMid}
        d={`M0 250 H800 V700 H0 Z ${far.map((cx) => archHole(cx, 470, 68, 700)).join(" ")}`}
      />
      <rect x="0" y="250" width="800" height="6" fill={C.stoneDark} />
      {far.map((cx) => (
        <path key={cx} d={archHole(cx, 470, 68, 700)} fill={url("revealV")} opacity="0.5" />
      ))}
      {/* Sol lointain */}
      <rect x="0" y="700" width="800" height="130" fill={C.stone} />
      {/* Mur de premier plan */}
      <path
        fillRule="evenodd"
        fill={C.stoneLight}
        d={`M0 0 H800 V830 H0 Z ${front.map((cx) => archHole(cx, 430, 120, 830)).join(" ")}`}
      />
      {/* Intrados ombrés */}
      {front.map((cx, i) => (
        <g key={cx} clipPath={`url(#${id(`clipA${i + 1}`)})`}>
          <path d={archHole(cx, 430, 120, 830)} fill="none" stroke={url("reveal")} strokeWidth="64" />
          <rect x={cx - 120} y="430" width="34" height="400" fill={url("reveal")} />
        </g>
      ))}
      {/* Corniche et cordon */}
      <rect x="0" y="118" width="800" height="10" fill={C.stone} />
      <rect x="0" y="128" width="800" height="2" fill={C.stoneDark} opacity="0.6" />
      <rect x="0" y="176" width="800" height="1.5" fill={C.brass} opacity="0.55" />
      {/* Clés de voûte */}
      {front.map((cx) => (
        <rect key={cx} x={cx - 9} y="296" width="18" height="30" fill={C.stone} />
      ))}
      {/* Sol de premier plan */}
      <rect x="0" y="830" width="800" height="170" fill={url("floor")} />
      <rect x="0" y="830" width="800" height="3" fill={C.stoneDark} opacity="0.7" />
      {/* Ombres portées au sol */}
      {[40, 280, 520].map((x) => (
        <path key={x} d={`M${x} 833 H${x + 40} L${x + 160} 1000 H${x + 80} Z`} fill={C.forest} opacity="0.13" />
      ))}
      <path d="M760 833 H800 V1000 H790 Z" fill={C.forest} opacity="0.13" />
      {/* Lumière rasante */}
      <path d="M0 0 H520 L0 640 Z" fill={url("light")} />
    </g>
  );
}

/* --- Colonnade : rythme régulier de colonnes devant un intérieur profond. */
function Colonnade({ url }: { url: U }) {
  const cols = [70, 250, 430, 610];
  return (
    <g>
      <rect width="800" height="1000" fill={url("interior")} />
      <rect x="0" y="0" width="800" height="240" fill={url("glow")} opacity="0.35" />
      {/* Sol */}
      <rect x="0" y="820" width="800" height="180" fill={url("floor")} />
      <rect x="0" y="820" width="800" height="2" fill={C.stoneDark} />
      {/* Entablement */}
      <rect x="0" y="120" width="800" height="70" fill={C.stoneLight} />
      <rect x="0" y="190" width="800" height="14" fill={C.stone} />
      <rect x="0" y="204" width="800" height="3" fill={C.stoneDark} opacity="0.7" />
      <rect x="0" y="150" width="800" height="1.5" fill={C.brass} opacity="0.6" />
      {cols.map((x) => (
        <g key={x}>
          {/* Chapiteau */}
          <rect x={x - 6} y="207" width="132" height="22" fill={C.stone} />
          <rect x={x + 4} y="229" width="112" height="16" fill={C.stoneMid} />
          {/* Fût avec ombre latérale */}
          <rect x={x + 8} y="245" width="104" height="530" fill={C.stoneLight} />
          <rect x={x + 8} y="245" width="104" height="530" fill={url("shade")} />
          <rect x={x + 22} y="245" width="3" height="530" fill={C.stoneDark} opacity="0.25" />
          <rect x={x + 52} y="245" width="2" height="530" fill={C.stoneDark} opacity="0.2" />
          {/* Base */}
          <rect x={x + 2} y="775" width="116" height="18" fill={C.stone} />
          <rect x={x - 6} y="793" width="132" height="27" fill={C.stoneMid} />
          {/* Ombre au sol */}
          <path d={`M${x + 8} 822 H${x + 112} L${x + 190} 1000 H${x + 86} Z`} fill={C.forest} opacity="0.18" />
        </g>
      ))}
      <path d="M0 0 H400 L0 560 Z" fill={url("light")} opacity="0.5" />
    </g>
  );
}

/* --- Escalier : volées de pierre montant vers la lumière. */
function Stair({ url }: { url: U }) {
  const steps = Array.from({ length: 11 }, (_, i) => i);
  return (
    <g>
      <rect width="800" height="1000" fill={url("sky")} />
      <ellipse cx="620" cy="140" rx="360" ry="260" fill={url("sun")} />
      {/* Mur de gauche */}
      <path d="M0 0 H300 V1000 H0 Z" fill={C.stoneLight} />
      <path d="M300 0 H330 V1000 H300 Z" fill={url("reveal")} />
      <rect x="0" y="0" width="300" height="1000" fill={url("shade")} opacity="0.35" />
      <rect x="0" y="330" width="300" height="2" fill={C.brass} opacity="0.5" />
      {/* Marches (de bas en haut, vers la droite) */}
      {steps.map((i) => {
        const y = 1000 - i * 62;
        const x = 300 + i * 32;
        return (
          <g key={i}>
            <rect x={x} y={y - 62} width={800 - x} height="24" fill={C.stone} />
            <rect x={x} y={y - 38} width={800 - x} height="38" fill={C.stoneMid} />
            <rect x={x} y={y - 62} width={800 - x} height="2" fill={C.stoneLight} />
            <rect x={x} y={y - 38} width={800 - x} height="2" fill={C.stoneDark} opacity="0.6" />
          </g>
        );
      })}
      {/* Ombre de la rampe sur les marches */}
      <path d="M330 1000 L330 380 L800 200 L800 380 L420 1000 Z" fill={C.forest} opacity="0.12" />
      {/* Balustrade */}
      <path d="M330 330 L800 130 L800 150 L330 350 Z" fill={C.stoneMid} />
      {Array.from({ length: 9 }, (_, i) => 360 + i * 52).map((x) => {
        const top = 350 - (x - 330) * 0.4255;
        return <rect key={x} x={x} y={top} width="10" height="112" fill={C.stoneMid} opacity="0.9" />;
      })}
      <path d="M330 462 L800 262 L800 280 L330 480 Z" fill={C.stoneDark} opacity="0.7" />
      <path d="M0 0 H560 L0 700 Z" fill={url("light")} opacity="0.6" />
    </g>
  );
}

/* --- Façade : élévation rythmée par de hautes ouvertures. */
function Facade({ url }: { url: U }) {
  const cols = [70, 300, 530];
  const rows = [150, 450, 750];
  return (
    <g>
      <rect width="800" height="1000" fill={C.stoneLight} />
      <rect width="800" height="1000" fill={url("shade")} opacity="0.25" />
      {/* Bandeaux */}
      {[130, 430, 730].map((y) => (
        <g key={y}>
          <rect x="0" y={y - 20} width="800" height="20" fill={C.stone} />
          <rect x="0" y={y} width="800" height="3" fill={C.stoneDark} opacity="0.6" />
        </g>
      ))}
      <rect x="0" y="60" width="800" height="1.5" fill={C.brass} opacity="0.55" />
      {/* Fenêtres */}
      {rows.map((y) =>
        cols.map((x) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="200" height="230" fill={C.stone} />
            <rect x={x + 12} y={y + 12} width="176" height="206" fill={url("interior")} />
            <rect x={x + 12} y={y + 12} width="176" height="60" fill="#ffffff" opacity="0.08" />
            <rect x={x + 98} y={y + 12} width="4" height="206" fill={C.stoneLight} opacity="0.7" />
            <rect x={x + 12} y={y + 108} width="176" height="4" fill={C.stoneLight} opacity="0.7" />
            {/* Appui */}
            <rect x={x - 10} y={y + 230} width="220" height="14" fill={C.stoneMid} />
            <path d={`M${x - 10} ${y + 244} H${x + 210} L${x + 216} ${y + 262} H${x - 4} Z`} fill={C.forest} opacity="0.15" />
            {/* Ombre du tableau */}
            <rect x={x + 12} y={y + 12} width="24" height="206" fill={url("reveal")} />
          </g>
        )),
      )}
      <path d="M0 0 H480 L0 620 Z" fill={url("light")} opacity="0.55" />
    </g>
  );
}

/* --- Horizon : balustrade ouverte sur la mer. */
function Horizon({ url }: { url: U }) {
  const balusters = Array.from({ length: 9 }, (_, i) => 60 + i * 86);
  return (
    <g>
      <rect width="800" height="1000" fill={url("sky")} />
      <ellipse cx="560" cy="330" rx="420" ry="240" fill={url("sun")} opacity="0.8" />
      <rect x="0" y="520" width="800" height="200" fill={C.sea} />
      <rect x="0" y="520" width="800" height="2" fill={C.seaDeep} />
      {[560, 600, 650, 700].map((y) => (
        <rect key={y} x="0" y={y} width="800" height="1" fill={C.seaDeep} opacity="0.45" />
      ))}
      {/* Terrasse */}
      <rect x="0" y="720" width="800" height="280" fill={url("floor")} />
      {/* Balustrade */}
      <rect x="0" y="600" width="800" height="26" fill={C.stoneLight} />
      <rect x="0" y="626" width="800" height="8" fill={C.stone} />
      {balusters.map((x) => (
        <g key={x}>
          <path
            d={`M${x} 634 h44 v14 h-8 c0 20 -6 34 -6 58 c0 30 8 46 8 70 h8 v14 h-48 v-14 h8 c0 -24 8 -40 8 -70 c0 -24 -6 -38 -6 -58 h-8 z`}
            fill={C.stone}
          />
          <path
            d={`M${x + 22} 648 c0 20 -6 34 -6 58 c0 30 8 46 8 70`}
            fill="none"
            stroke={C.stoneDark}
            strokeWidth="6"
            opacity="0.35"
          />
        </g>
      ))}
      <rect x="0" y="804" width="800" height="24" fill={C.stone} />
      <rect x="0" y="828" width="800" height="4" fill={C.stoneDark} opacity="0.6" />
      <path d="M0 832 H800 V1000 H0 Z" fill={C.forest} opacity="0.1" />
      <path d="M0 0 H520 L0 520 Z" fill={url("light")} opacity="0.5" />
    </g>
  );
}

/* --- Voûte : arche de pierre franchissant un vide vers la lumière. */
function Vault({ id, url }: { id: I; url: U }) {
  const rings = [300, 250, 205, 165, 130];
  return (
    <g>
      <rect width="800" height="1000" fill={C.stoneMid} />
      <rect width="800" height="1000" fill={url("shade")} opacity="0.4" />
      <g clipPath={`url(#${id("clipV")})`}>
        <rect width="800" height="1000" fill={url("sky")} />
        <ellipse cx="400" cy="560" rx="260" ry="300" fill={url("sun")} />
        <rect x="0" y="820" width="800" height="180" fill={url("floor")} />
        {rings.map((r, i) => (
          <path
            key={r}
            d={archHole(400, 520 + i * 40, r, 1000)}
            fill="none"
            stroke={C.forest}
            strokeOpacity={0.12 + i * 0.05}
            strokeWidth={40 - i * 5}
          />
        ))}
        {rings.map((r, i) => (
          <path
            key={`l-${r}`}
            d={archHole(400, 520 + i * 40, r - 18, 1000)}
            fill="none"
            stroke={C.stoneLight}
            strokeWidth="2"
            opacity="0.8"
          />
        ))}
        <path d="M100 1000 L400 780 L700 1000 Z" fill={C.forest} opacity="0.12" />
        <rect x="0" y="0" width="800" height="1000" fill={url("reveal")} opacity="0.55" />
      </g>
      {/* Bandeau d'archivolte */}
      <path d={archHole(400, 520, 318, 1000)} fill="none" stroke={C.stoneLight} strokeWidth="14" />
      <path d={archHole(400, 520, 330, 1000)} fill="none" stroke={C.brass} strokeWidth="1.5" opacity="0.6" />
      <rect x="386" y="188" width="28" height="44" fill={C.stoneLight} />
      <path d="M0 0 H420 L0 560 Z" fill={url("light")} opacity="0.5" />
    </g>
  );
}

/* --- Corniche : superposition de moulures et de denticules. */
function Cornice({ url }: { url: U }) {
  const dentils = Array.from({ length: 14 }, (_, i) => 20 + i * 56);
  return (
    <g>
      <rect width="800" height="1000" fill={C.stoneLight} />
      <rect width="800" height="1000" fill={url("shade")} opacity="0.2" />
      {/* Larmier */}
      <rect x="0" y="120" width="800" height="70" fill={C.stone} />
      <path d="M0 190 H800 V236 H0 Z" fill={C.forest} opacity="0.22" />
      <rect x="0" y="150" width="800" height="1.5" fill={C.brass} opacity="0.6" />
      {/* Doucine */}
      <path d="M0 236 H800 V300 C600 300 600 330 400 330 C200 330 200 300 0 300 Z" fill={C.stoneMid} />
      <rect x="0" y="330" width="800" height="36" fill={C.stone} />
      {/* Denticules */}
      <rect x="0" y="366" width="800" height="90" fill={C.stoneMid} />
      {dentils.map((x) => (
        <g key={x}>
          <rect x={x} y="366" width="34" height="90" fill={C.stoneLight} />
          <rect x={x + 34} y="366" width="10" height="90" fill={C.forest} opacity="0.35" />
        </g>
      ))}
      <rect x="0" y="456" width="800" height="18" fill={C.stone} />
      <path d="M0 474 H800 V520 H0 Z" fill={C.forest} opacity="0.18" />
      {/* Frise lisse */}
      <rect x="0" y="520" width="800" height="240" fill={C.stoneLight} />
      <rect x="0" y="760" width="800" height="14" fill={C.stone} />
      <rect x="0" y="774" width="800" height="3" fill={C.stoneDark} opacity="0.6" />
      {/* Architrave */}
      <rect x="0" y="777" width="800" height="223" fill={C.stone} />
      <rect x="0" y="860" width="800" height="2" fill={C.stoneDark} opacity="0.5" />
      <rect x="0" y="940" width="800" height="2" fill={C.stoneDark} opacity="0.5" />
      <path d="M0 0 H520 L0 700 Z" fill={url("light")} opacity="0.6" />
    </g>
  );
}
