"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { content } from "@/content";

const APPLICATIONS = [
  "Thermo-/vacuümvormen",
  "EPS",
  "Spuitgietwerk",
  "Rotatie",
  "Blister",
  "Vrije vorm / prototype",
  "Plug",
  "Anders",
] as const;

const QUICK = [
  { label: "EPS", value: "EPS" },
  { label: "Spuitgietwerk", value: "Spuitgietwerk" },
  { label: "Rotatie", value: "Rotatie" },
  { label: "Blister", value: "Blister" },
  { label: "Vrije vorm / prototype", value: "Vrije vorm / prototype" },
  { label: "Plug", value: "Plug" },
] as const;

const ACCEPT = ["step", "stp", "igs", "iges", "stl", "dxf", "dwg", "pdf"];

type Errors = Partial<Record<"naam" | "bedrijf" | "email" | "telefoon" | "bestand" | "privacy", string>>;

type Summary = {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  land: string;
  toepassing: string;
  afmetingen: string;
  aantal: string;
  materiaal: string;
  levertijd: string;
  bestand: string;
  toelichting: string;
};

function fieldValue(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export default function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [toepassing, setToepassing] = useState("");
  const [done, setDone] = useState<Summary | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const naam = fieldValue(data, "naam");
    const bedrijf = fieldValue(data, "bedrijf");
    const email = fieldValue(data, "email");
    const telefoon = fieldValue(data, "telefoon");
    const file = data.get("bestand");
    const privacy = data.get("privacy");

    if (!naam) next.naam = "Vul uw naam in.";
    if (!bedrijf) next.bedrijf = "Vul uw bedrijf in.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
    if (!telefoon) next.telefoon = "Vul uw telefoonnummer in.";
    if (!privacy) next.privacy = "Vink de privacyverklaring aan.";

    if (file instanceof File && file.name) {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ACCEPT.includes(ext)) next.bestand = "Kies een bestand van het type step, stp, igs, iges, stl, dxf, dwg of pdf.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const order = ["naam", "bedrijf", "email", "telefoon", "bestand", "privacy"] as const;
      const firstInvalid = order.find((key) => next[key]);
      if (firstInvalid) form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const l = fieldValue(data, "l");
    const b = fieldValue(data, "b");
    const h = fieldValue(data, "h");
    const bestand = file instanceof File && file.name ? file.name : "geen bestand gekozen";

    setDone({
      naam,
      bedrijf,
      email,
      telefoon,
      land: fieldValue(data, "land"),
      toepassing: fieldValue(data, "toepassing"),
      afmetingen: [l, b, h].filter(Boolean).join(" × ") || "niet ingevuld",
      aantal: fieldValue(data, "aantal") || "niet ingevuld",
      materiaal: fieldValue(data, "materiaal") || "niet ingevuld",
      levertijd: fieldValue(data, "levertijd") || "niet ingevuld",
      bestand,
      toelichting: fieldValue(data, "toelichting") || "geen",
    });
  }

  if (done) {
    return (
      <div className="confirm" data-section="bevestiging" role="status">
        <h2 className="display">Demo-bevestiging</h2>
        <p className="measure">
          Er is niets verzonden. Dit is een conceptsite: het formulier heeft geen backend en het bestand is niet geüpload. Op de echte site komt uw tekening bij MVH terecht. MVH neemt daarna contact op. Een reactietermijn staat niet vast.
        </p>
        <dl className="mt-4 mb-0">
          {[
            ["Naam", done.naam],
            ["Bedrijf", done.bedrijf],
            ["E-mail", done.email],
            ["Telefoon", done.telefoon],
            ["Land", done.land],
            ["Toepassing", done.toepassing || "niet gekozen"],
            ["Afmetingen L × B × H", done.afmetingen],
            ["Aantal", done.aantal],
            ["Materiaal", done.materiaal],
            ["Gewenste levertijd", done.levertijd],
            ["Bestand", done.bestand],
            ["Toelichting", done.toelichting],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 py-2 border-b border-line">
              <dt className="mono text-xs text-navy">{label}</dt>
              <dd className="m-0">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-4 max-w-3xl">
      <div data-section="toepassingen">
        <p className="kicker" data-toolpath-node>
          TOEPASSING
        </p>
        <p className="measure mt-2">Kies een toepassing. De keuze komt in het veld hieronder.</p>
        <div className="choice-list mt-3" role="group" aria-label="Toepassing">
          {QUICK.map((choice) => (
            <button
              key={choice.value}
              type="button"
              aria-pressed={toepassing === choice.value}
              onClick={() => setToepassing(choice.value)}
            >
              {choice.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="naam">
            Naam <span className="req">*</span>
          </label>
          <input id="naam" name="naam" autoComplete="name" aria-invalid={errors.naam ? "true" : undefined} />
          {errors.naam ? <p className="form-error">{errors.naam}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="bedrijf">
            Bedrijf <span className="req">*</span>
          </label>
          <input id="bedrijf" name="bedrijf" autoComplete="organization" aria-invalid={errors.bedrijf ? "true" : undefined} />
          {errors.bedrijf ? <p className="form-error">{errors.bedrijf}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="email">
            E-mail <span className="req">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" aria-invalid={errors.email ? "true" : undefined} />
          {errors.email ? <p className="form-error">{errors.email}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="telefoon">
            Telefoon <span className="req">*</span>
          </label>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" aria-invalid={errors.telefoon ? "true" : undefined} />
          {errors.telefoon ? <p className="form-error">{errors.telefoon}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="land">Land</label>
          <select id="land" name="land" defaultValue="Nederland">
            <option>Nederland</option>
            <option>Deutschland</option>
            <option>anders</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="toepassing">Toepassing</label>
          <select id="toepassing" name="toepassing" value={toepassing} onChange={(event) => setToepassing(event.target.value)}>
            <option value="">Kies</option>
            {APPLICATIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="border-0 p-0 m-0">
        <legend className="legend mb-2">Afmetingen product L × B × H in mm</legend>
        <div className="dims-3">
          <div className="field">
            <label htmlFor="l">L</label>
            <input id="l" name="l" inputMode="decimal" />
          </div>
          <div className="field">
            <label htmlFor="b">B</label>
            <input id="b" name="b" inputMode="decimal" />
          </div>
          <div className="field">
            <label htmlFor="h">H</label>
            <input id="h" name="h" inputMode="decimal" />
          </div>
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="aantal">Aantal matrijzen/vormen</label>
          <input id="aantal" name="aantal" inputMode="numeric" />
        </div>
        <div className="field">
          <label htmlFor="materiaal">Materiaal</label>
          <input id="materiaal" name="materiaal" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="levertijd">Gewenste levertijd</label>
        <input id="levertijd" name="levertijd" placeholder="datum of tekst" />
      </div>

      <div className="field">
        <label htmlFor="bestand">Bestand</label>
        <input id="bestand" name="bestand" type="file" accept={content.fileAccept} aria-invalid={errors.bestand ? "true" : undefined} />
        <p className="caption">
          STEP, STP, IGES, IGS, STL, DXF, DWG of PDF. In deze demo wordt niets geüpload.
        </p>
        {errors.bestand ? <p className="form-error">{errors.bestand}</p> : null}
      </div>

      <div className="field">
        <label htmlFor="toelichting">Toelichting</label>
        <textarea id="toelichting" name="toelichting" />
      </div>

      <div>
        <label className="check-row" htmlFor="privacy">
          <input id="privacy" name="privacy" type="checkbox" aria-invalid={errors.privacy ? "true" : undefined} />
          <span>
            Ik heb de <Link href="/privacy">privacyverklaring</Link> gelezen. <span className="req">*</span>
          </span>
        </label>
        {errors.privacy ? <p className="form-error">{errors.privacy}</p> : null}
      </div>

      <button type="submit" className="btn btn-primary w-fit" data-cta="offerte">
        Aanvraag bekijken
      </button>
    </form>
  );
}
