import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Heart, d as Plus, y as Eye } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useShop, i as useCatalog, l as cn, u as formatKes } from "./router-BZNXqXZQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-B8aYWcui.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, eager }) {
	const wished = useShop((s) => s.wishlist.includes(product.slug));
	const toggleWish = useShop((s) => s.toggleWish);
	const add = useShop((s) => s.add);
	const { setQuickView } = useCatalog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/shop/$slug",
			params: { slug: product.slug },
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-xl bg-paper shadow-card transition-[box-shadow,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-card-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						loading: eager ? "eager" : "lazy",
						decoding: "async",
						className: "aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
					}),
					product.hoverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.hoverImage,
						alt: "",
						loading: "lazy",
						className: "absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
					}) : null,
					product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute top-3 left-3 rounded-md px-2 py-1 text-xs font-semibold tracking-wider uppercase", product.badge === "NEW" ? "bg-ink text-cream" : "bg-sale text-cream"),
						children: product.badge
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-3 flex translate-y-2 gap-2 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-mustard text-xs font-semibold tracking-wide text-ink uppercase hover:bg-mustard-deep hover:text-cream",
							onClick: (e) => {
								e.preventDefault();
								add(product, 1);
								toast.success("Added to bag", { description: product.name });
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), " Add"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Quick look",
							className: "flex size-10 items-center justify-center rounded-lg bg-surface text-ink",
							onClick: (e) => {
								e.preventDefault();
								setQuickView(product);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-0.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle uppercase",
						children: product.categoryLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "line-clamp-2 text-sm font-medium text-ink",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-baseline gap-2 text-sm tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: formatKes(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle line-through",
							children: formatKes(product.compareAt)
						}) : null]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
			onClick: (e) => {
				e.preventDefault();
				toggleWish(product.slug);
				toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
			},
			className: "absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-surface/90 text-ink shadow-card backdrop-blur-sm transition-colors hover:bg-mustard",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wished && "fill-sale text-sale") })
		})]
	});
}
//#endregion
export { ProductCard as t };
