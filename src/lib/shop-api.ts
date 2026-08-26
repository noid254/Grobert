import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { CatalogPayload } from "@/lib/catalog";

export const fetchCatalog = createServerFn({ method: "GET" }).handler(async () => {
  const { loadCatalog } = await import("@/lib/woo.server");
  try {
    return await loadCatalog();
  } catch {
    return { products: [], total: 0, fetchedAt: new Date().toISOString() } satisfies CatalogPayload;
  }
});

export const fetchProductBySlug = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => {
    const { loadCatalog } = await import("@/lib/woo.server");
    const catalog = await loadCatalog();
    return catalog.products.find((p) => p.slug === data.slug) ?? null;
  });
