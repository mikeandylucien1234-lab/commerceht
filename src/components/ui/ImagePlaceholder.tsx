import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityImageLike } from "@/types/content";

export function ImagePlaceholder({
  image,
  label,
  className = "",
}: {
  image?: SanityImageLike;
  label: string;
  className?: string;
}) {
  const url = urlForImage(image ?? undefined)?.url();

  if (url) {
    return (
      <Image
        src={url}
        alt={label}
        fill
        className={`object-cover ${className}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-sky text-center text-xs font-medium uppercase tracking-wide text-navy/50 ${className}`}
    >
      {label}
    </div>
  );
}
