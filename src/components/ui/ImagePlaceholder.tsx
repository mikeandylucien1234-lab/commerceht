import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityImageLike } from "@/types/content";

export function ImagePlaceholder({
  image,
  src,
  label,
  className = "",
}: {
  image?: SanityImageLike;
  /** Static public/ path, used when there's no Sanity image yet (takes priority over `image`). */
  src?: string;
  label: string;
  className?: string;
}) {
  const url = src || urlForImage(image ?? undefined)?.url();

  if (url) {
    return (
      <Image
        src={url}
        alt={label}
        fill
        className={`object-cover object-top ${className}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  return (
    <div className={`absolute inset-0 bg-sky ${className}`}>
      <span className="absolute left-2 top-2 max-w-[calc(100%-16px)] truncate rounded bg-navy/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-navy/60">
        {label}
      </span>
    </div>
  );
}
