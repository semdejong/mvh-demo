import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import Programme from "@/components/site/Programme";
import { CtaRow } from "@/components/site/Marks";
import MillReveal from "@/components/media/MillReveal";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "MVH ontwikkelt matrijzen met 3D CAD-CAM, freest ze op eigen cnc-centra, werkt ze af en levert ze zelf af in Haaksbergen.",
};

const photos: Record<string, string> = {
  ontwerpen: "/img/abstract/cam-wireframe.jpg",
  frezen: "/img/hero/hero-01.jpg",
  afwerken: "/img/blisters/blisters-01.jpg",
  afleveren: "/img/spuitgietwerk/spuitgietwerk-01.jpg",
};

export default function WerkwijzePage() {
  return (
    <>
      <PageIntro
        kicker="OP 10–40"
        title="Van tekening tot afleveren"
        lede="Eén werkplaats doet het hele pad: zelf ontwikkelen, frezen, afwerken en zelf bij de klant afleveren. Geen tussenpartij voor het programma, de bank of het transport."
      >
        <p className="measure">
          Hieronder elke stap, met wat u in de werkplaats ziet.
        </p>
      </PageIntro>
      <section data-section="werkwijze" className="section">
        <div className="wrap">
          <div className="steps">
            {content.process.map((step) => {
              const src = photos[step.id];
              const photo = src?.startsWith("/img/abstract/") ? undefined : src ? photoBySrc(src) : undefined;
              return (
                <article key={step.id} id={step.id} className="step" data-toolpath-node>
                  <div className="step-copy">
                    <p className="step-op">
                      {step.op} · {step.detail}
                    </p>
                    <h2 className="display">{step.title}</h2>
                    <p className="measure">{step.text}</p>
                    <p className="measure">{step.more}</p>
                  </div>
                  {photo ? (
                    <MillReveal>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.w}
                        height={photo.h}
                        sizes="360px"
                        className="w-full h-auto border border-navy"
                        style={{ maxWidth: Math.min(photo.w, 480) }}
                      />
                    </MillReveal>
                  ) : (
                    <Image
                      src="/img/abstract/cam-wireframe.jpg"
                      alt="Schematische orthogonale gereedschapsbaan, geen foto van een matrijs"
                      width={1280}
                      height={720}
                      sizes="360px"
                      className="w-full h-auto border border-navy mix-blend-multiply"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section data-section="aanleveren" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              MEESTUREN
            </p>
            <div>
              <h2 className="display">Wat het programma nodig heeft</h2>
              <p className="lede">Zonder deze vijf regels blijft de matrijs een schets. Met ze kunnen we meedenken.</p>
              <Programme
                rows={content.aanleveren.map((item, index) => ({
                  k: `R ${index + 1}`,
                  v: item,
                }))}
              />
              <p className="measure">Een levertijd spreken we per matrijs af.</p>
              <CtaRow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
