import { Heart, Eye, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn, formatKes } from "@/lib/utils";
import type { Product } from "@/lib/catalog";
import { useShop } from "@/lib/store";
import { useCatalog } from "@/lib/catalog-context";
import { toast } from "sonner";

export function ProductCard({ product, eager }: { product: Product; eager?: boolean }) {
  const wished = useShop((s) => s.wishlist.includes(product.slug));
  const toggleWish = useShop((s) => s.toggleWish);
  const add = useShop((s) => s.add);
  const { setQuickView } = useCatalog();

  return (
    <article className="group relative">
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative overflow-hidden rounded-xl bg-paper shadow-card transition-[box-shadow,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-card-hover">
          <img
            src={product.image}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {product.hoverImage ? (
            <img
              src={product.hoverImage}
              alt=""
              loading="lazy"
              className="absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            />
          ) : null}
          {product.badge ? (
            <span
              className={cn(
                "absolute top-3 left-3 rounded-md px-2 py-1 text-xs font-semibold tracking-wider uppercase",
                product.badge === "NEW" ? "bg-ink text-cream" : "bg-sale text-cream",
              )}
            >
              {product.badge}
            </span>
          ) : null}
          <div className="absolute inset-x-3 bottom-3 flex translate-y-2 gap-2 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
            <button
              type="button"
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-mustard text-xs font-semibold tracking-wide text-ink uppercase hover:bg-mustard-deep hover:text-cream"
              onClick={(e) => {
                e.preventDefault();
                add(product, 1);
                toast.success("Added to bag", { description: product.name });
              }}
            >
              <Plus className="size-3.5" /> Add
            </button>
            <button
              type="button"
              aria-label="Quick look"
              className="flex size-10 items-center justify-center rounded-lg bg-surface text-ink"
              onClick={(e) => {
                e.preventDefault();
                setQuickView(product);
              }}
            >
              <Eye className="size-4" />
            </button>
          </div>
        </div>
        <div className="mt-3 space-y-0.5">
          <p className="text-xs tracking-wide text-subtle uppercase">{product.categoryLabel}</p>
          <h3 className="line-clamp-2 text-sm font-medium text-ink">{product.name}</h3>
          <p className="flex items-baseline gap-2 text-sm tabular-nums">
            <span className="font-medium text-ink">{formatKes(product.price)}</span>
            {product.compareAt ? (
              <span className="text-subtle line-through">{formatKes(product.compareAt)}</span>
            ) : null}
          </p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        onClick={(e) => {
          e.preventDefault();
          toggleWish(product.slug);
          toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
        }}
        className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-surface/90 text-ink shadow-card backdrop-blur-sm transition-colors hover:bg-mustard"
      >
        <Heart className={cn("size-4", wished && "fill-sale text-sale")} />
      </button>
    </article>
  );
}
