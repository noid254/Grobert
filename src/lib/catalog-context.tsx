import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CatalogPayload, Product } from "@/lib/catalog";

type CatalogContextValue = CatalogPayload & {
  quickView: Product | null;
  setQuickView: (p: Product | null) => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({
  catalog,
  children,
}: {
  catalog: CatalogPayload;
  children: ReactNode;
}) {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const value = useMemo(
    () => ({ ...catalog, quickView, setQuickView }),
    [catalog, quickView],
  );
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) {
    return {
      products: [],
      total: 0,
      fetchedAt: "",
      quickView: null,
      setQuickView: () => {},
    } satisfies CatalogContextValue;
  }
  return ctx;
}
