"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SlideshowProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
  aspectClassName?: string;
};

export function Slideshow({
  images,
  alt,
  intervalMs = 2000,
  aspectClassName = "aspect-[4/3]",
}: SlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 border-dashed border-ink/15 bg-ink/5 ${aspectClassName}`}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
