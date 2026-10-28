"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function Gallery({ photos, label }: { photos: Photo[]; label: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const open = index !== null;
  const current = open ? photos[index] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((value) => (value === null ? value : (value + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value === null ? value : (value - 1 + photos.length) % photos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  return (
    <>
      <ul className="gallery" aria-label={label}>
        {photos.map((photo, photoIndex) => (
          <li key={photo.src}>
            <button type="button" onClick={() => setIndex(photoIndex)} aria-label={`Vergroot foto: ${photo.alt}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                sizes="(max-width: 800px) 78vw, 340px"
                style={{ maxWidth: photo.w }}
              />
              <span className="shot-cap">{photo.altBasis}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIndex(null);
        }}
      >
        {current ? (
          <div className="lightbox-panel">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              sizes={`${current.w}px`}
              style={{ ["--native-w" as string]: `${current.w}px` }}
            />
            <div className="lightbox-bar">
              <p id={titleId} className="m-0">
                {current.alt}
              </p>
              <p className="mono m-0">
                {index! + 1} / {photos.length}
              </p>
              <button type="button" className="btn btn-on-navy" onClick={() => setIndex((value) => (value === null ? 0 : (value - 1 + photos.length) % photos.length))}>
                Vorige
              </button>
              <button type="button" className="btn btn-on-navy" onClick={() => setIndex((value) => (value === null ? 0 : (value + 1) % photos.length))}>
                Volgende
              </button>
              <button type="button" className="btn btn-on-navy-ghost" onClick={() => setIndex(null)}>
                Sluiten
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
