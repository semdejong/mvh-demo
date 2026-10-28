import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { photoBySrc } from "@/lib/photos";
import ApplicationIndex from "@/components/site/ApplicationIndex";
import { OriginMark, Tick, CtaRow } from "@/components/site/Marks";
import DimensionFrame from "@/components/media/DimensionFrame";
import MillReveal from "@/components/media/MillReveal";
import YoutubeFacade from "@/components/media/YoutubeFacade";
import Envelopes from "@/components/drawing/Envelopes";

const hero = photoBySrc("/img/hero/hero-01.jpg");
const pand = photoBySrc("/img/pand/pand-01.jpg");

const mosaic = [
  "/img/hero/hero-01.jpg",
  "/img/rotatie/rotatie-01.jpg",
  "/img/spuitgietwerk/spuitgietwerk-01.jpg",
  "/img/blisters/blisters-01.jpg",
  "/img/eps/eps-01.jpg",
  "/img/vrije-vorm/vrije-vorm-01.jpg",
  "/img/vrije-vorm/vrije-vorm-11.jpg",
]
  .map((src) => photoBySrc(src))
  .filter((photo) => photo !== undefined);

const stepPhoto: Record<string, string> = {
  frezen: "/img/hero/hero-01.jpg",
  afwerken: "/img/blisters/blisters-01.jpg",
  afleveren: "/img/spuitgietwerk/spuitgietwerk-01.jpg",
};

export default function HomePage() {
  const { company } = content;

  return (
    <>
      <section data-section="hero" className="section border-t-0 pt-8">
        <div className="wrap">
          <OriginMark />
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              HAAKSBERGEN
            </p>
            <div>
              <h1 className="display">Matrijzen en vormen voor thermo- en vacuümvormen, gefreesd in Haaksbergen</h1>
              <p className="lede">
                Wij ontwikkelen de matrijs met een 3D CAD-CAM pakket, frezen hem op een eigen cnc-bewerkingscentrum, werken hem af en leveren hem zelf bij u af.
              </p>
              <CtaRow />
              {hero ? (
                <div className="mt-8 max-w-[720px]">
                  <DimensionFrame
                    x="werkbereik X 1600"
                    y="Y 820"
                    caption="Aluminium matrijs tijdens het frezen. De maten zijn het grootste werkbereik in het machinepark (Hartford MVP 16), niet de maat van dit werkstuk. Z 600 mm."
                  >
                    <MillReveal>
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        width={hero.w}
                        height={hero.h}
                        priority
                        sizes="(max-width: 800px) 100vw, 720px"
                        style={{ maxWidth: hero.w }}
                      />
                    </MillReveal>
                  </DimensionFrame>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section data-section="proces" className="section">
        <div className="wrap relative">
          <div className="section-grid relative">
            <p className="kicker" data-toolpath-node>
              PAD
            </p>
            <ol className="op-strip">
              {content.process.map((step) => (
                <li key={step.id}>
                  <Link href={`/werkwijze#${step.id}`}>
                    <span className="mono">
                      {step.op} · {step.detail}
                    </span>
                    <strong>{step.title}</strong>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section data-section="toepassingen" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              INDEX
            </p>
            <div>
              <h2 className="display">Toepassingen</h2>
              <p className="lede">Zes soorten werk, met foto’s uit de werkplaats.</p>
              <ApplicationIndex />
            </div>
          </div>
        </div>
      </section>

      <section data-section="werkwijze" className="section overflow-hidden">
        <div className="scallop" aria-hidden="true">
          {hero ? (
            <Image src={hero.src} alt="" width={hero.w} height={hero.h} sizes="720px" />
          ) : null}
        </div>
        <div className="wrap relative">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              OP 10–40
            </p>
            <div>
              <h2 className="display">Werkwijze</h2>
              <p className="lede">Van tekening tot afleveren, in één werkplaats.</p>
              <div className="steps mt-8">
                {content.process.map((step) => {
                  const src = stepPhoto[step.id];
                  const photo = src ? photoBySrc(src) : undefined;
                  return (
                    <article key={step.id} className="step" data-toolpath-node>
                      <div className="step-copy">
                        <p className="step-op">
                          {step.op} · {step.detail}
                        </p>
                        <h3>{step.title}</h3>
                        <p className="measure m-0">{step.text}</p>
                      </div>
                      {photo ? (
                        <MillReveal>
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.w}
                            height={photo.h}
                            sizes="256px"
                            style={{ maxWidth: Math.min(photo.w, 420) }}
                            className="w-full h-auto border border-navy"
                          />
                        </MillReveal>
                      ) : (
                        <Image
                          src="/img/abstract/cam-wireframe.jpg"
                          alt="Schematische orthogonale gereedschapsbaan, geen foto van een matrijs of van Mastercam"
                          width={1280}
                          height={720}
                          sizes="280px"
                          className="w-full h-auto border border-navy mix-blend-multiply"
                        />
                      )}
                    </article>
                  );
                })}
              </div>
              <p className="mt-6">
                <Link href="/werkwijze" className="text-navy">
                  De werkwijze op één blad
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="machinepark" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              BEREIK
            </p>
            <div>
              <h2 className="display">Machinepark</h2>
              <p className="lede">
                Drie bewerkingscentra uit het machinepark, met hun werkbereik. Het grootste bereik heeft de Hartford MVP 16.
              </p>
              <div className="mt-6">
                <Envelopes />
              </div>
              <p className="mt-4">
                <Link href="/machinepark" className="text-navy">
                  Volledige specificatie
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="waarden" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              5 PUNTEN
            </p>
            <div>
              <h2 className="display">Vijf punten</h2>
              <p className="lede">Wat MVH zelf hoog houdt, sinds de start in 2008.</p>
              <ul className="check-list mt-6">
                {content.values.map((value) => (
                  <li key={value.title}>
                    <Tick />
                    <strong>{value.title}</strong>
                    <span>{value.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="werkstukken" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              FOTO
            </p>
            <div>
              <h2 className="display">Werkstukken</h2>
              <p className="lede">Foto’s uit de eigen werkplaats, per categorie.</p>
              <ul className="mosaic mt-6">
                {mosaic.map((photo) => (
                  <li key={photo.src}>
                    <figure>
                      <Image src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes="340px" />
                      <figcaption>{photo.altBasis}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="sinds-2008" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              2008
            </p>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:items-start">
              <div>
                <h2 className="display">Sinds januari 2008</h2>
                <p className="lede">
                  Matrijzen & Vormenbouw Haaksbergen is sinds januari 2008 actief en begon met één nieuw cnc-bewerkingscentrum. Na twee maanden kwam de tweede, doordat de vraag naar matrijzen en vormen toenam en de productie snel groeide.
                </p>
                <p className="measure">
                  Het pand staat op {company.street}, {company.postalCode} {company.city}, op een {company.border}.
                </p>
              </div>
              {pand ? (
                <MillReveal>
                  <Image
                    src={pand.src}
                    alt={pand.alt}
                    width={pand.w}
                    height={pand.h}
                    sizes="320px"
                    className="w-full h-auto border border-navy"
                    style={{ maxWidth: pand.w }}
                  />
                </MillReveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section data-section="video" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              VIDEO
            </p>
            <div>
              <h2 className="display">Video</h2>
              <p className="lede">
                Twee films van MVH. De speler laadt pas na een klik, via youtube-nocookie. Kanaal:{" "}
                <a href={company.youtube} className="text-navy" rel="noopener noreferrer" target="_blank">
                  @mvhaaksbergen
                </a>
                .
              </p>
              <div className="video-grid mt-6">
                {content.videos.map((video) => {
                  const poster = photoBySrc(video.poster);
                  if (!poster) return null;
                  return <YoutubeFacade key={video.id} videoId={video.id} title={video.title} poster={poster} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="deutsch" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" lang="de">
              DE
            </p>
            <div lang="de">
              <h2 className="display">Formenbau für Thermoformen und Vakuumformen, direkt an der Grenze</h2>
              <p className="lede">
                Haaksbergen liegt auf einem Gewerbegebiet, etwa 5 km von der deutschen Grenze. MVH fräst Formen für Thermoformen und Vakuumformen: 3D-CAD-CAM, CNC, Nacharbeit und eigene Lieferung.
              </p>
              <p className="mt-4">
                <Link href="/de" className="btn btn-ghost" hrefLang="de">
                  Zur deutschen Startseite
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="offerte" className="section navy-band">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              AANVRAAG
            </p>
            <div>
              <h2 className="display">Stuur uw tekening of 3D-model</h2>
              <p className="lede">Wat we nodig hebben om mee te denken over de matrijs:</p>
              <ul className="send-list">
                <li>tekening of 3D-model</li>
                <li>materiaal</li>
                <li>aantallen</li>
                <li>gewenste levertijd</li>
              </ul>
              <div className="cta-row">
                <Link className="btn btn-on-navy" href="/offerte" data-cta="offerte">
                  Naar het formulier
                </Link>
                <a className="btn btn-on-navy-ghost" href={company.phoneTel} data-cta="bellen">
                  Bel {company.phoneShort}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="contact" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              ADRES
            </p>
            <div>
              <h2 className="display">Contact en route</h2>
              <p className="lede m-0">
                {company.legalName}
                <br />
                {company.street}
                <br />
                {company.postalCode} {company.city}
              </p>
              <p>
                <a href={company.phoneTel} data-cta="bellen">
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={company.mapsHref} className="text-navy" target="_blank" rel="noopener noreferrer">
                  Route in Google Maps
                </a>
              </p>
              <p className="measure m-0">Openingstijden: {company.hours}</p>
              <p className="measure">Parkeren en laden en lossen: {company.parking}</p>
              <p>
                <Link href="/contact" className="text-navy" data-cta="offerte">
                  Contactpagina
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
