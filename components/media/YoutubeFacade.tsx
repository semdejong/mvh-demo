"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function YoutubeFacade({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster: Photo;
}) {
  const [play, setPlay] = useState(false);

  if (play) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="video-facade" onClick={() => setPlay(true)} aria-label={`Video afspelen: ${title}`}>
      <Image
        src={poster.src}
        alt=""
        width={poster.w}
        height={poster.h}
        sizes="(max-width: 800px) 100vw, 480px"
        style={{ maxWidth: poster.w }}
      />
      <span className="play-mark">▶ {title}</span>
    </button>
  );
}
