import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { groups, WHATSAPP } from "@/lib/catalog";
import { cartCount, useShop } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/cart-drawer";
import { SearchDialog } from "@/components/search-dialog";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-md bg-mustard font-display text-lg font-semibold text-ink">
        R
      </span>
      <span className="font-display text-xl font-semibold tracking-[0.18em] text-ink uppercase">
        RobertsKE
      </span>
    </Link>
  );
}

const pagesLinks = [
  { to: "/about", label: "About us" },
  { to: "/showrooms", label: "Showrooms" },
  { to: "/lookbook", label: "Lookbook" },
];

const ANNOUNCE = [
  "Pay on delivery across Nairobi",
  "FIRST15 — 15% off your first order",
  "Laser-measured curtains · 100% fit",
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useShop((s) => cartCount(s.cart));
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [note, setNote] = useState(0);
  useEffect(() => setHydrated(true), []);
  useEffect(() => {
    const id = window.setInterval(() => setNote((n) => (n + 1) % ANNOUNCE.length), 4200);
    return () => window.clearInterval(id);
  }, []);
  const badge = hydrated ? count : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <div className="bg-mustard text-ink">
        <p className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium tracking-wide sm:px-6">
          {ANNOUNCE[note]}
        </p>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-ink",
              pathname === "/" ? "text-ink" : "text-muted",
            )}
          >
            <span className={cn("border-b-2 pb-0.5", pathname === "/" ? "border-mustard" : "border-transparent")}>
              Home
            </span>
          </Link>
          <Link
            to="/shop"
            className={cn(
              "text-sm font-medium transition-colors hover:text-ink",
              pathname.startsWith("/shop") ? "text-ink" : "text-muted",
            )}
          >
            Shop
          </Link>
          <Dropdown.Root>
            <Dropdown.Trigger className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
              Categories <ChevronDown className="size-3.5" />
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                align="start"
                className="z-50 min-w-56 rounded-xl bg-surface p-2 shadow-card"
              >
                {groups.map((c) => (
                  <Dropdown.Item key={c.slug} asChild>
                    <Link
                      to="/category/$slug"
                      params={{ slug: c.slug }}
                      className="block rounded-lg px-3 py-2 text-sm text-ink outline-none hover:bg-paper"
                    >
                      {c.label}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>

          <Link to="/shop" className="text-sm font-medium text-muted hover:text-ink">
            New In
          </Link>

          <Link to="/lookbook" className="text-sm font-medium text-muted hover:text-ink">
            Lookbook
          </Link>

          <Dropdown.Root>
            <Dropdown.Trigger className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink">
              Pages <ChevronDown className="size-3.5" />
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                align="start"
                className="z-50 min-w-44 rounded-xl bg-surface p-2 shadow-card"
              >
                {pagesLinks.map((p) => (
                  <Dropdown.Item key={p.to} asChild>
                    <Link
                      to={p.to}
                      className="block rounded-lg px-3 py-2 text-sm text-ink outline-none hover:bg-paper"
                    >
                      {p.label}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" />
          </button>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp consult"
            className="hidden size-11 items-center justify-center rounded-full text-ink hover:bg-paper sm:flex"
          >
            <MessageCircle className="size-5" />
          </a>
          <button
            type="button"
            aria-label="Open bag"
            className="relative flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {badge > 0 ? (
              <span className="absolute top-1 right-1 flex size-5 items-center justify-center rounded-full bg-sale text-xs font-semibold leading-none text-cream tabular-nums">
                {badge}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper lg:hidden"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobile ? (
        <div className="border-t border-line bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link to="/" className="rounded-lg px-3 py-3 text-sm font-medium" onClick={() => setMobile(false)}>
              Home
            </Link>
            <Link to="/shop" className="rounded-lg px-3 py-3 text-sm font-medium" onClick={() => setMobile(false)}>
              Shop
            </Link>
            {groups.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="rounded-lg px-3 py-3 text-sm text-muted"
                onClick={() => setMobile(false)}
              >
                {c.label}
              </Link>
            ))}
            <Link to="/lookbook" className="rounded-lg px-3 py-3 text-sm font-medium" onClick={() => setMobile(false)}>
              Lookbook
            </Link>
            <Link to="/showrooms" className="rounded-lg px-3 py-3 text-sm font-medium" onClick={() => setMobile(false)}>
              Showrooms
            </Link>
            <Link to="/about" className="rounded-lg px-3 py-3 text-sm font-medium" onClick={() => setMobile(false)}>
              About
            </Link>
          </nav>
        </div>
      ) : null}

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
