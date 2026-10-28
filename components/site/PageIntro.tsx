import type { ReactNode } from "react";
import { OriginMark } from "@/components/site/Marks";

export default function PageIntro({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header data-section="hero" className="section border-t-0 pt-8">
      <div className="wrap">
        <OriginMark />
        <div className="section-grid">
          <p className="kicker" data-toolpath-node>
            {kicker}
          </p>
          <div>
            <h1 className="display">{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
