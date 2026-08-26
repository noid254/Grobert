import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useCatalog } from "@/lib/catalog-context";
import { useShop } from "@/lib/store";
import { formatKes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function QuickView() {
  const { quickView, setQuickView } = useCatalog();
  const add = useShop((s) => s.add);

  return (
    <Dialog.Root open={Boolean(quickView)} onOpenChange={(o) => !o && setQuickView(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(720px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-cream shadow-card focus:outline-none">
          {quickView ? (
            <div className="grid sm:grid-cols-2">
              <img src={quickView.image} alt={quickView.name} className="aspect-square w-full object-cover" />
              <div className="flex flex-col p-5 sm:p-6">
                <Dialog.Title className="font-display text-2xl leading-tight">{quickView.name}</Dialog.Title>
                <p className="mt-1 text-xs tracking-wide text-subtle uppercase">{quickView.categoryLabel}</p>
                <p className="mt-3 text-lg font-medium tabular-nums">{formatKes(quickView.price)}</p>
                {quickView.description ? (
                  <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted">{quickView.description}</p>
                ) : null}
                <div className="mt-auto flex flex-col gap-2 pt-6">
                  <Button
                    size="lg"
                    onClick={() => {
                      add(quickView, 1);
                      toast.success("Added to bag");
                      setQuickView(null);
                    }}
                  >
                    Add to bag
                  </Button>
                  <Dialog.Close asChild>
                    <Link
                      to="/shop/$slug"
                      params={{ slug: quickView.slug }}
                      className="text-center text-sm text-mustard-deep"
                    >
                      View full details
                    </Link>
                  </Dialog.Close>
                </div>
              </div>
            </div>
          ) : null}
          <Dialog.Close className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-surface/90 text-ink">
            <X className="size-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
