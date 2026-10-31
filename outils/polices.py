"""Produit les fontes du site (src/assets/fonts/) à partir des fontes variables de Google Fonts.

Usage : python3 outils/polices.py <dossier du dépôt google/fonts>
Prérequis : pip install fonttools brotli
Sources : https://github.com/google/fonts (ofl/newsreader, ofl/publicsans), licence SIL OFL 1.1.

Chaque fonte est instanciée (graisse fixée ou restreinte), réduite au sous-ensemble
« latin » de Google Fonts (suffisant pour le français : accents, œ, guillemets,
espaces insécables, €) puis enregistrée en WOFF2 pour le site, ou en TTF statique
pour les images de partage et le PDF de la fiche (bibliothèques sans prise en
charge des fontes variables).
"""

from __future__ import annotations

import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

LATIN = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,"
    "U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
)

# (source dans google/fonts, axes à fixer ou restreindre, fichier produit)
RECETTES = [
    # Titres : graisse 400, taille optique conservée de 24 à 72 (adaptée par le navigateur).
    ("ofl/newsreader/Newsreader[opsz,wght].ttf", {"wght": 400, "opsz": (24, 72)}, "newsreader-latin-opsz-normal.woff2"),
    # Texte et interface : graisses 400 à 500 (texte courant, libellés, boutons).
    ("ofl/publicsans/PublicSans[wght].ttf", {"wght": (400, 500)}, "public-sans-latin-wght-normal.woff2"),
    # Instances statiques pour les images de partage (next/og) et le PDF (pdf-lib).
    ("ofl/newsreader/Newsreader[opsz,wght].ttf", {"wght": 400, "opsz": 72}, "newsreader-400-og.ttf"),
    ("ofl/publicsans/PublicSans[wght].ttf", {"wght": 400}, "public-sans-400-og.ttf"),
]


def produire(source: Path, axes: dict, sortie: Path) -> None:
    police = instancer.instantiateVariableFont(TTFont(source, recalcTimestamp=False), axes, inplace=False, updateFontNames=False)
    options = subset.Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.notdef_outline = True
    options.glyph_names = False
    options.flavor = "woff2" if sortie.suffix == ".woff2" else None
    reducteur = subset.Subsetter(options)
    reducteur.populate(unicodes=subset.parse_unicodes(LATIN))
    reducteur.subset(police)
    police.flavor = options.flavor
    police.save(sortie)
    axes_restants = [a.axisTag for a in police["fvar"].axes] if "fvar" in police else []
    print(f"{sortie.name} : {sortie.stat().st_size} octets, axes {axes_restants or 'aucun (statique)'}")


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    depot = Path(sys.argv[1])
    cible = Path(__file__).resolve().parent.parent / "src" / "assets" / "fonts"
    for chemin, axes, nom in RECETTES:
        produire(depot / chemin, axes, cible / nom)
    for famille, dossier in (("Newsreader", "newsreader"), ("Public-Sans", "publicsans")):
        (cible / f"LICENSE-{famille}.txt").write_bytes((depot / "ofl" / dossier / "OFL.txt").read_bytes())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
