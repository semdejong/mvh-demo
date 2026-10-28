import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import Programme from "@/components/site/Programme";

export const metadata: Metadata = {
  title: "Stellen",
  description: "Derzeit gibt es keine offenen Stellen bei MVH in Haaksbergen.",
};

export default function GermanJobs() {
  return (
    <>
      <PageIntro kicker="STAND" title="Stellen" lede="Derzeit gibt es keine offenen Stellen.">
        <p className="measure">Das ist der vollständige Text der bisherigen Seite. Keine Funktion, kein Profil, keine Bewerbungsadresse.</p>
      </PageIntro>
      <section data-section="stellen" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              BLATT
            </p>
            <div>
              <Programme
                rows={[
                  { k: "Offen", v: "Keine. Derzeit gibt es keine offenen Stellen." },
                  { k: "Funktionen", v: "Auf der Website nicht genannt." },
                  { k: "Initiativ", v: "[vom Kunden zu bestätigen]. Bis dahin steht hier keine Bewerbungsadresse." },
                  { k: "Kontakt", v: "Allgemeiner Kontakt über die Kontaktseite, kein Bewerbungsformular." },
                ]}
              />
              <p className="mt-6">
                <Link className="btn btn-ghost" href="/de/kontakt">
                  Zur Kontaktseite
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
