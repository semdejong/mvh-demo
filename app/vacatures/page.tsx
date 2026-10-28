import type { Metadata } from "next";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Vacatures",
  description: "Momenteel zijn er geen vacatures bij MVH Matrijzen en Vormenbouw Haaksbergen.",
};

export default function VacaturesPage() {
  return (
    <>
      <PageIntro kicker="VACATURES" title="Vacatures" lede="Momenteel zijn er geen vacatures.">
        <p className="measure">Open sollicitatie: [door klant te bevestigen]. Tot die tijd staat hier geen sollicitatie-adres.</p>
      </PageIntro>
      <section data-section="vacatures" className="section">
        <div className="wrap">
          <p className="kicker" data-toolpath-node>
            STAND
          </p>
          <p className="measure mt-3">De tekst op de huidige site is: “Momenteel zijn er geen vacatures”.</p>
        </div>
      </section>
    </>
  );
}
