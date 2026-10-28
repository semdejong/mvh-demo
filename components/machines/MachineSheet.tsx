import { content } from "@/content";
import type { Locale } from "@/lib/locale";

export default function MachineSheet({ locale = "nl" }: { locale?: Locale }) {
  const de = locale === "de";
  const blank = de ? "[vom Kunden zu ergänzen]" : "[door klant aan te vullen]";
  const rows = [
    ...content.machines.map((machine) => ({
      name: machine.name,
      axes: String(machine.axes),
      x: String(machine.x),
      y: String(machine.y),
      z: String(machine.z),
      note:
        machine.name === "Bridgeport XR 1270"
          ? de
            ? "3-achsig, geschlossen, vertikal. Holz, Kunststoff und Aluminium. Spindel 30,0 kW, max. 12.000 U/min."
            : "3-assig, gesloten, verticaal. Hout, kunststof en aluminium. Spindel 30,0 kW, max. 12.000 omw/min."
          : de
            ? "3-achsig. Weitere Angaben stehen nicht auf der Website."
            : "3-assig. Verdere gegevens staan niet op de site.",
      blank: false,
    })),
    ...Array.from({ length: content.machinePlaceholders }, () => ({
      name: blank,
      axes: "—",
      x: "—",
      y: "—",
      z: "—",
      note: blank,
      blank: true,
    })),
  ];

  return (
    <table className="spec">
      <caption>
        {de
          ? "Die Website nennt sechs Fräsmaschinen. Drei sind mit Massen dokumentiert. Die anderen drei sind nicht ausgefüllt."
          : "De site noemt zes freesbanken. Drie zijn met maten gedocumenteerd. De andere drie zijn niet ingevuld."}
      </caption>
      <thead>
        <tr>
          <th>{de ? "Maschine" : "Machine"}</th>
          <th className="num">{de ? "Achsen" : "Assen"}</th>
          <th className="num">X</th>
          <th className="num">Y</th>
          <th className="num">Z</th>
          <th>{de ? "Angabe" : "Opgave"}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) =>
          row.blank ? (
            <tr key={`blank-${index}`} className="is-blank">
              <td colSpan={6} data-label={de ? "Maschine" : "Machine"}>
                {blank}
              </td>
            </tr>
          ) : (
            <tr key={row.name}>
              <td data-label={de ? "Maschine" : "Machine"}>{row.name}</td>
              <td className="num" data-label={de ? "Achsen" : "Assen"}>
                {row.axes}
              </td>
              <td className="num" data-label="X mm">
                {row.x}
              </td>
              <td className="num" data-label="Y mm">
                {row.y}
              </td>
              <td className="num" data-label="Z mm">
                {row.z}
              </td>
              <td data-label={de ? "Angabe" : "Opgave"}>{row.note}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
