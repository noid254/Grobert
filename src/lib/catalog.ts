export type Group =
  | "wallpaper"
  | "panels"
  | "flooring"
  | "outdoor"
  | "bedding"
  | "curtains"
  | "furnishings";

export type Product = {
  id: number;
  slug: string;
  name: string;
  group: Group;
  categoryLabel: string;
  price: number;
  compareAt?: number;
  onSale: boolean;
  badge?: string;
  image: string;
  hoverImage?: string;
  gallery: string[];
  description: string;
  featured: boolean;
  stock: string;
  permalink: string;
};

export type CatalogPayload = {
  products: Product[];
  total: number;
  fetchedAt: string;
};

export const groups: { slug: Group; label: string; blurb: string }[] = [
  {
    slug: "wallpaper",
    label: "Wallpaper",
    blurb: "Self-adhesive, glue, marble contact paper, and textured walls.",
  },
  {
    slug: "panels",
    label: "3D Wall Panels",
    blurb: "Sunburst, cube, brick, diamond, and fluted acoustic tiles.",
  },
  {
    slug: "flooring",
    label: "Carpets & Flooring",
    blurb: "Vinyl mkeka wa mbao, wall-to-wall, rugs, and puzzle mats.",
  },
  {
    slug: "outdoor",
    label: "Grass & Outdoor",
    blurb: "10–35mm UV turf for Nairobi balconies and gardens.",
  },
  {
    slug: "bedding",
    label: "Beddings",
    blurb: "Duvet sets and quilted waterproof mattress protectors.",
  },
  {
    slug: "curtains",
    label: "Curtains & Rails",
    blurb: "Bendable rails and double tracks, measured to your windows.",
  },
  {
    slug: "furnishings",
    label: "Living extras",
    blurb: "Laptop desks and home organisation for compact rooms.",
  },
];

export const heroSlides = [
  {
    id: "01",
    kicker: "Live from the Nairobi showroom",
    title: "Own Your\nSignature Space",
    copy: "Wallpaper, turf, panels, and beddings — the pieces Nairobi homes keep coming back for.",
    image: "/images/hero-live.jpg",
    alt: "Woman in a mustard blazer in a RobertsKE living room",
    cta: "Shop the collection",
    kind: "shop" as const,
  },
  {
    id: "02",
    kicker: "Walls that speak",
    title: "Peel, stick,\nlive with it",
    copy: "Self-adhesive florals, marble contact paper, and 3D panels from KSh 999 a roll.",
    image: "/images/hero-03.jpg",
    alt: "Mustard-toned Nairobi living room",
    cta: "Shop wallpaper",
    kind: "category" as const,
    slug: "wallpaper" as Group,
  },
  {
    id: "03",
    kicker: "Barefoot comfort",
    title: "Grass that\nstays green",
    copy: "10 to 35mm UV-proof turf. Pay on delivery across Nairobi.",
    image: "/images/hero-04.jpg",
    alt: "Balcony with artificial grass carpet",
    cta: "Shop outdoor",
    kind: "category" as const,
    slug: "outdoor" as Group,
  },
];

export const mosaic: {
  title: string;
  copy: string;
  slug: Group;
  image: string;
  large?: boolean;
}[] = [
  {
    title: "Summer walls",
    copy: "Florals, geometrics, marble",
    slug: "wallpaper",
    image: "/images/cat-living.jpg",
    large: true,
  },
  {
    title: "Soft sleep",
    copy: "Duvets & protectors",
    slug: "bedding",
    image: "/images/cat-soft.jpg",
  },
  {
    title: "Floors first",
    copy: "Mkeka, vinyl, rugs",
    slug: "flooring",
    image: "/images/cat-flooring.jpg",
  },
  {
    title: "Sculpted panels",
    copy: "3D walls that quiet a room",
    slug: "panels",
    image: "/images/prod-sunburst.jpg",
  },
  {
    title: "Outdoor turf",
    copy: "Balcony-ready grass",
    slug: "outdoor",
    image: "/images/cat-outdoor.jpg",
  },
];

export const reviews = [
  {
    name: "Faith Mutua",
    place: "Karen, Nairobi",
    quote: "Balcony looks like a luxury resort now.",
    product: "UV-Proof Synthetic Grass Turf",
  },
  {
    name: "David Kiprono",
    place: "Runda Estate",
    quote: "Flawless double-fullness and blackout finish.",
    product: "Belgian Linen & Velvet Blackout Curtains",
  },
  {
    name: "Wanjiku Njoroge",
    place: "Kilimani",
    quote: "Sound dampening and a premium aesthetic in one.",
    product: "Acoustic 3D Fluted Oak Wall Panels",
  },
  {
    name: "Kevin Ochieng",
    place: "Kileleshwa",
    quote: "100% waterproof SPC flooring over old tiles.",
    product: "SPC Rigid Core Luxury Vinyl",
  },
];

export const showrooms = [
  {
    name: "Nairobi CBD",
    blurb: "Full catalog wall, wallpaper rolls, and sample decks. Walk in for a quick consult.",
    hours: "Mon–Sat · 9:00–18:00",
    area: "Central Business District",
  },
  {
    name: "Westlands",
    blurb: "Curtain workshop and flooring samples. Book a measure from this desk.",
    hours: "Mon–Sat · 9:00–18:00",
    area: "Westlands",
  },
  {
    name: "Karen",
    blurb: "Outdoor turf, garden rugs, and large-format drapes. Parking on site.",
    hours: "Tue–Sat · 10:00–17:00",
    area: "Karen",
  },
];

export const lookbook = [
  { title: "Sitting room, mustard hour", image: "/images/hero-03.jpg", place: "Lavington" },
  { title: "Balcony resort", image: "/images/hero-04.jpg", place: "Karen" },
  { title: "Sheer light", image: "/images/cat-living.jpg", place: "Kilimani" },
  { title: "Fluted oak study", image: "/images/prod-fluted.jpg", place: "Westlands" },
  { title: "Velvet reading chair", image: "/images/hero-02.jpg", place: "Runda" },
  { title: "Barefoot turf", image: "/images/cat-outdoor.jpg", place: "Kileleshwa" },
];

export const promoCodes: Record<string, { label: string; pct: number; groups?: Group[] }> = {
  FIRST15: { label: "15% off your first order", pct: 15 },
  ROBERTSFLOOR35: { label: "35% off carpets & flooring", pct: 35, groups: ["flooring", "outdoor"] },
  ROBERTSSOFT35: { label: "35% off soft furnishings", pct: 35, groups: ["furnishings", "curtains", "bedding"] },
  ROBERTSDECOR35: { label: "35% off wallpaper & decor", pct: 35, groups: ["wallpaper", "panels"] },
};

export const WHATSAPP =
  "https://wa.me/254702356090?text=Hi%20RobertsKE%2C%20I%20would%20like%20to%20check%20availability%20or%20book%20a%20measure.";
export const PHONE = "+254 702 356 090";

export function relatedProducts(all: Product[], slug: string, limit = 4) {
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);
  const same = all.filter((p) => p.slug !== slug && p.group === current.group);
  return (same.length >= limit ? same : all.filter((p) => p.slug !== slug)).slice(0, limit);
}

export function pickCover(products: Product[], group: Group, fallback: string) {
  return products.find((p) => p.group === group)?.image ?? fallback;
}

export function shopTheLook(products: Product[], limit = 3) {
  const seen = new Set<Group>();
  const out: Product[] = [];
  for (const p of products) {
    if (seen.has(p.group)) continue;
    seen.add(p.group);
    out.push(p);
    if (out.length === limit) break;
  }
  return out.length ? out : products.slice(0, limit);
}

export function liveLookbook(products: Product[]) {
  const shots = products
    .filter((p) => p.image)
    .slice(0, 12)
    .map((p) => ({
      title: p.name,
      image: p.hoverImage || p.gallery[1] || p.image,
      place: p.categoryLabel,
      slug: p.slug,
    }));
  if (shots.length >= 6) return shots;
  return lookbook.map((s) => ({ ...s, slug: undefined as string | undefined }));
}
