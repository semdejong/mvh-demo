import type { Metadata } from "next";
import PageIntro from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Stellen",
  description: "Derzeit gibt es keine offenen Stellen bei MVH in Haaksbergen.",
};

export default function GermanJobs() {
  return (
    <PageIntro kicker="STELLEN" title="Stellen" lede="Derzeit gibt es keine offenen Stellen.">
      <p className="measure" data-toolpath-node>
        Initiativbewerbung: [vom Kunden zu bestätigen].
      </p>
    </PageIntro>
  );
}
