import type { CatalogPayload, Group, Product } from "@/lib/catalog";

const WC_BASE = "https://shop.roberts.co.ke/wp-json/wc/v3";
const WC_KEY = "ck_09b245f148dceb71269bc46d86da2cc0a8a8a3d6";
const WC_SECRET = "cs_54e14d323aa5c933dbc300af1321a5d4f696bff2";

type WooImage = { src?: string };
type WooCat = { id: number; name: string; slug: string };
type WooProduct = {
  id: number;
  name: string;
  slug: string;
  permalink?: string;
  price?: string;
  regular_price?: string;
  sale_price?: string;
  on_sale?: boolean;
  featured?: boolean;
  description?: string;
  short_description?: string;
  stock_status?: string;
  catalog_visibility?: string;
  status?: string;
  images?: WooImage[];
  categories?: WooCat[];
};

let cache: { at: number; data: CatalogPayload } | null = null;
const TTL_MS = 5 * 60 * 1000;

function authHeader() {
  return "Basic " + Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString("base64");
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&/gi, "&")
    .replace(/"/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/</gi, "<")
    .replace(/>/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function groupFrom(cats: WooCat[]): { group: Group; label: string } {
  const slugs = new Set(cats.map((c) => c.slug));
  const has = (...keys: string[]) => keys.some((k) => slugs.has(k));
  if (has("grass-carpet", "grass-carpet-carpets-and-flooring", "garden-and-outdoor"))
    return { group: "outdoor", label: "Outdoor & Garden" };
  if (has("curtains-sheers", "curtain-rails")) return { group: "curtains", label: "Curtains & Rails" };
  if (has("3d-wall-panels", "3d-brick-foam-panel", "fluted-panel", "3d-foam-panels", "3d-wallpaper"))
    return { group: "panels", label: "3D Wall Panels" };
  if (
    has(
      "self-adhesive-wallpaper",
      "glue-wallpaper",
      "contact-paper",
      "fluted-self-adhesive-wallpaper",
      "adhesive-contact-paper",
    )
  )
    return { group: "wallpaper", label: "Wallpaper" };
  if (
    has(
      "carpets-and-flooring",
      "area-rugs",
      "puzzle-mat",
      "puzzle-mats",
      "wall-to-wall-carpets",
      "woodgrain-cushion-vinyl",
      "pvc-honeycomb-perforated-mats",
    )
  )
    return { group: "flooring", label: "Carpets & Flooring" };
  if (has("beddings")) return { group: "bedding", label: "Beddings" };
  if (has("laptop-desk", "home-organization")) return { group: "furnishings", label: "Living extras" };
  if (has("wall-decor-essentials")) return { group: "wallpaper", label: "Wall Decor" };
  return { group: "furnishings", label: cats[0]?.name ?? "Collection" };
}

function mapProduct(p: WooProduct, index: number): Product | null {
  if (p.status && p.status !== "publish") return null;
  if (p.catalog_visibility === "hidden") return null;
  const name = (p.name || "").trim();
  if (!name || name.toLowerCase() === "product") return null;
  const price = Number(p.price || p.sale_price || p.regular_price || 0);
  if (!Number.isFinite(price) || price <= 0) return null;
  const gallery = (p.images || []).map((i) => i.src).filter((src): src is string => Boolean(src)).slice(0, 5);
  if (gallery.length === 0) return null;
  const regular = Number(p.regular_price || 0);
  const compareAt = regular > price + 20 ? regular : undefined;
  const pct = compareAt ? Math.round((1 - price / compareAt) * 100) : 0;
  const { group, label } = groupFrom(p.categories || []);
  const desc = stripHtml(p.short_description || p.description || "");
  return {
    id: p.id,
    slug: p.slug,
    name,
    group,
    categoryLabel: label,
    price,
    compareAt,
    onSale: Boolean(p.on_sale) && pct >= 5,
    badge: index < 10 ? "NEW" : pct >= 10 ? `-${pct}%` : undefined,
    image: gallery[0],
    hoverImage: gallery[1],
    gallery,
    description: desc.slice(0, 420),
    featured: Boolean(p.featured) || index < 10,
    stock: p.stock_status === "instock" ? "instock" : p.stock_status || "instock",
    permalink: p.permalink || "",
  };
}

async function fetchPage(page: number, perPage: number) {
  const url = `${WC_BASE}/products?per_page=${perPage}&page=${page}&status=publish`;
  const res = await fetch(url, {
    headers: { Authorization: authHeader(), Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Shop catalog unavailable (${res.status})`);
  }
  const total = Number(res.headers.get("X-WP-Total") || "0");
  const json = (await res.json()) as WooProduct[];
  return { total, json };
}

export async function loadCatalog(): Promise<CatalogPayload> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  const first = await fetchPage(1, 100);
  let raw = first.json;
  const pages = Math.max(1, Math.ceil((first.total || raw.length) / 100));
  if (pages > 1) {
    const rest = await Promise.all(
      Array.from({ length: pages - 1 }, (_, i) => fetchPage(i + 2, 100)),
    );
    raw = raw.concat(...rest.map((r) => r.json));
  }
  const products = raw
    .map((p, i) => mapProduct(p, i))
    .filter((p): p is Product => Boolean(p));
  const data: CatalogPayload = {
    products,
    total: products.length,
    fetchedAt: new Date().toISOString(),
  };
  cache = { at: Date.now(), data };
  return data;
}
