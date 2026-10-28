import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { CtaRow } from "@/components/site/Marks";
import MachineSheet from "@/components/machines/MachineSheet";
import Envelopes from "@/components/drawing/Envelopes";
import DimensionFrame from "@/components/media/DimensionFrame";
import MillReveal from "@/components/media/MillReveal";

export const metadata: Metadata = {
  title: "Machinepark",
  description:
    "CNC-bewerkingscentra van MVH in Haaksbergen. Bridgeport XR 1270, Hartford MVP 16 en Hartford LG 1370, met werkbereik tot X 1600 · Y 820 · Z 600 mm.",
};

export default function MachineparkPage() {
  const bridgeport = photoBySrc("/img/machine/machine-01.jpg");
  const hall = photoBySrc("/img/machine/machine-02.jpg");

  return (
    <>
      <PageIntro
        kicker="BEREIK"
        title="Machinepark"
        lede="De programma’s komen uit een 3D CAD-CAM pakket en draaien, afhankelijk van afmeting, toepassing of uitgangsmateriaal, op een van de freesbanken."
      >
        <p className="measure">{content.cam.note}</p>
      </PageIntro>

      <section data-section="specificatie" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              SPEC
            </p>
            <div>
              <h2 className="display">Specificatie</h2>
              <p className="lede">Maten zoals ze op de huidige site staan. Niets aangevuld.</p>
              <div className="mt-6 overflow-x-auto">
                <MachineSheet />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="werkbereik" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              SCHAAL
            </p>
            <div>
              <h2 className="display">Werkbereik op schaal</h2>
              <div className="mt-6">
                <Envelopes />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="fotos" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">FOTO</p>
            <div className="grid gap-8">
              {bridgeport ? (
                <DimensionFrame
                  x="X 1270"
                  y="Y 700"
                  caption="Bridgeport XR 1270. De maten zijn het werkbereik van deze machine (Z 610 mm), niet de buitenmaat van de kast. Spindel 30,0 kW, max. 12.000 omw/min."
                >
                  <MillReveal>
                    <Image
                      src={bridgeport.src}
                      alt={bridgeport.alt}
                      width={bridgeport.w}
                      height={bridgeport.h}
                      sizes="(max-width: 800px) 100vw, 640px"
                      style={{ maxWidth: bridgeport.w }}
                    />
                  </MillReveal>
                </DimensionFrame>
              ) : null}
              {hall ? (
                <figure className="m-0 max-w-[900px]">
                  <MillReveal>
                    <Image
                      src={hall.src}
                      alt={hall.alt}
                      width={hall.w}
                      height={hall.h}
                      sizes="(max-width: 900px) 100vw, 900px"
                      className="w-full h-auto border border-navy"
                      style={{ maxWidth: hall.w }}
                    />
                  </MillReveal>
                  <figcaption className="caption">Machinehal, opname 2021. Drie bewerkingscentra in beeld. De site noemt er zes.</figcaption>
                </figure>
              ) : null}
              <CtaRow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
