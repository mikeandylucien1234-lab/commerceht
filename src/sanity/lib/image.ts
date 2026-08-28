import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageLike } from "@/types/content";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageLike | undefined) {
  if (!source?.asset?._ref) return undefined;
  return builder
    .image({ asset: { _ref: source.asset._ref, _type: "reference" } })
    .auto("format")
    .fit("max");
}
