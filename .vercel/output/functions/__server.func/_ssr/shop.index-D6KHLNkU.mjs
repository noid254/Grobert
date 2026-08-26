import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as WHATSAPP, i as useCatalog, l as cn, p as groups } from "./router-BZNXqXZQ.mjs";
import { t as ProductCard } from "./product-card-B8aYWcui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop.index-D6KHLNkU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { products, total } = useCatalog();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const items = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return products.filter((p) => {
			if (filter !== "all" && p.group !== filter) return false;
			if (!needle) return true;
			return p.name.toLowerCase().includes(needle) || p.categoryLabel.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle);
		});
	}, [
		products,
		filter,
		q
	]);
	const countFor = (slug) => products.filter((p) => p.group === slug).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Live catalog"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl sm:text-5xl",
				children: "Shop the collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: [total, " pieces from the Nairobi showroom — wallpaper, turf, panels, beddings, and more."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Filter by name…",
				className: "mt-6 h-11 w-full max-w-md rounded-lg bg-surface px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-subtle focus-visible:shadow-[0_0_0_2px_var(--color-mustard)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFilter("all"),
					className: cn("h-10 rounded-full px-4 text-sm", filter === "all" ? "bg-mustard text-ink" : "bg-surface text-muted shadow-[0_0_0_1px_var(--color-line)]"),
					children: ["All · ", products.length]
				}), groups.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFilter(f.slug),
					className: cn("h-10 rounded-full px-4 text-sm", filter === f.slug ? "bg-mustard text-ink" : "bg-surface text-muted shadow-[0_0_0_1px_var(--color-line)]"),
					children: [
						f.label,
						" · ",
						countFor(f.slug)
					]
				}, f.slug))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-subtle tabular-nums",
				children: [items.length, " pieces"]
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-2xl bg-surface px-6 py-16 text-center shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Nothing matches that"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Try another word, or ping us on WhatsApp for a recommendation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-block text-sm text-mustard-deep",
						children: "Chat to buy"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4",
				children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					eager: i < 8
				}, p.slug))
			})
		]
	});
}
//#endregion
export { ShopPage as component };
