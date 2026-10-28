import type { AppSlug } from "@/content";

export type Note = {
  terms: string;
  deTitle: string;
  deText: string;
  paragraphs: string[];
  sheet: { k: string; v: string }[];
};

export const notes: Record<AppSlug, Note> = {
  eps: {
    terms: "EPS vorm · EPS-matrijs",
    deTitle: "EPS-Formen",
    deText: "Formen für EPS. Entwickelt mit 3D-CAD-CAM, gefräst und selbst geliefert.",
    paragraphs: [
      "EPS-vormen zijn een van de zes toepassingen, naast spuitgietwerk, rotatie, blisters, vrije vorm en plugs. De vorm geeft het EPS-deel zijn holte.",
      "Op de foto’s staat het werk in de machine: een grote donkere plaat, de frees trekt een golvende holte. De Bridgeport XR 1270 is geschikt voor hout, kunststof en aluminium.",
    ],
    sheet: [
      { k: "Categorie", v: "EPS-vormen, een van de zes toepassingen." },
      { k: "Pad", v: "3D CAD-CAM, frezen, afwerken waar nodig, schoonmaken, zelf afleveren." },
      { k: "Op de foto", v: "Drie opnames. De eerste: een grote donkere vormplaat onder de frees." },
      { k: "Materiaal", v: "Van deze plaat niet vermeld. Bridgeport: hout, kunststof en aluminium." },
      { k: "Bereik", v: "Grootste werkbereik: X 1600 · Y 820 · Z 600 mm." },
    ],
  },
  spuitgietwerk: {
    terms: "spuitgietmatrijs · spuitgietwerk",
    deTitle: "Spritzguss",
    deText: "Spritzgussformen mit Kavitäten und Einsätzen, gefräst auf eigenen Zentren.",
    paragraphs: [
      "Spuitgietwerk staat los van thermo- en vacuümvormen, als eigen categorie. Holtes, inzetstukken en pasvlakken frezen we op de cnc.",
      "De foto’s tonen grote aluminium matrijshelften: gebogen holtes, sleuven, boringen en messing bussen. Eén helft ligt op een pallet in de hal.",
      "Welke freesbank het programma draait, volgt uit afmeting en uitgangsmateriaal. Het grootste werkbereik heeft de Hartford MVP 16.",
    ],
    sheet: [
      { k: "Categorie", v: "Matrijzen voor spuitgietwerk." },
      { k: "Op de foto", v: "Acht opnames van aluminium werk, waaronder een grote helft op een pallet." },
      { k: "Wat zichtbaar is", v: "Gebogen holte, sleuven, boringen, messing bussen." },
      { k: "Bereik", v: "X 1600 · Y 820 · Z 600 mm is het grootste werkbereik (Hartford MVP 16)." },
      { k: "Afleveren", v: "De matrijs gaat schoon de deur uit en wordt door ons bij u afgeleverd." },
    ],
  },
  rotatie: {
    terms: "rotatiematrijs · rotatievorm · rotatiegieten",
    deTitle: "Rotationsformen",
    deText: "Rotationsformen, oft zwei Hälften, gefräst und selbst ausgeliefert.",
    paragraphs: [
      "Bij rotatiegieten draait de vorm. De kunststof verdeelt zich langs de wand. Wij frezen die vorm, niet het eindproduct.",
      "Er is een video, Rotatievorm. Die laadt pas als u op afspelen drukt. Tien foto’s staan in de galerij hieronder.",
    ],
    sheet: [
      { k: "Categorie", v: "Rotatievormen voor rotatiegieten." },
      { k: "Opbouw", v: "Vaak twee helften: holte en deksel, flens en boringen." },
      { k: "Op de foto", v: "Tien opnames. De eerste: twee aluminium helften op een werkbank." },
      { k: "Video", v: "Rotatievorm, kanaal @mvhaaksbergen." },
      { k: "Pad", v: "Frezen, afwerken waar nodig, schoonmaken, zelf afleveren." },
    ],
  },
  blisters: {
    terms: "blistermatrijs · blister",
    deTitle: "Blisterwerkzeuge",
    deText: "Blisterwerkzeuge mit Kavitäten nach dem Produkt, inklusive Vakuumbohrungen wo nötig.",
    paragraphs: [
      "Een blistermatrijs volgt het product. De holte is het flesje, het glas of de bak die de folie moet pakken.",
      "Op één opname staan vier stappen naast elkaar: een model, de aluminium matrijs, de gevormde zwarte tray en de verpakking met miniatuurflesjes. Zo is te zien wat de holte doet.",
    ],
    sheet: [
      { k: "Categorie", v: "Blistermatrijzen voor thermo- en vacuümvormen." },
      { k: "Holte", v: "De holte volgt het product, niet een vrije vorm." },
      { k: "Op de foto", v: "Model, aluminium matrijs, gevormde tray en verpakking in één beeld." },
      { k: "Afwerken", v: "Vacuümgaatjes waar de matrijs dat vraagt, daarna schoon." },
      { k: "Aantal foto’s", v: "Vier opnames uit de werkplaats." },
    ],
  },
  "vrije-vorm": {
    terms: "vrije vorm · vrij frezen · prototype",
    deTitle: "Freiform und Prototypen",
    deText: "Frei gefräste Formen und Prototypen außerhalb der festen Kategorien.",
    paragraphs: [
      "Vrije vorm is het werk dat niet in EPS, spuitgieten, rotatie of blister valt. Prototypes horen daarbij.",
      "De serie is gemengd. Er zijn ringen van licht materiaal op een plaat, en aluminium delen, waaronder een lange plaat met ovale sleuven en een koperkleurige leiding.",
      "Zestien opnames, modellen en aluminium werk door elkaar.",
    ],
    sheet: [
      { k: "Categorie", v: "Vrij frezen en prototypes." },
      { k: "Wanneer", v: "Als het werkstuk niet in een vaste matrijscategorie valt." },
      { k: "Op de foto", v: "Ringen op een plaat, en een lange aluminium plaat met ovale sleuven." },
      { k: "Aantal foto’s", v: "Zestien opnames, modellen en aluminium werk door elkaar." },
      { k: "Bereik", v: "Dezelfde machines als de matrijzen. Grootste reis: X 1600 · Y 820 · Z 600 mm." },
    ],
  },
  plugs: {
    terms: "plug · plug assist",
    deTitle: "Plugs (plug assist)",
    deText: "Plug assist für das Formen. Keine Plug-Fotos auf der bisherigen Website, wohl das Video Plug.",
    paragraphs: [
      "De plug is het positief dat de warme plaat of folie voorgaat, voordat de matrijs het vlak trekt. In het vak heet dat een plug assist. De video Plug laadt pas na een klik.",
    ],
    sheet: [
      { k: "Categorie", v: "Plugs, plug assist." },
      { k: "Rol", v: "De plug helpt de plaat of folie in de matrijs tijdens het vormen." },
      { k: "Video", v: "Plug, kanaal @mvhaaksbergen." },
      
      { k: "Voorbeeld", v: "De stilstaande foto is ander werk en is zo gemarkeerd." },
    ],
  },
};
