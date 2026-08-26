import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as liveLookbook, i as useCatalog } from "./router-BZNXqXZQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lookbook-e9kCyA9L.js
var import_jsx_runtime = require_jsx_runtime();
function LookbookPage() {
	const { products } = useCatalog();
	const shots = liveLookbook(products);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Lookbook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl sm:text-5xl",
				children: "Rooms we made"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Live pieces from the Nairobi showroom — tap a frame to take it home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3",
				children: shots.map((shot) => {
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.image,
						alt: shot.title,
						className: "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 font-display text-xl",
							children: shot.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: shot.place
						})]
					})] });
					return shot.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug",
						params: { slug: shot.slug },
						className: "group mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-paper",
						children: inner
					}, shot.title) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "group mb-4 block break-inside-avoid overflow-hidden rounded-2xl bg-paper",
						children: inner
					}, shot.title);
				})
			})
		]
	});
}
//#endregion
export { LookbookPage as component };
