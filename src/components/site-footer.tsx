import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PHONE } from "@/lib/catalog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-mustard font-display text-lg font-semibold text-ink">
              R
            </span>
            <span className="font-display text-xl font-semibold tracking-[0.16em] uppercase">RobertsKE</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Elevated living for every Nairobi home — curtains, floors, walls, and outdoor turf since 2019.
          </p>
          <div className="mt-4 flex gap-2 text-xs font-medium tracking-wide text-muted">
            <a href="https://www.instagram.com/roberts.co.ke/" className="hover:text-ink" target="_blank" rel="noreferrer">
              IG
            </a>
            <span>·</span>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-ink">
              Call
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/shop" className="hover:text-ink">
                All products
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "curtains" }} className="hover:text-ink">
                Curtains
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "flooring" }} className="hover:text-ink">
                Flooring
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "outdoor" }} className="hover:text-ink">
                Outdoor
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "wallpaper" }} className="hover:text-ink">
                Wallpaper
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Help</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/showrooms" className="hover:text-ink">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                Fit guarantee
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/about" className="hover:text-ink">
                About us
              </Link>
            </li>
            <li>
              <Link to="/lookbook" className="hover:text-ink">
                Our story
              </Link>
            </li>
            <li>
              <Link to="/showrooms" className="hover:text-ink">
                Showrooms
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ink">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="mt-3 text-sm text-muted">Updates on new arrivals and exclusive offers.</p>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes("@")) return;
              toast.success("You’re on the list.");
              setEmail("");
            }}
          >
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-mustard text-ink hover:bg-mustard-deep hover:text-cream"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-subtle sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2026 RobertsKE. All rights reserved.</p>
          <p className="tracking-wide">M-PESA · Visa · Pay on delivery</p>
        </div>
      </div>
    </footer>
  );
}
