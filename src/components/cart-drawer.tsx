import * as Dialog from "@radix-ui/react-dialog";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { promoCodes, WHATSAPP } from "@/lib/catalog";
import { cartCount, cartTotals, useShop } from "@/lib/store";
import { formatKes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const cart = useShop((s) => s.cart);
  const promo = useShop((s) => s.promo);
  const setQty = useShop((s) => s.setQty);
  const remove = useShop((s) => s.remove);
  const setPromo = useShop((s) => s.setPromo);
  const { subtotal, discount, total, code } = cartTotals(cart, promo);
  const [draft, setDraft] = useState("");
  const [err, setErr] = useState("");

  function apply() {
    const key = draft.trim().toUpperCase();
    if (!key || !promoCodes[key]) {
      setErr("That code isn’t valid.");
      return;
    }
    setPromo(key);
    setErr("");
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-[fade-up_200ms_ease-out]" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream text-ink shadow-[-16px_0_40px_-24px_rgba(31,24,12,0.35)] focus:outline-none">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Dialog.Title className="font-display text-2xl">Bag · {cartCount(cart)}</Dialog.Title>
            <Dialog.Close className="flex size-11 items-center justify-center rounded-full hover:bg-paper">
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <ShoppingBag className="size-8 text-subtle" />
                <p className="text-sm text-muted">Your bag is empty.</p>
                <Dialog.Close asChild>
                  <Link to="/shop">
                    <Button>Shop the collection</Button>
                  </Link>
                </Dialog.Close>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                    <li key={item.slug} className="flex gap-3">
                      <Link
                        to="/shop/$slug"
                        params={{ slug: item.slug }}
                        onClick={() => onOpenChange(false)}
                        className="size-24 shrink-0 overflow-hidden rounded-lg bg-paper"
                      >
                        <img src={item.image} alt="" className="size-full object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{item.name}</p>
                        <p className="mt-0.5 text-sm tabular-nums text-muted">{formatKes(item.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex h-9 items-center rounded-md bg-surface shadow-[0_0_0_1px_var(--color-line)]">
                            <button
                              type="button"
                              className="flex size-9 items-center justify-center"
                              onClick={() => setQty(item.slug, item.qty - 1)}
                              aria-label="Decrease"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm tabular-nums">{item.qty}</span>
                            <button
                              type="button"
                              className="flex size-9 items-center justify-center"
                              onClick={() => setQty(item.slug, item.qty + 1)}
                              aria-label="Increase"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            className="flex size-9 items-center justify-center rounded-md text-muted hover:text-sale"
                            onClick={() => remove(item.slug)}
                            aria-label="Remove"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 ? (
            <div className="space-y-3 border-t border-line px-5 py-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Promo code"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && apply()}
                />
                <Button variant="outline" onClick={apply}>
                  Apply
                </Button>
              </div>
              {err ? <p className="text-xs text-sale">{err}</p> : null}
              {code ? <p className="text-xs text-mustard-deep">{code.label} applied.</p> : null}
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="tabular-nums">{formatKes(subtotal)}</span>
              </div>
              {discount > 0 ? (
                <div className="flex justify-between text-sm text-mustard-deep">
                  <span>Discount</span>
                  <span className="tabular-nums">−{formatKes(discount)}</span>
                </div>
              ) : null}
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatKes(total)}</span>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <Button className="w-full" size="lg">
                  Checkout on WhatsApp
                </Button>
              </a>
              <Dialog.Close asChild>
                <Link to="/cart" className="block text-center text-xs text-muted underline-offset-4 hover:underline">
                  View full bag
                </Link>
              </Dialog.Close>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
