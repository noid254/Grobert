import { createFileRoute } from "@tanstack/react-router";
import { reviews } from "@/lib/catalog";

export const Route = createFileRoute("/about")({ component: AboutPage });

const faqs = [
  {
    q: "Do you measure and install?",
    a: "Yes. Nairobi homes get professional measure, laser alignment, and install — curtains, flooring, panels, and turf. 100% fit guarantee.",
  },
  {
    q: "Can I pay on delivery?",
    a: "Pay on delivery is available across Nairobi. Countrywide we parcel to your door; M-PESA and cards are accepted.",
  },
  {
    q: "Are the wallpapers renter-friendly?",
    a: "Our self-adhesive rolls peel clean. Tenants in Kilimani and Kileleshwa restyle walls without losing a deposit.",
  },
  {
    q: "How do promo codes work?",
    a: "FIRST15 is 15% off your first order. ROBERTSFLOOR35, ROBERTSSOFT35, and ROBERTSDECOR35 take 35% off those collections.",
  },
];

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase">Since 2019</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl sm:text-6xl">Elevating everyday living in Nairobi homes.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        RobertsKE curates indoor and outdoor pieces for beauty and comfort — Belgian linen, acoustic oak, waterproof SPC,
        and UV-proof turf. Three showrooms, a fitting desk, and a WhatsApp line that actually answers.
      </p>
      <div className="mt-10 overflow-hidden rounded-3xl">
        <img src="/images/hero-03.jpg" alt="Mustard-toned Nairobi living room" className="aspect-21/9 w-full object-cover" />
      </div>
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <blockquote key={r.name} className="rounded-2xl bg-surface p-6 shadow-card">
            <p className="font-display text-2xl leading-snug">“{r.quote}”</p>
            <footer className="mt-4 text-sm text-muted">
              {r.name} · {r.place}
              <span className="mt-1 block text-xs">{r.product}</span>
            </footer>
          </blockquote>
        ))}
      </section>
      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-3xl">FAQs</h2>
        <dl className="mt-6 divide-y divide-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
