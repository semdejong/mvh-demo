import { content } from "@/content";

const SCALE = 0.2;

export default function Envelopes({ locale = "nl" }: { locale?: "nl" | "de" }) {
  const machines = content.machines.filter((machine) => machine.documented);
  const maxX = 1600;
  const maxY = 820;
  const width = maxX * SCALE + 28;
  const height = maxY * SCALE + 36;
  const de = locale === "de";

  return (
    <figure className="m-0">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="env-title" className="w-full max-w-[460px] h-auto">
        <title id="env-title">
          {de
            ? "Arbeitsraum im Vergleich, Draufsicht X-Y, gleicher Maßstab"
            : "Werkbereik vergeleken, bovenaanzicht X-Y, dezelfde schaal"}
        </title>
        {[...machines]
          .sort((a, b) => b.x * b.y - a.x * a.y)
          .map((machine) => {
            const w = machine.x * SCALE;
            const h = machine.y * SCALE;
            const x = 8;
            const y = 8 + (maxY - machine.y) * SCALE;
            const stroke =
              machine.id === "bridgeport-xr-1270"
                ? { color: "#3D9BD6", dash: "2 2.4", width: 1.6 }
                : machine.id === "hartford-lg-1370"
                  ? { color: "#29235C", dash: "5 3", width: 1.2 }
                  : { color: "#29235C", dash: undefined, width: 1.7 };
            return (
              <rect
                key={machine.id}
                x={x}
                y={y}
                width={w}
                height={h}
                fill="none"
                stroke={stroke.color}
                strokeWidth={stroke.width}
                strokeDasharray={stroke.dash}
              />
            );
          })}
        <text x="8" y={height - 8} fill="#29235C" fontFamily="var(--font-martian), monospace" fontSize="9">
          X0 Y0
        </text>
      </svg>
      <figcaption className="caption max-w-[68ch]">
        {de
          ? "Drei Arbeitsräume, linksbündig auf X0 Y0. Außenmaß: Hartford MVP 16, X 1600 · Y 820, durchgezogen. LG 1370 gestrichelt. Bridgeport XR 1270 in der Werkzeugbahnfarbe. Z steht in der Tabelle, nicht in dieser Draufsicht."
          : "Drie werkbereiken, links uitgelijnd op X0 Y0. Buitenmaat: Hartford MVP 16, X 1600 · Y 820, getrokken lijn. LG 1370 gestippeld. Bridgeport XR 1270 in de kleur van de gereedschapsbaan. Z staat in de tabel, niet in dit bovenaanzicht."}
      </figcaption>
      <ul className="mt-3 list-none p-0 m-0">
        {machines.map((machine) => (
          <li key={machine.id} className="mono text-[0.78rem] text-navy py-1 border-b border-line">
            {machine.name} · X {machine.x} · Y {machine.y} · Z {machine.z}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function EnvelopeDrawing({ locale = "nl" }: { locale?: "nl" | "de" }) {
  const de = locale === "de";
  return (
    <figure className="m-0">
      <svg viewBox="0 0 560 280" role="img" aria-labelledby="mvp-title" className="w-full max-w-[640px] h-auto">
        <title id="mvp-title">Hartford MVP 16, X 1600 mm, Y 820 mm, Z 600 mm</title>
        <rect x="70" y="48" width="400" height="150" fill="none" stroke="#29235C" strokeWidth="1.4" />
        <line x1="70" y1="220" x2="470" y2="220" stroke="#29235C" strokeWidth="1" />
        <polygon points="70,220 78,216 78,224" fill="#29235C" />
        <polygon points="470,220 462,216 462,224" fill="#29235C" />
        <line x1="500" y1="48" x2="500" y2="198" stroke="#29235C" strokeWidth="1" />
        <polygon points="500,48 496,56 504,56" fill="#29235C" />
        <polygon points="500,198 496,190 504,190" fill="#29235C" />
        <text x="230" y="238" fill="#29235C" fontSize="13" fontFamily="ui-monospace, monospace">
          X 1600
        </text>
        <text x="512" y="128" fill="#29235C" fontSize="13" fontFamily="ui-monospace, monospace">
          Y 820
        </text>
        <text x="70" y="32" fill="#29235C" fontSize="13" fontFamily="ui-monospace, monospace">
          Z 600
        </text>
        <text x="70" y="268" fill="#575756" fontSize="12" fontFamily="ui-monospace, monospace">
          Hartford MVP 16
        </text>
      </svg>
      <figcaption className="caption">
        {de
          ? "Größter Arbeitsraum: Hartford MVP 16, X 1600 × Y 820 × Z 600 mm. Ob ein Teil hineinpasst, hängt von Form und Aufspannung ab."
          : "Grootste werkbereik: Hartford MVP 16, X 1600 × Y 820 × Z 600 mm. Of een stuk daarbinnen past, hangt af van de vorm en de opspanning."}
      </figcaption>
    </figure>
  );
}
