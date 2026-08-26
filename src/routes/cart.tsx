import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { promoCodes, WHATSAPP } from "@/lib/catalog";
import { cartTotals, useShop } from "@/lib/store";
import { formatKes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const cart = useShop((s) => s.cart);
  const promo = useShop((s) => s.promo);
  const setQty = useShop((s) => s.setQty);
  const remove = useShop((s) => s.remove);
  const setPromo = useShop((s) => s.setPromo);
  const clear = useShop((s) => s.clear);
  const { subtotal, discount, total, code } = cartTotals(cart, promo);
  const [draft, setDraft] = useState(promo ?? "");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl">Your bag</h1>
      {cart.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-surface px-6 py-16 text-center shadow-card">
          <p className="text-muted">Nothing here yet.</p>
          <Link to="/shop" className="mt-4 inline-block">
            <Button>Continue shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <ul className="space-y-4">
            {cart.map((item) => (
                <li key={item.slug} className="flex gap-4 rounded-2xl bg-surface p-3 shadow-card">
                  <Link to="/shop/$slug" params={{ slug: item.slug }} className="size-28 shrink-0 overflow-hidden rounded-xl">
                    <img src={item.image} alt="" className="size-full object-cover" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <Link to="/shop/$slug" params={{ slug: item.slug }} className="font-medium hover:underline">
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm tabular-nums text-muted">{formatKes(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 items-center rounded-md bg-cream shadow-[0_0_0_1px_var(--color-line)]">
                        <button type="button" className="size-9" onClick={() => setQty(item.slug, item.qty - 1)}>
                          <Minus className="mx-auto size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">{item.qty}</span>
                        <button type="button" className="size-9" onClick={() => setQty(item.slug, item.qty + 1)}>
                          <Plus className="mx-auto size-3.5" />
                        </button>
                      </div>
                      <button type="button" className="size-9 text-muted hover:text-sale" onClick={() => remove(item.slug)}>
                        <Trash2 className="mx-auto size-4" />
                      </button>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
          <aside className="h-fit rounded-2xl bg-paper p-5">
            <h2 className="font-display text-2xl">Summary</h2>
            <div className="mt-4 flex gap-2">
              <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Promo code" />
              <Button
                variant="outline"
                onClick={() => {
                  const key = draft.trim().toUpperCase();
                  if (promoCodes[key]) setPromo(key);
                }}
              >
                Apply
              </Button>
            </div>
            {code ? <p className="mt-2 text-xs text-mustard-deep">{code.label}</p> : null}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="tabular-nums">{formatKes(subtotal)}</span>
              </div>
              {discount > 0 ? (
                <div className="flex justify-between text-mustard-deep">
                  <span>Discount</span>
                  <span className="tabular-nums">−{formatKes(discount)}</span>
                </div>
              ) : null}
              <div className="flex justify-between border-t border-line pt-2 font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatKes(total)}</span>
              </div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 block">
              <Button className="w-full" size="lg">
                Checkout on WhatsApp
              </Button>
            </a>
            <button type="button" className="mt-3 w-full text-center text-xs text-subtle" onClick={() => clear()}>
              Clear bag
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
