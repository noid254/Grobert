import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { PHONE, showrooms, WHATSAPP } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/showrooms")({ component: ShowroomsPage });

function ShowroomsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Visit</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Three Nairobi showrooms</h1>
      <p className="mt-3 max-w-xl text-muted">
        Sample decks, curtain rails, turf rolls, and a measure desk. WhatsApp us for directions before you come.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {showrooms.map((s) => (
          <article key={s.name} className="rounded-2xl bg-surface p-6 shadow-card">
            <div className="flex size-11 items-center justify-center rounded-full bg-mustard text-ink">
              <MapPin className="size-5" />
            </div>
            <h2 className="mt-4 font-display text-2xl">{s.name}</h2>
            <p className="mt-1 text-xs font-medium tracking-wide text-mustard-deep uppercase">{s.area}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
            <p className="mt-4 text-sm">{s.hours}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl bg-paper px-6 py-6">
        <Phone className="size-5 text-mustard-deep" />
        <p className="text-sm">
          Nairobi showrooms desk · <a className="font-medium" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer">
          <Button size="sm">WhatsApp for directions</Button>
        </a>
      </div>
    </main>
  );
}
