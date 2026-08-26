import { createFileRoute, Link } from "@tanstack/react-router";
import { groups, type Group } from "@/lib/catalog";
import { useCatalog } from "@/lib/catalog-context";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/category/$slug")({ component: CategoryPage });

function CategoryPage() {
  const { slug } = Route.useParams();
  const { products } = useCatalog();
  const cat = groups.find((c) => c.slug === slug);
  const items = products.filter((p) => p.group === (slug as Group));

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Collection</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">{cat?.label ?? "Collection"}</h1>
      <p className="mt-3 max-w-xl text-muted">{cat?.blurb}</p>
      <p className="mt-2 text-xs text-subtle tabular-nums">{items.length} pieces</p>
      {items.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          Nothing here yet.{" "}
          <Link to="/shop" className="text-mustard-deep">
            Browse all
          </Link>
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
