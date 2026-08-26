import type { ReactNode } from "react";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuickView } from "@/components/quick-view";
import { Toaster } from "sonner";
import { useShop } from "@/lib/store";
import { WHATSAPP } from "@/lib/catalog";

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    void useShop.persist.rehydrate();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-cream text-ink">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <QuickView />
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-40 inline-flex size-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-cream shadow-card transition-transform duration-150 hover:bg-mustard-dark active:scale-[0.96] sm:h-12 sm:w-auto sm:px-4"
      >
        <MessageCircle className="size-4" />
        <span className="hidden sm:inline">Chat to buy</span>
      </a>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "font-sans",
          style: {
            background: "var(--color-ink)",
            color: "var(--color-cream)",
            border: "1px solid var(--color-mustard-dark)",
          },
        }}
      />
    </div>
  );
}
