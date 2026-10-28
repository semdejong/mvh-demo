import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
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
        lede="Eén werkplaats doet het hele pad: zelf ontwikkelen, frezen, afwerken en zelf bij de klant afleveren."
      />
      <section data-section="werkwijze" className="section">
        <div className="wrap">
          <div className="steps">
            {content.process.map((step) => {
              const src = photos[step.id];
              const photo = src?.startsWith("/img/abstract/") ? undefined : src ? photoBySrc(src) : undefined;
              return (
                <article key={step.id} className="step" data-toolpath-node>
                  <div className="step-copy">
                    <p className="step-op">
                      {step.op} · {step.detail}
                    </p>
                    <h2 className="display">{step.title}</h2>
                    <p className="measure">{step.text}</p>
                    {step.id === "ontwerpen" ? (
                      <p className="measure">
                        Op de site staat Mastercam X5. {content.cam.note} Een schermafbeelding van het pakket staat er niet op. De tekening hiernaast is een schematische baan, geen werkstuk.
                      </p>
                    ) : null}
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
          <CtaRow />
        </div>
      </section>
    </>
  );
}
