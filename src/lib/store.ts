import { create } from "zustand";
import { persist } from "zustand/middleware";
import { promoCodes, type Group, type Product } from "@/lib/catalog";

export type CartItem = {
  slug: string;
  qty: number;
  name: string;
  price: number;
  image: string;
  group: Group;
};

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  recent: string[];
  promo: string | null;
  firstOrderClaimed: boolean;
  add: (product: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  toggleWish: (slug: string) => void;
  remember: (slug: string) => void;
  setPromo: (code: string | null) => void;
  claimFirstOrder: () => void;
  clear: () => void;
};

export const useShop = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      recent: [],
      promo: null,
      firstOrderClaimed: false,
      add: (product, qty = 1) => {
        const cart = [...get().cart];
        const idx = cart.findIndex((i) => i.slug === product.slug);
        if (idx >= 0) cart[idx] = { ...cart[idx], qty: cart[idx].qty + qty };
        else
          cart.push({
            slug: product.slug,
            qty,
            name: product.name,
            price: product.price,
            image: product.image,
            group: product.group,
          });
        set({ cart });
      },
      remove: (slug) => set({ cart: get().cart.filter((i) => i.slug !== slug) }),
      setQty: (slug, qty) => {
        if (qty <= 0) set({ cart: get().cart.filter((i) => i.slug !== slug) });
        else set({ cart: get().cart.map((i) => (i.slug === slug ? { ...i, qty } : i)) });
      },
      toggleWish: (slug) => {
        const wishlist = get().wishlist.includes(slug)
          ? get().wishlist.filter((s) => s !== slug)
          : [...get().wishlist, slug];
        set({ wishlist });
      },
      remember: (slug) => {
        const next = [slug, ...get().recent.filter((s) => s !== slug)].slice(0, 8);
        set({ recent: next });
      },
      setPromo: (code) => set({ promo: code }),
      claimFirstOrder: () => set({ firstOrderClaimed: true, promo: get().promo ?? "FIRST15" }),
      clear: () => set({ cart: [], promo: null }),
    }),
    { name: "robertske-shop", skipHydration: true },
  ),
);

export function cartCount(cart: CartItem[]) {
  return cart.reduce((n, i) => n + i.qty, 0);
}

export function cartTotals(cart: CartItem[], promo: string | null) {
  const subtotal = cart.reduce((n, i) => n + i.price * i.qty, 0);
  const code = promo ? promoCodes[promo] : undefined;
  let discount = 0;
  if (code) {
    if (!code.groups) discount = Math.round(subtotal * (code.pct / 100));
    else {
      discount = cart.reduce((n, i) => {
        if (!code.groups?.includes(i.group)) return n;
        return n + Math.round(i.price * i.qty * (code.pct / 100));
      }, 0);
    }
  }
  return { subtotal, discount, total: Math.max(0, subtotal - discount), code };
}
