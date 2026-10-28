import type { ReactNode } from "react";
import HtmlLang from "@/components/site/HtmlLang";

export default function GermanLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="de">
      <HtmlLang lang="de" />
      {children}
    </div>
  );
}
