import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as Phone, g as MapPin } from "../_libs/lucide-react.mjs";
import { S as showrooms, d as PHONE, f as WHATSAPP, o as Button } from "./router-BZNXqXZQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/showrooms-B7bJag-2.js
var import_jsx_runtime = require_jsx_runtime();
function ShowroomsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Visit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl sm:text-5xl",
				children: "Three Nairobi showrooms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Sample decks, curtain rails, turf rolls, and a measure desk. WhatsApp us for directions before you come."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: showrooms.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-surface p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-11 items-center justify-center rounded-full bg-mustard text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-medium tracking-wide text-mustard-deep uppercase",
							children: s.area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: s.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm",
							children: s.hours
						})
					]
				}, s.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap items-center gap-4 rounded-2xl bg-paper px-6 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-mustard-deep" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: ["Nairobi showrooms desk · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-medium",
							href: `tel:${PHONE.replace(/\s/g, "")}`,
							children: PHONE
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "WhatsApp for directions"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ShowroomsPage as component };
