import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import MachineSheet from "@/components/machines/MachineSheet";
import Envelopes from "@/components/drawing/Envelopes";
import DimensionFrame from "@/components/media/DimensionFrame";
import MillReveal from "@/components/media/MillReveal";

export const metadata: Metadata = {
  title: "Maschinenpark",
  description:
    "CNC-Bearbeitungszentren von MVH in Haaksbergen. Bridgeport XR 1270, Hartford MVP 16 und Hartford LG 1370, Arbeitsraum bis X 1600 · Y 820 · Z 600 mm.",
};

export default function GermanMachines() {
  const bridgeport = photoBySrc("/img/machine/machine-01.jpg");
  const hall = photoBySrc("/img/machine/machine-02.jpg");

  return (
    <>
      <PageIntro
        kicker="RAUM"
        title="Maschinenpark"
        lede="Die Programme kommen aus einem 3D-CAD-CAM-System und laufen, je nach Abmessung, Anwendung oder Ausgangsmaterial, auf einer der Fräsmaschinen."
      >
        <p className="measure">{content.cam.noteDe}</p>
      </PageIntro>
      <section data-section="specificatie" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              SPEC
            </p>
            <div>
          <h2 className="display">Spezifikation</h2>
          <p className="lede">Maße so, wie sie auf der bestehenden Website stehen.</p>
          <div className="mt-6 overflow-x-auto" data-toolpath-node>
            <MachineSheet locale="de" />
          </div>
          <div className="mt-8">
            <Envelopes locale="de" />
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            {bridgeport ? (
              <DimensionFrame
                x="X 1270"
                y="Y 700"
                caption="Bridgeport XR 1270. Die Maße sind der Arbeitsraum dieser Maschine (Z 610 mm), nicht das Außenmaß des Gehäuses. Spindel 30,0 kW, max. 12.000 U/min."
              >
                <MillReveal>
                  <Image
                    src={bridgeport.src}
                    alt="Bridgeport XR 1270, geschlossenes vertikales Bearbeitungszentrum"
                    width={bridgeport.w}
                    height={bridgeport.h}
                    sizes="(max-width: 800px) 100vw, 640px"
                    style={{ maxWidth: bridgeport.w }}
                  />
                </MillReveal>
              </DimensionFrame>
            ) : null}
            {hall ? (
              <figure className="m-0">
                <Image
                  src={hall.src}
                  alt="Maschinenhalle von MVH mit drei CNC-Bearbeitungszentren, Aufnahme 2021"
                  width={hall.w}
                  height={hall.h}
                  sizes="480px"
                  className="w-full h-auto border border-navy"
                  style={{ maxWidth: hall.w }}
                />
                <figcaption className="caption">Maschinenhalle, Aufnahme 2021.</figcaption>
              </figure>
            ) : null}
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
