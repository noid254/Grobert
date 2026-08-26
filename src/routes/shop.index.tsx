import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { groups, type Group, WHATSAPP } from "@/lib/catalog";
import { useCatalog } from "@/lib/catalog-context";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/")({ component: ShopPage });

function ShopPage() {
  const { products, total } = useCatalog();
  const [filter, setFilter] = useState<"all" | Group>("all");
  const [q, setQ] = useState("");
  const items = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return products.filter((p) => {
      if (filter !== "all" && p.group !== filter) return false;
      if (!needle) return true;
      return (
        p.name.toLowerCase().includes(needle) ||
        p.categoryLabel.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle)
      );
    });
  }, [products, filter, q]);

  const countFor = (slug: Group) => products.filter((p) => p.group === slug).length;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Live catalog</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Shop the collection</h1>
      <p className="mt-3 max-w-xl text-muted">
        {total} pieces from the Nairobi showroom — wallpaper, turf, panels, beddings, and more.
      </p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter by name…"
        className="mt-6 h-11 w-full max-w-md rounded-lg bg-surface px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-subtle focus-visible:shadow-[0_0_0_2px_var(--color-mustard)]"
      />
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "h-10 rounded-full px-4 text-sm",
            filter === "all" ? "bg-mustard text-ink" : "bg-surface text-muted shadow-[0_0_0_1px_var(--color-line)]",
          )}
        >
          All · {products.length}
        </button>
        {groups.map((f) => (
          <button
            key={f.slug}
            type="button"
            onClick={() => setFilter(f.slug)}
            className={cn(
              "h-10 rounded-full px-4 text-sm",
              filter === f.slug ? "bg-mustard text-ink" : "bg-surface text-muted shadow-[0_0_0_1px_var(--color-line)]",
            )}
          >
            {f.label} · {countFor(f.slug)}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs text-subtle tabular-nums">{items.length} pieces</p>
      {items.length === 0 ? (
        <div className="mt-12 rounded-2xl bg-surface px-6 py-16 text-center shadow-card">
          <p className="font-display text-2xl">Nothing matches that</p>
          <p className="mt-2 text-sm text-muted">Try another word, or ping us on WhatsApp for a recommendation.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-mustard-deep">
            Chat to buy
          </a>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} eager={i < 8} />
          ))}
        </div>
      )}
    </main>
  );
}
