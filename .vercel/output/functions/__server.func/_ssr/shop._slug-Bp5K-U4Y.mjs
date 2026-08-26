import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, _ as Heart, d as Plus, p as Minus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useShop, f as WHATSAPP, i as useCatalog, l as cn, n as Route, o as Button, u as formatKes, y as relatedProducts } from "./router-BZNXqXZQ.mjs";
import { t as ProductCard } from "./product-card-B8aYWcui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._slug-Bp5K-U4Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const { products } = useCatalog();
	const product = products.find((p) => p.slug === slug);
	const add = useShop((s) => s.add);
	const toggleWish = useShop((s) => s.toggleWish);
	const remember = useShop((s) => s.remember);
	const wished = useShop((s) => product ? s.wishlist.includes(product.slug) : false);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (product) remember(product.slug);
		setActive(0);
		setQty(1);
	}, [product, remember]);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Piece not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "mt-4 inline-flex text-sm text-mustard-deep",
			children: "Back to shop"
		})]
	});
	const gallery = product.gallery.length ? product.gallery : [product.image];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-ink",
						children: "Shop"
					}),
					" ",
					"/ ",
					product.categoryLabel,
					" / ",
					product.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group overflow-hidden rounded-2xl bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: gallery[active],
						alt: product.name,
						className: "aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
					})
				}), gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-5 gap-2",
					children: gallery.slice(0, 5).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: cn("overflow-hidden rounded-lg", i === active ? "ring-2 ring-mustard" : "opacity-80 hover:opacity-100"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "aspect-square w-full object-cover"
						})
					}, src))
				}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-ink px-2 py-1 text-xs font-semibold tracking-wider text-cream uppercase",
						children: product.badge
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs tracking-wide text-subtle uppercase",
						children: product.categoryLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl sm:text-5xl",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-baseline gap-3 text-lg tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: formatKes(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle line-through",
							children: formatKes(product.compareAt)
						}) : null]
					}),
					product.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md leading-relaxed text-muted",
						children: product.description
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-medium tracking-wide text-mustard-deep uppercase",
						children: product.stock === "instock" ? "In stock · ships Nairobi" : "Ask on WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-12 items-center rounded-lg bg-surface shadow-[0_0_0_1px_var(--color-line)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "flex size-12 items-center justify-center",
										onClick: () => setQty((n) => Math.max(1, n - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "flex size-12 items-center justify-center",
										onClick: () => setQty((n) => n + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => {
									add(product, qty);
									toast.success("Added to bag", { description: product.name });
								},
								children: "Add to bag"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": "Wishlist",
								onClick: () => {
									toggleWish(product.slug);
									toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wished && "fill-sale text-sale") })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center gap-1 text-sm text-mustard-deep",
						children: ["Ask on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: relatedProducts(products, product.slug).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
