import type { ReactNode } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileBar from "@/components/site/MobileBar";
import Toolpath from "@/components/site/Toolpath";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div id="sheet" className="sheet flex-1 flex flex-col">
      <Toolpath />
      <div className="relative z-[4] flex flex-1 flex-col">
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <MobileBar />
    </div>
  );
}
