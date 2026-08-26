import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as reviews } from "./router-BZNXqXZQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CW0s1FRO.js
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "Do you measure and install?",
		a: "Yes. Nairobi homes get professional measure, laser alignment, and install — curtains, flooring, panels, and turf. 100% fit guarantee."
	},
	{
		q: "Can I pay on delivery?",
		a: "Pay on delivery is available across Nairobi. Countrywide we parcel to your door; M-PESA and cards are accepted."
	},
	{
		q: "Are the wallpapers renter-friendly?",
		a: "Our self-adhesive rolls peel clean. Tenants in Kilimani and Kileleshwa restyle walls without losing a deposit."
	},
	{
		q: "How do promo codes work?",
		a: "FIRST15 is 15% off your first order. ROBERTSFLOOR35, ROBERTSSOFT35, and ROBERTSDECOR35 take 35% off those collections."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Since 2019"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-3xl font-display text-4xl sm:text-6xl",
				children: "Elevating everyday living in Nairobi homes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
				children: "RobertsKE curates indoor and outdoor pieces for beauty and comfort — Belgian linen, acoustic oak, waterproof SPC, and UV-proof turf. Three showrooms, a fitting desk, and a WhatsApp line that actually answers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 overflow-hidden rounded-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-03.jpg",
					alt: "Mustard-toned Nairobi living room",
					className: "aspect-21/9 w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-2xl bg-surface p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl leading-snug",
						children: [
							"“",
							r.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-4 text-sm text-muted",
						children: [
							r.name,
							" · ",
							r.place,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs",
								children: r.product
							})
						]
					})]
				}, r.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "FAQs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 divide-y divide-line",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-medium",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: f.a
						})]
					}, f.q))
				})]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
