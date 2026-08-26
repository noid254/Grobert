import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useCatalog } from "@/lib/catalog-context";
import { formatKes } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { products } = useCatalog();
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return products.slice(0, 6);
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.categoryLabel.toLowerCase().includes(needle) ||
          p.description.toLowerCase().includes(needle),
      )
      .slice(0, 8);
  }, [q, products]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setQ("");
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
        <Dialog.Content className="fixed top-[12vh] left-1/2 z-50 w-[min(640px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl bg-cream p-5 shadow-card focus:outline-none">
          <div className="flex items-center gap-2">
            <Search className="size-4 text-subtle" />
            <Dialog.Title className="sr-only">Search the catalog</Dialog.Title>
            <Input
              autoFocus
              placeholder="Search turf, wallpaper, duvets…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="border-0 shadow-none focus-visible:shadow-none"
            />
            <Dialog.Close className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-paper">
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <ul className="mt-3 max-h-[50vh] space-y-1 overflow-y-auto">
            {results.length === 0 ? (
              <li className="px-2 py-6 text-center text-sm text-muted">No matches.</li>
            ) : (
              results.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/shop/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-3 rounded-xl p-2 hover:bg-paper"
                  >
                    <img src={p.image} alt="" className="size-14 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted tabular-nums">{formatKes(p.price)}</p>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
