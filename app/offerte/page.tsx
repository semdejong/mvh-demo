import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import PageIntro from "@/components/site/PageIntro";
import People from "@/components/site/People";
import { Tick } from "@/components/site/Marks";
import { EnvelopeDrawing } from "@/components/drawing/Envelopes";
import QuoteForm from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Stuur uw tekening of 3D-model",
  description:
    "Vraag een matrijs aan bij MVH in Haaksbergen. Stuur een tekening of 3D-model. MVH bekijkt de tekening en neemt contact op.",
};

const faq = [
  {
    q: "Ontwerpen jullie de matrijs ook zelf?",
    a: "Ja. We ontwikkelen met een 3D CAD-CAM pakket zelf matrijzen en vormen, en denken oplossingsgericht mee.",
  },
  {
    q: "Wat is de maximale afmeting die jullie kunnen frezen?",
    a: "Het grootste bereik dat op de site staat, is de Hartford MVP 16: X 1600 mm, Y 820 mm, Z 600 mm. Of een stuk daarbinnen past, hangt af van de vorm en de opspanning. Dat beoordelen we aan de tekening.",
  },
  {
    q: "Welke materialen frezen jullie?",
    a: "De Bridgeport XR 1270 is op de site opgegeven voor hout, kunststof en aluminium. Materialen op de andere machines: [door klant te bevestigen].",
  },
  {
    q: "Boren jullie ook de vacuümgaatjes en maken jullie de matrijs schoon?",
    a: "Ja, waar nodig. De matrijs wordt verder afgewerkt, bijvoorbeeld door vacuümgaatjes te boren, en schoon gemaakt.",
  },
  {
    q: "Leveren jullie de matrijs zelf af?",
    a: "Ja. De matrijs wordt door ons bij de klant afgeleverd.",
  },
  {
    q: "Welke bestandsformaten kan ik aanleveren?",
    a: "Welke formaten MVH in productie vraagt, is [door klant te bevestigen]. Op dit conceptformulier kunt u een bestand kiezen met de extensie step, stp, igs, iges, stl, dxf, dwg of pdf. Het bestand wordt in deze demo niet verstuurd.",
  },
  {
    q: "Werken jullie ook voor klanten in Duitsland?",
    a: "Haaksbergen ligt op een bedrijventerrein, ongeveer 5 km van de Duitse grens, en er is een Duitse pagina. Of MVH opdrachten uit Duitsland aanneemt: [door klant te bevestigen].",
  },
  {
    q: "Hoe snel kan een matrijs klaar zijn?",
    a: "Een doorlooptijd staat niet op de site. [door klant te bevestigen]. We noemen geen aantal dagen.",
  },
];

export default function OffertePage() {
  const lutz = content.people[0];

  return (
    <>
      <PageIntro
        kicker="AANVRAAG"
        title="Stuur uw tekening of 3D-model, wij denken mee over de matrijs."
        lede="We bekijken de tekening en nemen contact op. Een reactietermijn spreken we niet op voorhand af."
      >
        <p className="measure">
          <a href={content.company.phoneTel} data-cta="bellen">
            {content.company.phoneDisplay}
          </a>
        </p>
        <p className="measure">Voor deze aanvraag: {lutz.name}.</p>
        <People lutzFirst />
      </PageIntro>

      <section data-section="aanleveren" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              MEESTUREN
            </p>
            <div>
              <h2 className="display">Wat u meestuurt</h2>
              <ul className="send-list">
                <li>2D tekening of 3D-model</li>
                <li>materiaal en plaatdikte van het te vormen product</li>
                <li>aantallen</li>
                <li>machine of vormmachine waarop de matrijs komt</li>
                <li>gewenste levertijd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="werkbereik" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              X 1600 · Y 820 · Z 600
            </p>
            <div>
              <h2 className="display">Grootste werkbereik</h2>
              <p className="lede">Hartford MVP 16, het grootste bereik dat op de site gedocumenteerd is.</p>
              <div className="mt-6">
                <EnvelopeDrawing />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="waarden" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">5 PUNTEN</p>
            <ul className="check-list">
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
      </section>

      <section data-section="formulier" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              FORMULIER
            </p>
            <div>
              <h2 className="display">Aanvraag</h2>
              <p className="lede">
                Velden met * zijn verplicht. De zes toepassingen kunt u hier kiezen. Meer foto’s staan bij{" "}
                <Link href="/toepassingen" className="text-navy">
                  toepassingen
                </Link>
                .
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="faq" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">FAQ</p>
            <div className="faq">
              <h2 className="display mb-4">Vragen</h2>
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
