"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = { src: string; alt: string };

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setLightbox(img)}
            className="relative aspect-video rounded-lg overflow-hidden bg-[var(--border)] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      {lightbox && (
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
          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm px-8">
            {lightbox.alt}
          </p>
        </div>
      )}
    </>
  );
}
