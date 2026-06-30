"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = { src: string; alt: string };

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const active = lightbox !== null ? images[lightbox] : null;

  useEffect(() => {
    if (lightbox === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((i) => Math.max(0, (i ?? 0) - 1));
      if (e.key === "ArrowRight") setLightbox((i) => Math.min(images.length - 1, (i ?? 0) + 1));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="relative aspect-video rounded-lg overflow-hidden bg-(--border) hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
          </button>
        ))}
      </div>

      {active && lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white p-2 hover:opacity-70"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-70"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:opacity-70"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-10 left-0 right-0 text-center text-white/70 text-sm px-8">
            {active.alt}
          </p>
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/40 text-xs">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
