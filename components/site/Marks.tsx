export function OriginMark() {
  return (
    <p className="origin mono">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <path d="M11 1 V21 M1 11 H21" stroke="#29235C" strokeWidth="1" fill="none" />
        <circle cx="11" cy="11" r="3" fill="none" stroke="#29235C" strokeWidth="1" />
      </svg>
      X0 Y0
    </p>
  );
}

export function Tick() {
  return (
    <svg className="tick" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8.2 L6.4 11.5 L13 4.5" fill="none" stroke="#29235C" strokeWidth="1.4" />
    </svg>
  );
}

export function CtaRow({ locale = "nl" }: { locale?: "nl" | "de" }) {
  const de = locale === "de";
  return (
    <div className="cta-row">
      <a className="btn btn-primary" href="/offerte" data-cta="offerte">
        {de ? "Zeichnung oder 3D-Modell senden" : "Stuur uw tekening of 3D-model"}
      </a>
      <a className="btn btn-ghost" href="tel:+31535724422" data-cta="bellen">
        {de ? "Anrufen 053 572 44 22" : "Bel 053 572 44 22"}
      </a>
    </div>
  );
}
