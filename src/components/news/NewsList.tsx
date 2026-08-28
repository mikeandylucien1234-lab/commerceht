"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArticleCard } from "./ArticleCard";
import type { Post } from "@/types/content";

const PAGE_SIZE = 6;

export function NewsList({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const t = useTranslations("noticias");
  const [active, setActive] = useState(categories[0]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered =
    active === categories[0] ? posts : posts.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-navy/10 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setVisible(PAGE_SIZE);
            }}
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
            style={{
              background: active === cat ? "#0B2D5C" : "#F4F7FB",
              color: active === cat ? "#fff" : "#33445A",
            }}
          >
            {cat === categories[0] ? t("categoriaTodos") : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="pt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border-2 border-navy bg-navy px-9 py-3.5 text-sm font-semibold text-white"
          >
            {t("cargarMas")}
          </button>
        </div>
      )}
    </div>
  );
}
