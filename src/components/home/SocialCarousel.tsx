"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  InstagramGradientIcon,
  FacebookRoundIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

type SocialPost = { id: number; platform: "instagram" | "tiktok" | "facebook" };
type SocialLinks = { facebook?: string; instagram?: string; tiktok?: string };

const CARD_STEP = 284;
const VISIBLE_COUNT = 4;

const BADGES: { key: keyof SocialLinks; src: string; alt: string }[] = [
  { key: "facebook", src: "/images/social/facebook-badge.png", alt: "Facebook" },
  { key: "instagram", src: "/images/social/instagram-badge.png", alt: "Instagram" },
  { key: "tiktok", src: "/images/social/tiktok-badge.png", alt: "TikTok" },
];

export function SocialCarousel({
  posts,
  handle,
  socialLinks = {},
}: {
  posts: SocialPost[];
  handle: string;
  socialLinks?: SocialLinks;
}) {
  const t = useTranslations("home");
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, posts.length - VISIBLE_COUNT);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      3000
    );
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="bg-mist py-16">
      <h2 className="mb-9 text-center font-serif text-2xl font-bold text-navy">
        {t("siguenos")} <span className="text-red">{handle}</span>
      </h2>
      <div className="relative mx-auto max-w-5xl px-6 md:px-14">
        <button
          aria-label="Anterior"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="absolute left-2 top-1/2 z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-navy text-white shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          className="absolute right-2 top-1/2 z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-navy text-white shadow-lg"
        >
          ›
        </button>
        <div className="mx-14 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * CARD_STEP}px)` }}
          >
            {posts.map((post) => (
              <a
                key={post.id}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[260px] flex-none"
              >
                <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-md">
                  <ImagePlaceholder label="Post" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,45,92,0.55) 0%, rgba(11,45,92,0) 45%)",
                    }}
                  />
                  <div className="absolute right-2.5 top-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white shadow">
                    {post.platform === "instagram" && (
                      <InstagramGradientIcon id={String(post.id)} />
                    )}
                    {post.platform === "tiktok" && <TikTokIcon size={18} />}
                    {post.platform === "facebook" && <FacebookRoundIcon />}
                  </div>
                  <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-white">
                    {t("seguir")} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {BADGES.map((badge) => {
          const href = socialLinks[badge.key];
          if (!href) return null;
          return (
            <a
              key={badge.key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[110px] transition-transform hover:scale-105 sm:w-[130px]"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={600}
                height={600}
                className="h-auto w-full"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
