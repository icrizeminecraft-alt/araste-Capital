"""Assemble REFERENCE.md à partir de seed.json, des fiches raw/*.json et des sections rédigées (narrative/*.md).

Usage : python3 -I docs/references/silver-oak/assemble.py
Document de travail interne : rien n'est publié sur le site.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "raw")
NARR = os.path.join(HERE, "narrative")
OUT = os.path.join(HERE, "REFERENCE.md")

seed = json.load(open(os.path.join(HERE, "seed.json"), encoding="utf-8"))
pages, third, gaps = {}, [], []
for name in sorted(os.listdir(RAW)) if os.path.isdir(RAW) else []:
    if not name.endswith(".json"):
        continue
    try:
        data = json.load(open(os.path.join(RAW, name), encoding="utf-8"))
    except Exception as exc:  # fichier partiel
        print(f"ignoré {name}: {exc}")
        continue
    if name.startswith("third-"):
        third.append(data)
    elif name.startswith("gaps-"):
        gaps.append(data)
    elif isinstance(data, dict) and data.get("url"):
        pages[data["url"].rstrip("/").lower()] = data

NOISE = re.compile(r"(?i)^\[?(not captured|none captured|inferred|unconfirmed|not harvested|no (new )?snippet|n/a|unknown|not found|not available|none)\b")

def esc(s, cap=None):
    s = (s or "").replace("\n", " ").strip() if isinstance(s, str) else json.dumps(s, ensure_ascii=False)
    return s if not cap or len(s) <= cap else s[: cap - 1] + "…"

def clean(items):
    out = []
    for x in items or []:
        txt = x if isinstance(x, str) else (x.get("claim") or x.get("q") or x.get("heading") or "") if isinstance(x, dict) else str(x)
        if NOISE.match(esc(txt)):
            continue
        out.append(x)
    return out

def narrative(name):
    path = os.path.join(NARR, name)
    return open(path, encoding="utf-8").read().strip() if os.path.exists(path) else f"_Section à rédiger : {name}_"

def group_of(url):
    u = url.lower()
    if u.rstrip("/") == "https://www.silveroakcapital.co.uk":
        return "accueil"
    if "/case-studies" in u:
        return "etudes-de-cas"
    if any(s in u for s in ["about-us", "contact", "introducers", "lenders", "lender-calculator", "faq", "blogs", "western-europe", "types-of-borrowing"]):
        return "cabinet"
    if any(u.rstrip("/") == a.rstrip("/") for a in seed["pages"]["articles"]):
        return "articles"
    return "services"

GROUPS = collections.OrderedDict([
    ("accueil", "Accueil"), ("services", "Pages produits et services"), ("cabinet", "Cabinet, prêteurs, apporteurs, FAQ, contact"),
    ("etudes-de-cas", "Études de cas"), ("articles", "Articles (blog)"),
])
all_urls = []
for key in ["servicesAndFirm", "caseStudies", "articles"]:
    all_urls.extend(seed["pages"][key])
grouped = collections.defaultdict(list)
for url in all_urls:
    p = pages.get(url.rstrip("/").lower())
    grouped[group_of(url)].append((url, (p or {}).get("title") or url.replace("https://www.silveroakcapital.co.uk/", "/"), p))

L = []
A = L.append
A("# Référence : Silver Oak Capital (silveroakcapital.co.uk)")
A("")
A("> Document de travail interne, non destiné à la publication. Il rassemble ce qui a pu être récolté du site public de Silver Oak Capital et de sources tierces, pour servir de base de contenu au site ARASTE CAPITAL (à réécrire dans le style et la voix du cabinet). Les citations en anglais sont reproduites telles quelles. Aucune donnée chiffrée ni affirmation de Silver Oak ne doit être reprise comme un fait concernant ARASTE sans validation.")
A("")
A("## 1. Note de méthode"); A(""); A(narrative("01-methode.md")); A("")
A("## 2. Carte d'identité de la société"); A(""); A(narrative("02-identite.md")); A("")
A("## 3. Plan du site"); A("")
A("Navigation principale (relevée dans les extraits) : " + " · ".join(seed["navigation"]["top"]) + ".")
A("")
for family, items in seed["navigation"]["services"].items():
    A(f"- **{family}** : " + " ; ".join(items))
A(f"- **International** : " + ", ".join(seed["navigation"]["international"]))
A("")
for g, title in GROUPS.items():
    if not grouped.get(g):
        continue
    A(f"### {title} ({len(grouped[g])})"); A("")
    for url, t, p in grouped[g]:
        flag = "" if p else " _(non extraite : voir section 10)_"
        A(f"- [{esc(t, 110)}]({url}){flag}")
    A("")
A("## 4. Fiche par page"); A("")
A("Chaque fiche reprend ce que les extraits de moteur de recherche ont révélé de la page. Une fiche courte signifie que peu de texte a été indexé, pas que la page est vide.")
A("")
for g, title in GROUPS.items():
    rich = [(u, t, p) for u, t, p in grouped.get(g, []) if p]
    if not rich:
        continue
    A(f"### {title}"); A("")
    for url, t, p in rich:
        A(f"#### {esc(t, 110)}"); A("")
        A(f"URL : <{url}>  ")
        conf = re.split(r"[\s:.;,(]", (p.get("confidence") or "").strip())[0] or "non précisée"
        A(f"Confiance : {conf} · Recherches effectuées : {p.get('queriesRun', 0)}"); A("")
        if p.get("h1") and not NOISE.match(p["h1"]):
            A(f"**H1 :** {esc(p['h1'], 200)}  ")
        if p.get("metaDescription") and not NOISE.match(p["metaDescription"]):
            A(f"**Meta description :** {esc(p['metaDescription'], 400)}")
        A("")
        if p.get("summary"):
            A(f"**Résumé.** {esc(p['summary'], 2000)}"); A("")
        secs = clean(p.get("sections"))
        if secs:
            A("**Sections repérées**"); A("")
            for s in secs[:14]:
                if isinstance(s, dict):
                    A(f"- **{esc(s.get('heading'), 120)}** — {esc(s.get('content'), 600)}")
            A("")
        verb = clean(p.get("verbatim"))
        if verb:
            A("**Phrases verbatim (anglais)**"); A("")
            for v in verb[:30]:
                A(f"> {esc(v, 420)}"); A(">")
            L.pop(); A("")
        for key, label in [("services", "Produits et services cités"), ("useCases", "Cas d'usage"), ("terms", "Conditions, montants, délais, frais"), ("eligibility", "Critères d'éligibilité"), ("lenderTypes", "Types de prêteurs"), ("processSteps", "Étapes du processus"), ("geography", "Géographie"), ("ctas", "Appels à l'action")]:
            items = clean(p.get(key))
            if items:
                A(f"**{label}**"); A("")
                for x in items[:14]:
                    A(f"- {esc(x, 300)}")
                A("")
        faq = clean(p.get("faq"))
        if faq:
            A("**Questions fréquentes**"); A("")
            for f in faq[:14]:
                if isinstance(f, dict):
                    A(f"- **{esc(f.get('q'), 200)}** {esc(f.get('a'), 700)}")
            A("")
        claims = clean(p.get("claims"))
        if claims:
            A("**Chiffres, promesses, références (à ne pas reprendre sans validation)**"); A("")
            for c in claims[:14]:
                if isinstance(c, dict):
                    A(f"- ({esc(c.get('kind'), 30)}) {esc(c.get('claim'), 300)}")
            A("")
        if p.get("notes") and not re.match(r"(?i)^(search blocked|run limitation|harvest incomplete|run note)", p["notes"]):
            A(f"_Notes d'extraction : {esc(p['notes'], 400)}_"); A("")
A("## 5. Matrice de l'offre"); A(""); A(narrative("05-matrice.md")); A("")
A("## 6. Processus et méthode de travail"); A(""); A(narrative("06-processus.md")); A("")
A("## 7. Études de cas citées"); A("")
for url, t, p in grouped.get("etudes-de-cas", []):
    A(f"- **{esc(t, 120)}** — {esc((p or {}).get('summary'), 600) if p else 'non extraite'} ({url})")
A("")
A("## 8. Chiffres, promesses et éléments à ne pas reprendre tels quels"); A(""); A(narrative("08-reserves.md")); A("")
A("### Relevé des affirmations (toutes pages)"); A("")
claims = collections.OrderedDict()
for p in pages.values():
    for c in clean(p.get("claims")):
        if isinstance(c, dict) and c.get("claim"):
            claims.setdefault(esc(c["claim"]).lower(), (esc(c["claim"], 300), c.get("kind", "autre"), set()))[2].add(p.get("url"))
by_kind = collections.defaultdict(list)
for _, (claim, kind, urls) in claims.items():
    by_kind[kind or "autre"].append((claim, urls))
for kind in sorted(by_kind):
    A(f"**{kind}**"); A("")
    for claim, urls in by_kind[kind][:60]:
        A(f"- {claim} _(source : {', '.join(sorted(u.replace('https://www.silveroakcapital.co.uk', '') or '/' for u in urls if u))})_")
    if len(by_kind[kind]) > 60:
        A(f"- … et {len(by_kind[kind]) - 60} autres (voir les fiches).")
    A("")
A("### Faits relevés dans les sources tierces"); A("")
seen = set()
for t in third:
    for f in t.get("facts") or []:
        k = esc(f.get("fact")).lower()
        if not k or k in seen:
            continue
        seen.add(k)
        verb = f" — « {esc(f.get('verbatim'), 300)} »" if f.get("verbatim") else ""
        A(f"- {esc(f.get('fact'), 400)} _(source : {esc(f.get('source'), 80)}{', ' + f['url'] if f.get('url') else ''} ; confiance {esc(f.get('confidence'), 20)})_{verb}")
A("")
A("## 9. Ce que Silver Oak couvre et que le site ARASTE ne couvre pas encore"); A(""); A(narrative("09-mapping.md")); A("")
A("## 10. Ce qui reste à récupérer"); A(""); A(narrative("10-reste.md")); A("")
found = {}
for g in gaps:
    for f in g.get("found") or []:
        k = (f.get("url") or "").rstrip("/").lower()
        if k and "silveroakcapital" in k and k not in pages and k not in found:
            found[k] = f
if found:
    A("### Pages repérées par la passe de complément (non inventoriées auparavant)"); A("")
    for k, f in sorted(found.items()):
        A(f"- **{esc(f.get('title'), 120)}** — {esc(f.get('summary'), 500)} (<{f.get('url')}>)")
        for v in (f.get("verbatim") or [])[:3]:
            A(f"  > {esc(v, 300)}")
    A("")
not_found = sorted({esc(x, 200) for g in gaps for x in (g.get("notFound") or [])})
if not_found:
    A("### Cherché sans résultat"); A("")
    for x in not_found[:40]:
        A(f"- {x}")
    A("")
missing = [u for u in all_urls if u.rstrip("/").lower() not in pages]
if missing:
    A("Pages recensées mais non extraites (aucune recherche dédiée n'a encore pu être effectuée) :"); A("")
    for u in missing:
        A(f"- <{u}>")
    A("")
open(OUT, "w", encoding="utf-8").write("\n".join(L))
print(f"{OUT} : {len(L)} lignes, {sum(len(l) for l in L) // 1024} Ko, {len(pages)} fiches, {len(missing)} pages non extraites, {sum(len(t.get('facts') or []) for t in third)} faits tiers")
