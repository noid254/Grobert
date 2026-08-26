import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock3,
  Headphones,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { heroSlides, mosaic, pickCover, reviews, shopTheLook, type Group } from "@/lib/catalog";
import { useShop } from "@/lib/store";
import { useCatalog } from "@/lib/catalog-context";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { cn, formatKes } from "@/lib/utils";

const trust = [
  { icon: Truck, title: "Pay on Delivery", copy: "Across Nairobi" },
  { icon: RefreshCcw, title: "100% Fit Guarantee", copy: "Laser measured" },
  { icon: ShieldCheck, title: "Secure Payments", copy: "M-PESA & cards" },
  { icon: Headphones, title: "WhatsApp Support", copy: "We’re here to help" },
];

const FILTERS: { id: "all" | Group; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wallpaper", label: "Walls" },
  { id: "flooring", label: "Floors" },
  { id: "outdoor", label: "Outdoor" },
  { id: "bedding", label: "Bedding" },
];

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const current = heroSlides[slide] ?? heroSlides[0];

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main>
      <Hero slide={slide} setSlide={setSlide} current={current} />
      <TrustRow />
      <CatalogMarquee />
      <JustIn />
      <CategoryMosaic />
      <NewArrivals />
      <LovedInNairobi />
      <PromoBanner />
      <RecentlyViewed />
      <TrustRow compact />
    </main>
  );
}

function Hero({
  slide,
  setSlide,
  current,
}: {
  slide: number;
  setSlide: (n: number) => void;
  current: (typeof heroSlides)[number];
}) {
  const { products, total } = useCatalog();
  const from = products.reduce((min, p) => Math.min(min, p.price), Infinity);
  const fromLabel = Number.isFinite(from) ? formatKes(from) : "KSh 250";
  const look = shopTheLook(products, 3);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[58vh] lg:min-h-[78vh]">
        {heroSlides.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.alt}
            className={cn(
              "absolute inset-0 size-full object-cover object-right transition-opacity duration-700 lg:object-center",
              i === slide ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-ink/10" />
        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-4 py-12 sm:px-6 lg:min-h-[78vh] lg:justify-center lg:px-8">
          <div className="stagger-in max-w-xl text-cream">
            <p className="text-xs font-semibold tracking-[0.22em] text-mustard uppercase">{current.kicker}</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] font-medium tracking-tight sm:text-6xl lg:text-7xl">
              {current.title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">{current.copy}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {current.kind === "shop" ? (
                <Link to="/shop">
                  <Button size="lg" className="uppercase tracking-wide">
                    {current.cta} <ArrowRight className="size-4" />
                  </Button>
                </Link>
              ) : (
                <Link to="/category/$slug" params={{ slug: current.slug }}>
                  <Button size="lg" className="uppercase tracking-wide">
                    {current.cta} <ArrowRight className="size-4" />
                  </Button>
                </Link>
              )}
              <p className="text-sm text-cream/80">
                {total || products.length} live pieces · from {fromLabel}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {products.slice(0, 4).map((p) => (
                  <img
                    key={p.slug}
                    src={p.image}
                    alt=""
                    className="size-8 rounded-full object-cover ring-2 ring-ink/40"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">680+ Nairobi homes</p>
                <p className="flex items-center gap-1 text-xs text-cream/70">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-mustard text-mustard" />
                    ))}
                  </span>
                  4.9
                </p>
              </div>
            </div>
          </div>
        </div>

        {look.length > 0 ? (
          <div className="absolute right-6 bottom-10 z-10 hidden w-72 flex-col gap-2 lg:flex">
            <p className="text-xs font-semibold tracking-[0.18em] text-cream/80 uppercase">Shop this look</p>
            {look.map((p) => (
              <Link
                key={p.slug}
                to="/shop/$slug"
                params={{ slug: p.slug }}
                className="flex items-center gap-3 rounded-xl bg-surface/95 p-2 shadow-card backdrop-blur-sm transition-transform duration-150 hover:-translate-y-0.5"
              >
                <img src={p.image} alt="" className="size-14 rounded-lg object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{p.name}</p>
                  <p className="text-xs text-muted tabular-nums">{formatKes(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="absolute top-6 right-6 z-10 hidden flex-col gap-3 lg:flex">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlide(i)}
              className={cn(
                "text-xs tabular-nums tracking-widest",
                i === slide ? "font-semibold text-cream" : "text-cream/50 hover:text-cream",
              )}
            >
              {s.id}
              {i === slide ? <span className="mt-1 block h-px w-6 bg-mustard" /> : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustRow({ compact }: { compact?: boolean }) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8", compact ? "py-6" : "-mt-6 pb-6")}>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-2xl bg-surface px-3 py-4 shadow-card sm:grid-cols-4 sm:px-6">
        {trust.map((t) => (
          <div key={t.title} className="flex items-center gap-3 px-2 py-1">
            <t.icon className="size-5 shrink-0 text-mustard-deep" />
            <div>
              <p className="text-sm font-medium">{t.title}</p>
              <p className="text-xs text-muted">{t.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CatalogMarquee() {
  const { products } = useCatalog();
  const names = products.slice(0, 22).map((p) => p.name);
  if (names.length < 6) return null;
  const loop = [...names, ...names];
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-3">
      <div className="marquee-track items-center gap-8 px-4">
        {loop.map((n, i) => (
          <span key={`${n}-${i}`} className="flex items-center gap-8 text-mustard-dark">
            <span className="font-display text-lg whitespace-nowrap italic">{n}</span>
            <span className="size-1.5 shrink-0 rounded-full bg-mustard" />
          </span>
        ))}
      </div>
    </div>
  );
}

function JustIn() {
  const { products } = useCatalog();
  const row = products.slice(0, 12);
  if (row.length === 0) return <EmptyCatalog />;
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Just in</p>
          <h2 className="font-display text-3xl">Tap, look, take home</h2>
        </div>
        <Link to="/shop" className="hidden text-sm text-mustard-deep sm:inline">
          See all
        </Link>
      </div>
      <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
        {row.map((p, i) => (
          <div key={p.slug} className="w-44 shrink-0 snap-start sm:w-52">
            <ProductCard product={p} eager={i < 4} />
          </div>
        ))}
      </div>
    </section>
  );
}

function EmptyCatalog() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
      <p className="font-display text-3xl">The showroom is restocking</p>
      <p className="mt-2 text-sm text-muted">WhatsApp us and we’ll send today’s available pieces.</p>
    </section>
  );
}

function CategoryMosaic() {
  const { products } = useCatalog();
  const large = mosaic[0];
  const rest = mosaic.slice(1);
  const countFor = (slug: Group) => products.filter((p) => p.group === slug).length;
  if (!large) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
        <Link
          to="/category/$slug"
          params={{ slug: large.slug }}
          className="group relative min-h-[340px] overflow-hidden rounded-2xl md:row-span-2 md:min-h-0"
        >
          <img
            src={pickCover(products, large.slug, large.image)}
            alt={large.title}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-cream">
            <h3 className="font-display text-3xl">{large.title}</h3>
            <p className="mt-1 text-sm text-cream/80">
              {large.copy}
              {countFor(large.slug) ? ` · ${countFor(large.slug)} pieces` : ""}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase">
              Shop now <ArrowRight className="size-3.5" />
            </span>
          </div>
        </Link>

        {rest.map((tile, i) => (
          <Link
            key={tile.title}
            to="/category/$slug"
            params={{ slug: tile.slug }}
            className={cn(
              "group grid grid-cols-2 items-center overflow-hidden rounded-2xl",
              i % 2 === 0 ? "bg-paper" : "bg-mustard/25",
            )}
          >
            <div className="flex h-full flex-col justify-center p-5 sm:p-6">
              <h3 className="font-display text-2xl text-ink">{tile.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {tile.copy}
                {countFor(tile.slug) ? ` · ${countFor(tile.slug)}` : ""}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-ink uppercase">
                Shop now <ArrowRight className="size-3.5" />
              </span>
            </div>
            <div className="relative h-full min-h-[160px]">
              <img
                src={pickCover(products, tile.slug, tile.image)}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function NewArrivals() {
  const { products } = useCatalog();
  const [filter, setFilter] = useState<"all" | Group>("all");
  const items = useMemo(() => {
    const pool = filter === "all" ? products : products.filter((p) => p.group === filter);
    return pool.slice(0, 10);
  }, [products, filter]);
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-baseline gap-6">
          <h2 className="font-display text-3xl sm:text-4xl">New Arrivals</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {FILTERS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setFilter(t.id)}
                className={cn(
                  "border-b-2 pb-0.5 transition-colors",
                  filter === t.id ? "border-mustard font-medium text-ink" : "border-transparent text-muted",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <Link to="/shop">
          <Button variant="outline" size="sm">
            View all <ArrowRight className="size-3.5" />
          </Button>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((p, i) => (
          <ProductCard key={p.slug} product={p} eager={i < 5} />
        ))}
      </div>
    </section>
  );
}

function LovedInNairobi() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Loved in Nairobi</p>
          <h2 className="font-display text-3xl sm:text-4xl">Homes, not catalogues</h2>
        </div>
        <Link to="/about" className="hidden text-sm text-mustard-deep sm:inline">
          Our story
        </Link>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <blockquote key={r.name} className="rounded-2xl bg-surface p-5 shadow-card">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-mustard text-mustard" />
              ))}
            </span>
            <p className="mt-3 font-display text-xl leading-snug">“{r.quote}”</p>
            <footer className="mt-4 text-sm text-muted">
              {r.name} · {r.place}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function useOfferClock() {
  const [label, setLabel] = useState("00:00:00");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const ms = Math.max(0, end.getTime() - now.getTime());
      const h = Math.floor(ms / 3_600_000)
        .toString()
        .padStart(2, "0");
      const m = Math.floor((ms % 3_600_000) / 60_000)
        .toString()
        .padStart(2, "0");
      const s = Math.floor((ms % 60_000) / 1000)
        .toString()
        .padStart(2, "0");
      setLabel(`${h}:${m}:${s}`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return label;
}

function PromoBanner() {
  const claim = useShop((s) => s.claimFirstOrder);
  const claimed = useShop((s) => s.firstOrderClaimed);
  const clock = useOfferClock();

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid items-center gap-6 rounded-2xl bg-paper px-6 py-8 sm:grid-cols-[1fr_auto_auto] sm:px-10">
        <div className="flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-mustard text-ink">
            <Sparkles className="size-7" />
          </div>
          <div>
            <h3 className="font-display text-3xl">Get 15% Off</h3>
            <p className="text-muted">On your first order · ends in {clock}</p>
            <Button className="mt-3 uppercase tracking-wide" size="sm" onClick={() => claim()}>
              {claimed ? "Code FIRST15 applied" : "Claim offer"} <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-muted lg:flex">
          <Step icon={ShoppingBag} label="Shop" copy="Your favourites" />
          <ArrowRight className="size-4 text-subtle" />
          <Step icon={Clock3} label="Add to cart" copy="Easily" />
          <ArrowRight className="size-4 text-subtle" />
          <Step icon={Sparkles} label="Get discount" copy="On checkout" />
        </div>
        <div className="hidden size-24 items-center justify-center rounded-full bg-mustard font-display text-2xl font-semibold text-ink sm:flex">
          15%
          <br />
          OFF
        </div>
      </div>
    </section>
  );
}

function RecentlyViewed() {
  const { products } = useCatalog();
  const recent = useShop((s) => s.recent);
  const items = recent
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 5);
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl">You were looking at</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

function Step({ icon: Icon, label, copy }: { icon: typeof ShoppingBag; label: string; copy: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-5 text-mustard-deep" />
      <div>
        <p className="font-medium text-ink">{label}</p>
        <p className="text-xs">{copy}</p>
      </div>
    </div>
  );
}
