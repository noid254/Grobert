import { createFileRoute, Link } from "@tanstack/react-router";
import { liveLookbook } from "@/lib/catalog";
import { useCatalog } from "@/lib/catalog-context";

export const Route = createFileRoute("/lookbook")({ component: LookbookPage });

function LookbookPage() {
  const { products } = useCatalog();
  const shots = liveLookbook(products);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Lookbook</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Rooms we made</h1>
      <p className="mt-3 max-w-xl text-muted">
        Live pieces from the Nairobi showroom — tap a frame to take it home.
      </p>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shots.map((shot) => {
          const inner = (
            <>
              <img
                src={shot.image}
                alt={shot.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="px-4 py-3">
                <p className="line-clamp-2 font-display text-xl">{shot.title}</p>
                <p className="text-xs text-muted">{shot.place}</p>
              </div>
            </>
          );
          return shot.slug ? (
            <Link
              key={shot.title}
              to="/shop/$slug"
              params={{ slug: shot.slug }}
              className="group mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-paper"
            >
              {inner}
            </Link>
          ) : (
            <Link
              key={shot.title}
              to="/shop"
              className="group mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-paper"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
