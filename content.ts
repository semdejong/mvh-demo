/**
 * Bedrijfsgegevens van MVH. Kleuren uit het logo.
 * Ontbrekende feiten blijven als [door klant …] staan — niet invullen.
 */
export const content = {
  slug: "mvh-demo",

  company: {
    legalName: "MVH Matrijzen en Vormenbouw Haaksbergen BV",
    brand: "Matrijzen & Vormenbouw Haaksbergen",
    short: "MVH",
    logo: "/img/logo-mvh.png",
    emblem: "/img/logo-mvh-beeldmerk.png",
    street: "Metaalstraat 20a",
    postalCode: "7483 PD",
    city: "Haaksbergen",
    country: "Nederland",
    phoneDisplay: "+31 (0)53 572 44 22",
    phoneTel: "tel:+31535724422",
    phoneShort: "053 572 44 22",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Metaalstraat+20a%2C+7483+PD+Haaksbergen",
    kvk: "[door klant aan te vullen]",
    hours: "[door klant aan te vullen]",
    parking: "[door klant aan te vullen]",
    founded: "januari 2008",
    youtube: "https://www.youtube.com/@mvhaaksbergen",
    border: "bedrijventerrein, ongeveer 5 km van de Duitse grens",
  },

  people: [
    {
      name: "Lutz Noordink",
      email: "l.noordink@mvhaaksbergen.nl",
      mobileDisplay: "+31 (0)6 21 54 71 36",
      mobileTel: "tel:+31621547136",
    },
    {
      name: "Angela Noordink",
      email: "angela@mvhaaksbergen.nl",
      mobileDisplay: "",
      mobileTel: "",
    },
  ],

  colors: {
    primary: "#29235C",
    primaryForeground: "#ffffff",
    accent: "#3D9BD6",
    background: "#F2F3F4",
    foreground: "#575756",
    muted: "#DADDE0",
  },

  seo: {
    title: "Matrijzen & Vormenbouw Haaksbergen — matrijzen en vormen uit Haaksbergen",
    description:
      "Matrijzen en vormen voor thermo- en vacuümvormen. MVH in Haaksbergen ontwerpt met 3D CAD-CAM, freest op eigen cnc-centra, werkt af en levert zelf af.",
    lang: "nl",
  },

  nav: [
    { label: "Toepassingen", href: "/toepassingen" },
    { label: "Werkwijze", href: "/werkwijze" },
    { label: "Machinepark", href: "/machinepark" },
    { label: "Over MVH", href: "/over-mvh" },
    { label: "Contact", href: "/contact" },
  ],

  navDe: [
    { label: "Startseite", href: "/de" },
    { label: "Anwendungen", href: "/toepassingen" },
    { label: "Maschinenpark", href: "/de/maschinenpark" },
    { label: "Kontakt", href: "/de/kontakt" },
  ],

  values: [
    {
      title: "Levertijd",
      text: "Levertijd hoort bij de vijf punten die we hoog houden. Een termijn spreken we per matrijs af. Een vaste doorlooptijd staat niet op de site.",
    },
    {
      title: "Kwaliteit",
      text: "De matrijs wordt gefreesd, waar nodig verder afgewerkt en schoon gemaakt voor hij de deur uit gaat.",
    },
    {
      title: "Flexibiliteit",
      text: "We denken oplossingsgericht mee, van de tekening tot de afwerking.",
    },
    {
      title: "Vakkundigheid",
      text: "We ontwikkelen zelf met een 3D CAD-CAM pakket en frezen op eigen cnc-bewerkingscentra.",
    },
    {
      title: "Goede prijs-kwaliteitverhouding",
      text: "Een van de vijf punten vanaf de start in 2008. Een prijs volgt op een concrete aanvraag, niet op deze site.",
    },
  ],

  valuesDe: [
    { title: "Lieferzeit", text: "Lieferzeit steht bei uns hoch im Kurs. Eine Frist sprechen wir je Werkzeug ab. Eine feste Durchlaufzeit steht nicht auf der Website." },
    { title: "Flexibilität", text: "Wir denken lösungsorientiert mit, von der Zeichnung bis zur Nacharbeit." },
    { title: "Qualität", text: "Das Werkzeug wird gefräst, wo nötig weiterbearbeitet und gereinigt, bevor es das Haus verlässt." },
    { title: "Kompetenz", text: "Wir entwickeln selbst mit einem 3D-CAD-CAM-Programm und fräsen auf eigenen CNC-Bearbeitungszentren." },
    { title: "Gutes Preis-Qualitätsverhältnis", text: "Einer der fünf Punkte seit dem Start 2008. Einen Preis nennen wir zur konkreten Anfrage, nicht auf dieser Website." },
  ],

  process: [
    {
      id: "ontwerpen",
      op: "OP 10",
      title: "Ontwerpen",
      detail: "3D CAD-CAM",
      text: "We ontwikkelen de matrijs of vorm zelf met een 3D CAD-CAM pakket (Mastercam) en denken oplossingsgericht mee.",
      more: "U stuurt een 2D-tekening of een 3D-model. Wij zetten daar het freesprogramma uit. Op de huidige site staat Mastercam X5; de versie die nu draait is nog niet bevestigd. Een schermafbeelding van het pakket staat er niet bij.",
    },
    {
      id: "frezen",
      op: "OP 20",
      title: "Frezen",
      detail: "cnc",
      text: "Daarna frezen we het programma op een van onze eigen cnc-bewerkingscentra.",
      more: "Welke bank het wordt, hangt af van afmeting, toepassing of uitgangsmateriaal. Drie machines staan met werkbereik op de site. De grootste is de Hartford MVP 16: X 1600 · Y 820 · Z 600 mm.",
    },
    {
      id: "afwerken",
      op: "OP 30",
      title: "Afwerken",
      detail: "waar nodig",
      text: "Indien nodig werken we verder af, bijvoorbeeld door vacuümgaatjes te boren, en maken we de matrijs schoon.",
      more: "Niet elke matrijs heeft dezelfde nabewerking. Vacuümgaatjes boren we waar de vorm dat vraagt. Daarna gaat het werkstuk schoon de deur uit.",
    },
    {
      id: "afleveren",
      op: "OP 40",
      title: "Afleveren",
      detail: "bij de klant",
      text: "De matrijs leveren we zelf bij de klant af.",
      more: "U heeft één partij van tekening tot lossen. Een foto van het transport staat niet op de site. Wel staat er werk klaar op een pallet in de hal.",
    },
  ],

  aanleveren: [
    "2D-tekening of 3D-model",
    "materiaal en plaatdikte van het te vormen product",
    "aantallen",
    "de vormmachine waarop de matrijs komt",
    "gewenste levertijd",
  ],

  machines: [
    {
      id: "bridgeport-xr-1270",
      name: "Bridgeport XR 1270",
      axes: 3,
      documented: true,
      x: 1270,
      y: 700,
      z: 610,
      spindleKw: 30,
      spindleRpm: 12000,
      materials: "hout, kunststof en aluminium",
      photo: "/img/machine/machine-01.jpg",
    },
    {
      id: "hartford-mvp-16",
      name: "Hartford MVP 16",
      axes: 3,
      documented: true,
      x: 1600,
      y: 820,
      z: 600,
      spindleKw: null,
      spindleRpm: null,
      materials: "",
      photo: "",
    },
    {
      id: "hartford-lg-1370",
      name: "Hartford LG 1370",
      axes: 3,
      documented: true,
      x: 1300,
      y: 700,
      z: 600,
      spindleKw: null,
      spindleRpm: null,
      materials: "",
      photo: "",
    },
  ],

  machinePlaceholders: 3,

  cam: {
    nameOnSite: "Mastercam X5",
    note: "Mastercam X5 is een versie uit 2010. De versie die nu draait: [door klant te bevestigen].",
    noteDe: "Mastercam X5 ist eine Version von 2010. Die Version, die jetzt läuft: [vom Kunden zu bestätigen].",
  },

  videos: [
    {
      id: "GIGEkoAhFcI",
      title: "Rotatievorm",
      poster: "/img/rotatie/rotatie-01.jpg",
    },
    {
      id: "-oaceArNOzQ",
      title: "Plug",
      poster: "/img/hero/hero-01.jpg",
    },
  ],

  applications: [
    {
      slug: "eps",
      category: "eps",
      title: "EPS-vormen",
      short: "EPS",
      h1: "EPS-vormen, gefreesd in Haaksbergen",
      summary: "Vormen voor EPS. Zelf ontwikkeld, gefreesd en bij u afgeleverd.",
      description:
        "EPS-vormen van MVH in Haaksbergen: zelf ontwikkeld met 3D CAD-CAM, gefreesd op een eigen cnc-bewerkingscentrum, afgewerkt en zelf afgeleverd.",
      paragraphs: [
        "EPS-vormen voor de thermo- en vacuümvormindustrie. We ontwikkelen de vorm met een 3D CAD-CAM pakket en frezen hem op een van onze cnc-bewerkingscentra.",
        "Waar nodig werken we verder af, bijvoorbeeld door vacuümgaatjes te boren. Daarna maken we de vorm schoon en leveren we hem zelf bij u af.",
      ],
    },
    {
      slug: "spuitgietwerk",
      category: "spuitgietwerk",
      title: "Spuitgietwerk",
      short: "Spuitgietwerk",
      h1: "Spuitgietmatrijzen, gefreesd in Haaksbergen",
      summary: "Matrijzen voor spuitgietwerk, holtes en inzetstukken op de eigen machines.",
      description:
        "Spuitgietmatrijzen van MVH in Haaksbergen. Holtes en inzetstukken, gefreesd op eigen cnc-bewerkingscentra, afgewerkt en zelf afgeleverd.",
      paragraphs: [
        "Matrijzen voor spuitgietwerk. Holtes, inzetstukken en pasvlakken frezen we op onze eigen bewerkingscentra.",
        "Afmeting en uitgangsmateriaal bepalen op welke freesbank het programma draait. Het grootste bereik dat op de site staat is X 1600 · Y 820 · Z 600 mm (Hartford MVP 16).",
      ],
    },
    {
      slug: "rotatie",
      category: "rotatie",
      title: "Rotatievormen",
      short: "Rotatie",
      h1: "Rotatiematrijzen voor rotatiegieten",
      summary: "Rotatievormen, vaak twee helften, gefreesd en zelf afgeleverd.",
      description:
        "Rotatiematrijzen en rotatievormen van MVH in Haaksbergen, voor rotatiegieten. Gefreesd op eigen cnc-centra en zelf bij de klant afgeleverd.",
      paragraphs: [
        "Rotatievormen voor rotatiegieten. In het werk zien we vaak twee helften: een diepe holte en een deksel, met flens en boringen.",
        "We frezen de vorm op een eigen cnc-bewerkingscentrum, werken hem waar nodig af, maken hem schoon en leveren hem zelf af.",
      ],
    },
    {
      slug: "blisters",
      category: "blisters",
      title: "Blisters",
      short: "Blisters",
      h1: "Blistermatrijzen voor thermo- en vacuümvormen",
      summary: "Blistermatrijzen met holtes op het product, inclusief afwerking waar nodig.",
      description:
        "Blistermatrijzen van MVH in Haaksbergen. Holtes voor blisterverpakkingen, gefreesd, waar nodig met vacuümgaatjes, en zelf afgeleverd.",
      paragraphs: [
        "Blistermatrijzen voor blisterverpakkingen in de thermo- en vacuümvormindustrie. De holtes volgen het product.",
        "Vacuümgaatjes boren we waar de matrijs dat vraagt. Daarna schoonmaken en zelf bij u afleveren.",
      ],
    },
    {
      slug: "vrije-vorm",
      category: "vrije-vorm",
      title: "Vrije vorm en prototypes",
      short: "Vrije vorm",
      h1: "Vrije vorm en prototypes, vrij gefreesd",
      summary: "Vrij frezen van vormen en prototypes buiten de vaste categorieën.",
      description:
        "Vrije vorm en prototypes van MVH in Haaksbergen. Vrij gefreesd op eigen cnc-bewerkingscentra, van model tot werkstuk.",
      paragraphs: [
        "Vrije vorm en prototypes: werk dat niet in een vaste matrijscategorie valt. We frezen vormen en modellen vrij op de cnc.",
        "Het pad is hetzelfde als bij een matrijs: 3D CAD-CAM, frezen, afwerken waar nodig, schoonmaken en zelf afleveren.",
      ],
    },
    {
      slug: "plugs",
      category: "plugs",
      title: "Plugs",
      short: "Plugs",
      h1: "Plugs (plug assist)",
      summary: "Plug assist voor het vormen. Geen plugfoto’s op de huidige site; wel de video Plug.",
      description:
        "Plugs (plug assist) van MVH in Haaksbergen. De video Plug staat op deze pagina. Foto’s van plugs staan niet op de huidige site.",
      paragraphs: [
        "Een plug, of plug assist, helpt de plaat of folie in de matrijs tijdens het thermo- of vacuümvormen.",
        "Op de huidige site staan geen foto’s van plugs. Onder de video Plug staat een foto uit ander werk, duidelijk als voorbeeld van het frezen. Dat is geen plug.",
      ],
    },
  ],

  fileAccept: ".step,.stp,.igs,.iges,.stl,.dxf,.dwg,.pdf",
} as const;

export type Content = typeof content;
export type Application = (typeof content.applications)[number];
export type AppSlug = Application["slug"];

export function getApplication(slug: string): Application | undefined {
  return content.applications.find((item) => item.slug === slug);
}
