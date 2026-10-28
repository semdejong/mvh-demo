import werkstukken from "@/data/werkstukken.json";

export type Photo = {
  categorie: string;
  src: string;
  w: number;
  h: number;
  altBasis: string;
  alt: string;
};

const ALT: Record<string, string> = {
  "/img/hero/hero-01.jpg":
    "Aluminium matrijs op de machinetafel tijdens het frezen, met scallop-oppervlak van de frees en spanmiddelen rondom",
  "/img/machine/machine-01.jpg":
    "Bridgeport XR 1270, gesloten verticaal bewerkingscentrum, wit, met besturing rechts",
  "/img/machine/machine-02.jpg":
    "Machinehal van MVH met drie gesloten cnc-bewerkingscentra, opname uit 2021",
  "/img/pand/pand-01.jpg":
    "Bedrijfspand van MVH aan de Metaalstraat in Haaksbergen, rode gevel met gebogen glaspartij",
  "/img/pand/pand-02.jpg":
    "Bedrijfspand van MVH aan de Metaalstraat in Haaksbergen, tweede opname van de gevel",
  "/img/pand/pand-03.jpg":
    "Bedrijfspand van MVH aan de Metaalstraat in Haaksbergen, derde opname van de gevel",
  "/img/rotatie/rotatie-01.jpg":
    "Gefreesde aluminium rotatievorm, twee helften op een werkbank: een diepe holte en een vlak deksel met boringen",
  "/img/blisters/blisters-01.jpg":
    "Blistermatrijs naast een model, een gevormde zwarte tray en een verpakking met miniatuurflesjes",
  "/img/eps/eps-01.jpg":
    "Grote donkere vormplaat in de machine, de frees trekt een golvende holte",
  "/img/spuitgietwerk/spuitgietwerk-01.jpg":
    "Grote aluminium spuitgietmatrijshelft met gebogen holte, messing bussen en sleuven, op een pallet",
  "/img/vrije-vorm/vrije-vorm-01.jpg":
    "Vier vrij gefreesde ringvormige prototypes op een plaat in de werkplaats",
  "/img/vrije-vorm/vrije-vorm-11.jpg":
    "Lange aluminium plaat met ovale sleuven en een koperkleurige leiding, op een heftruckvork",
};

export const photos: Photo[] = werkstukken.map((photo) => {
  const siblings = werkstukken.filter((item) => item.categorie === photo.categorie);
  const index = siblings.findIndex((item) => item.src === photo.src) + 1;
  return {
    ...photo,
    alt:
      ALT[photo.src] ??
      `${photo.altBasis}, opname ${index} van ${siblings.length}, werk van MVH in Haaksbergen`,
  };
});

export function photosByCategory(category: string): Photo[] {
  return photos.filter((photo) => photo.categorie === category);
}

export function photoBySrc(src: string): Photo | undefined {
  return photos.find((photo) => photo.src === src);
}
