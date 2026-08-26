import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Heart, Minus, Plus } from "lucide-react";
import { relatedProducts, WHATSAPP } from "@/lib/catalog";
import { useCatalog } from "@/lib/catalog-context";
import { useShop } from "@/lib/store";
import { formatKes, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { toast } from "sonner";

export const Route = createFileRoute("/shop/$slug")({ component: ProductPage });

function ProductPage() {
  const { slug } = Route.useParams();
  const { products } = useCatalog();
  const product = products.find((p) => p.slug === slug);
  const add = useShop((s) => s.add);
  const toggleWish = useShop((s) => s.toggleWish);
  const remember = useShop((s) => s.remember);
  const wished = useShop((s) => (product ? s.wishlist.includes(product.slug) : false));
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (product) remember(product.slug);
    setActive(0);
    setQty(1);
  }, [product, remember]);

  if (!product) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Piece not found</h1>
        <Link to="/shop" className="mt-4 inline-flex text-sm text-mustard-deep">
          Back to shop
        </Link>
      </main>
    );
  }

  const gallery = product.gallery.length ? product.gallery : [product.image];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs text-muted">
        <Link to="/shop" className="hover:text-ink">
          Shop
        </Link>{" "}
        / {product.categoryLabel} / {product.name}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="group overflow-hidden rounded-2xl bg-paper">
            <img
              src={gallery[active]}
              alt={product.name}
              className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          {gallery.length > 1 ? (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {gallery.slice(0, 5).map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "overflow-hidden rounded-lg",
                    i === active ? "ring-2 ring-mustard" : "opacity-80 hover:opacity-100",
                  )}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          {product.badge ? (
            <span className="rounded-md bg-ink px-2 py-1 text-xs font-semibold tracking-wider text-cream uppercase">
              {product.badge}
            </span>
          ) : null}
          <p className="mt-3 text-xs tracking-wide text-subtle uppercase">{product.categoryLabel}</p>
          <h1 className="mt-1 font-display text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-3 flex items-baseline gap-3 text-lg tabular-nums">
            <span className="font-medium">{formatKes(product.price)}</span>
            {product.compareAt ? (
              <span className="text-subtle line-through">{formatKes(product.compareAt)}</span>
            ) : null}
          </p>
          {product.description ? (
            <p className="mt-5 max-w-md leading-relaxed text-muted">{product.description}</p>
          ) : null}
          <p className="mt-4 text-xs font-medium tracking-wide text-mustard-deep uppercase">
            {product.stock === "instock" ? "In stock · ships Nairobi" : "Ask on WhatsApp"}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center rounded-lg bg-surface shadow-[0_0_0_1px_var(--color-line)]">
              <button type="button" className="flex size-12 items-center justify-center" onClick={() => setQty((n) => Math.max(1, n - 1))}>
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center tabular-nums">{qty}</span>
              <button type="button" className="flex size-12 items-center justify-center" onClick={() => setQty((n) => n + 1)}>
                <Plus className="size-4" />
              </button>
            </div>
            <Button
              size="lg"
              onClick={() => {
                add(product, qty);
                toast.success("Added to bag", { description: product.name });
              }}
            >
              Add to bag
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Wishlist"
              onClick={() => {
                toggleWish(product.slug);
                toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
              }}
            >
              <Heart className={cn("size-4", wished && "fill-sale text-sale")} />
            </Button>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-mustard-deep">
            Ask on WhatsApp <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">You may also like</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {relatedProducts(products, product.slug).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
