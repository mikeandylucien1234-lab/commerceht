"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/types/content";
import { t } from "@/types/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { HeroSlide } from "@/types/content";

export function HeroCarousel({
  slides,
  locale,
}: {
  slides: HeroSlide[];
  locale: Locale;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;
  const slide = slides[index];

  return (
    <section className="relative flex h-[340px] items-center justify-center overflow-hidden">
      {slide.image ? (
        <ImagePlaceholder image={slide.image} label={slide.placeholder} />
      ) : (
        <Image
          src="/images/hero-chile-haiti.jpg"
          alt="Chile y Haití"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-navy/32" />
      <button
        aria-label="Anterior"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        className="absolute left-7 top-1/2 z-10 -translate-y-1/2 text-3xl leading-none text-white/90"
      >
        ‹
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        className="absolute right-7 top-1/2 z-10 -translate-y-1/2 text-3xl leading-none text-white/90"
      >
        ›
      </button>
      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center md:px-28">
        <h1 className="max-w-3xl font-sans text-xl font-bold leading-snug text-white md:text-2xl">
          {t(slide.text, locale)}
        </h1>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: i === index ? "#D62828" : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
