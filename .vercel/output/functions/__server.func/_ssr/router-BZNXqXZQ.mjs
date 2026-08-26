import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { S as ArrowRight, d as Plus, h as Menu, i as Trash2, l as Search, m as MessageCircle, p as Minus, r as TriangleAlert, s as ShoppingBag, t as X, x as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger, i as Root2, n as Item2, r as Portal2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-EYBf1iGv.js
var groups = [
	{
		slug: "wallpaper",
		label: "Wallpaper",
		blurb: "Self-adhesive, glue, marble contact paper, and textured walls."
	},
	{
		slug: "panels",
		label: "3D Wall Panels",
		blurb: "Sunburst, cube, brick, diamond, and fluted acoustic tiles."
	},
	{
		slug: "flooring",
		label: "Carpets & Flooring",
		blurb: "Vinyl mkeka wa mbao, wall-to-wall, rugs, and puzzle mats."
	},
	{
		slug: "outdoor",
		label: "Grass & Outdoor",
		blurb: "10–35mm UV turf for Nairobi balconies and gardens."
	},
	{
		slug: "bedding",
		label: "Beddings",
		blurb: "Duvet sets and quilted waterproof mattress protectors."
	},
	{
		slug: "curtains",
		label: "Curtains & Rails",
		blurb: "Bendable rails and double tracks, measured to your windows."
	},
	{
		slug: "furnishings",
		label: "Living extras",
		blurb: "Laptop desks and home organisation for compact rooms."
	}
];
var heroSlides = [
	{
		id: "01",
		kicker: "Live from the Nairobi showroom",
		title: "Own Your\nSignature Space",
		copy: "Wallpaper, turf, panels, and beddings — the pieces Nairobi homes keep coming back for.",
		image: "/images/hero-live.jpg",
		alt: "Woman in a mustard blazer in a RobertsKE living room",
		cta: "Shop the collection",
		kind: "shop"
	},
	{
		id: "02",
		kicker: "Walls that speak",
		title: "Peel, stick,\nlive with it",
		copy: "Self-adhesive florals, marble contact paper, and 3D panels from KSh 999 a roll.",
		image: "/images/hero-03.jpg",
		alt: "Mustard-toned Nairobi living room",
		cta: "Shop wallpaper",
		kind: "category",
		slug: "wallpaper"
	},
	{
		id: "03",
		kicker: "Barefoot comfort",
		title: "Grass that\nstays green",
		copy: "10 to 35mm UV-proof turf. Pay on delivery across Nairobi.",
		image: "/images/hero-04.jpg",
		alt: "Balcony with artificial grass carpet",
		cta: "Shop outdoor",
		kind: "category",
		slug: "outdoor"
	}
];
var mosaic = [
	{
		title: "Summer walls",
		copy: "Florals, geometrics, marble",
		slug: "wallpaper",
		image: "/images/cat-living.jpg",
		large: true
	},
	{
		title: "Soft sleep",
		copy: "Duvets & protectors",
		slug: "bedding",
		image: "/images/cat-soft.jpg"
	},
	{
		title: "Floors first",
		copy: "Mkeka, vinyl, rugs",
		slug: "flooring",
		image: "/images/cat-flooring.jpg"
	},
	{
		title: "Sculpted panels",
		copy: "3D walls that quiet a room",
		slug: "panels",
		image: "/images/prod-sunburst.jpg"
	},
	{
		title: "Outdoor turf",
		copy: "Balcony-ready grass",
		slug: "outdoor",
		image: "/images/cat-outdoor.jpg"
	}
];
var reviews = [
	{
		name: "Faith Mutua",
		place: "Karen, Nairobi",
		quote: "Balcony looks like a luxury resort now.",
		product: "UV-Proof Synthetic Grass Turf"
	},
	{
		name: "David Kiprono",
		place: "Runda Estate",
		quote: "Flawless double-fullness and blackout finish.",
		product: "Belgian Linen & Velvet Blackout Curtains"
	},
	{
		name: "Wanjiku Njoroge",
		place: "Kilimani",
		quote: "Sound dampening and a premium aesthetic in one.",
		product: "Acoustic 3D Fluted Oak Wall Panels"
	},
	{
		name: "Kevin Ochieng",
		place: "Kileleshwa",
		quote: "100% waterproof SPC flooring over old tiles.",
		product: "SPC Rigid Core Luxury Vinyl"
	}
];
var showrooms = [
	{
		name: "Nairobi CBD",
		blurb: "Full catalog wall, wallpaper rolls, and sample decks. Walk in for a quick consult.",
		hours: "Mon–Sat · 9:00–18:00",
		area: "Central Business District"
	},
	{
		name: "Westlands",
		blurb: "Curtain workshop and flooring samples. Book a measure from this desk.",
		hours: "Mon–Sat · 9:00–18:00",
		area: "Westlands"
	},
	{
		name: "Karen",
		blurb: "Outdoor turf, garden rugs, and large-format drapes. Parking on site.",
		hours: "Tue–Sat · 10:00–17:00",
		area: "Karen"
	}
];
var lookbook = [
	{
		title: "Sitting room, mustard hour",
		image: "/images/hero-03.jpg",
		place: "Lavington"
	},
	{
		title: "Balcony resort",
		image: "/images/hero-04.jpg",
		place: "Karen"
	},
	{
		title: "Sheer light",
		image: "/images/cat-living.jpg",
		place: "Kilimani"
	},
	{
		title: "Fluted oak study",
		image: "/images/prod-fluted.jpg",
		place: "Westlands"
	},
	{
		title: "Velvet reading chair",
		image: "/images/hero-02.jpg",
		place: "Runda"
	},
	{
		title: "Barefoot turf",
		image: "/images/cat-outdoor.jpg",
		place: "Kileleshwa"
	}
];
var promoCodes = {
	FIRST15: {
		label: "15% off your first order",
		pct: 15
	},
	ROBERTSFLOOR35: {
		label: "35% off carpets & flooring",
		pct: 35,
		groups: ["flooring", "outdoor"]
	},
	ROBERTSSOFT35: {
		label: "35% off soft furnishings",
		pct: 35,
		groups: [
			"furnishings",
			"curtains",
			"bedding"
		]
	},
	ROBERTSDECOR35: {
		label: "35% off wallpaper & decor",
		pct: 35,
		groups: ["wallpaper", "panels"]
	}
};
var WHATSAPP = "https://wa.me/254702356090?text=Hi%20RobertsKE%2C%20I%20would%20like%20to%20check%20availability%20or%20book%20a%20measure.";
var PHONE = "+254 702 356 090";
function relatedProducts(all, slug, limit = 4) {
	const current = all.find((p) => p.slug === slug);
	if (!current) return all.slice(0, limit);
	const same = all.filter((p) => p.slug !== slug && p.group === current.group);
	return (same.length >= limit ? same : all.filter((p) => p.slug !== slug)).slice(0, limit);
}
function pickCover(products, group, fallback) {
	return products.find((p) => p.group === group)?.image ?? fallback;
}
function shopTheLook(products, limit = 3) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const p of products) {
		if (seen.has(p.group)) continue;
		seen.add(p.group);
		out.push(p);
		if (out.length === limit) break;
	}
	return out.length ? out : products.slice(0, limit);
}
function liveLookbook(products) {
	const shots = products.filter((p) => p.image).slice(0, 12).map((p) => ({
		title: p.name,
		image: p.hoverImage || p.gallery[1] || p.image,
		place: p.categoryLabel,
		slug: p.slug
	}));
	if (shots.length >= 6) return shots;
	return lookbook.map((s) => ({
		...s,
		slug: void 0
	}));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Ci8fiZcX.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatKes(amount) {
	return new Intl.NumberFormat("en-KE", {
		style: "currency",
		currency: "KES",
		maximumFractionDigits: 0
	}).format(amount);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BZNXqXZQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var useShop = create()(persist((set, get) => ({
	cart: [],
	wishlist: [],
	recent: [],
	promo: null,
	firstOrderClaimed: false,
	add: (product, qty = 1) => {
		const cart = [...get().cart];
		const idx = cart.findIndex((i) => i.slug === product.slug);
		if (idx >= 0) cart[idx] = {
			...cart[idx],
			qty: cart[idx].qty + qty
		};
		else cart.push({
			slug: product.slug,
			qty,
			name: product.name,
			price: product.price,
			image: product.image,
			group: product.group
		});
		set({ cart });
	},
	remove: (slug) => set({ cart: get().cart.filter((i) => i.slug !== slug) }),
	setQty: (slug, qty) => {
		if (qty <= 0) set({ cart: get().cart.filter((i) => i.slug !== slug) });
		else set({ cart: get().cart.map((i) => i.slug === slug ? {
			...i,
			qty
		} : i) });
	},
	toggleWish: (slug) => {
		set({ wishlist: get().wishlist.includes(slug) ? get().wishlist.filter((s) => s !== slug) : [...get().wishlist, slug] });
	},
	remember: (slug) => {
		set({ recent: [slug, ...get().recent.filter((s) => s !== slug)].slice(0, 8) });
	},
	setPromo: (code) => set({ promo: code }),
	claimFirstOrder: () => set({
		firstOrderClaimed: true,
		promo: get().promo ?? "FIRST15"
	}),
	clear: () => set({
		cart: [],
		promo: null
	})
}), {
	name: "robertske-shop",
	skipHydration: true
}));
function cartCount(cart) {
	return cart.reduce((n, i) => n + i.qty, 0);
}
function cartTotals(cart, promo) {
	const subtotal = cart.reduce((n, i) => n + i.price * i.qty, 0);
	const code = promo ? promoCodes[promo] : void 0;
	let discount = 0;
	if (code) {
		if (!code.groups) discount = Math.round(subtotal * (code.pct / 100));
		else discount = cart.reduce((n, i) => {
			if (!code.groups?.includes(i.group)) return n;
			return n + Math.round(i.price * i.qty * (code.pct / 100));
		}, 0);
	}
	return {
		subtotal,
		discount,
		total: Math.max(0, subtotal - discount),
		code
	};
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard", {
	variants: {
		variant: {
			primary: "bg-mustard text-ink hover:bg-mustard-deep hover:text-cream",
			ink: "bg-ink text-cream hover:bg-mustard-dark",
			ghost: "bg-transparent text-ink hover:bg-paper",
			outline: "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-line)] hover:bg-paper",
			sale: "bg-sale text-cream hover:bg-ink"
		},
		size: {
			sm: "h-9 px-3.5 text-xs tracking-wide rounded-md",
			md: "h-11 px-5 text-sm rounded-lg",
			lg: "h-12 px-6 text-sm tracking-wide rounded-lg",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-lg bg-surface px-3.5 text-sm text-ink placeholder:text-subtle", "shadow-[0_0_0_1px_var(--color-line)] outline-none transition-shadow duration-150", "focus-visible:shadow-[0_0_0_2px_var(--color-mustard)]", className),
		...props
	});
}
function CartDrawer({ open, onOpenChange }) {
	const cart = useShop((s) => s.cart);
	const promo = useShop((s) => s.promo);
	const setQty = useShop((s) => s.setQty);
	const remove = useShop((s) => s.remove);
	const setPromo = useShop((s) => s.setPromo);
	const { subtotal, discount, total, code } = cartTotals(cart, promo);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	function apply() {
		const key = draft.trim().toUpperCase();
		if (!key || !promoCodes[key]) {
			setErr("That code isn’t valid.");
			return;
		}
		setPromo(key);
		setErr("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-[fade-up_200ms_ease-out]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream text-ink shadow-[-16px_0_40px_-24px_rgba(31,24,12,0.35)] focus:outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "font-display text-2xl",
						children: ["Bag · ", cartCount(cart)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "flex size-11 items-center justify-center rounded-full hover:bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-5 py-4",
					children: cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col items-center justify-center gap-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-8 text-subtle" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Your bag is empty."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Shop the collection" })
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: cart.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop/$slug",
								params: { slug: item.slug },
								onClick: () => onOpenChange(false),
								className: "size-24 shrink-0 overflow-hidden rounded-lg bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm tabular-nums text-muted",
										children: formatKes(item.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex h-9 items-center rounded-md bg-surface shadow-[0_0_0_1px_var(--color-line)]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "flex size-9 items-center justify-center",
													onClick: () => setQty(item.slug, item.qty - 1),
													"aria-label": "Decrease",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-6 text-center text-sm tabular-nums",
													children: item.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "flex size-9 items-center justify-center",
													onClick: () => setQty(item.slug, item.qty + 1),
													"aria-label": "Increase",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "flex size-9 items-center justify-center rounded-md text-muted hover:text-sale",
											onClick: () => remove(item.slug),
											"aria-label": "Remove",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
										})]
									})
								]
							})]
						}, item.slug))
					})
				}),
				cart.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-line px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Promo code",
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								onKeyDown: (e) => e.key === "Enter" && apply()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: apply,
								children: "Apply"
							})]
						}),
						err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sale",
							children: err
						}) : null,
						code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-mustard-deep",
							children: [code.label, " applied."]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatKes(subtotal)
							})]
						}),
						discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm text-mustard-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: ["−", formatKes(discount)]
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatKes(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								size: "lg",
								children: "Checkout on WhatsApp"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								className: "block text-center text-xs text-muted underline-offset-4 hover:underline",
								children: "View full bag"
							})
						})
					]
				}) : null
			]
		})] })
	});
}
var CatalogContext = (0, import_react.createContext)(null);
function CatalogProvider({ catalog, children }) {
	const [quickView, setQuickView] = (0, import_react.useState)(null);
	const value = (0, import_react.useMemo)(() => ({
		...catalog,
		quickView,
		setQuickView
	}), [catalog, quickView]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogContext.Provider, {
		value,
		children
	});
}
function useCatalog() {
	const ctx = (0, import_react.useContext)(CatalogContext);
	if (!ctx) return {
		products: [],
		total: 0,
		fetchedAt: "",
		quickView: null,
		setQuickView: () => {}
	};
	return ctx;
}
function SearchDialog({ open, onOpenChange }) {
	const { products } = useCatalog();
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		if (!needle) return products.slice(0, 6);
		return products.filter((p) => p.name.toLowerCase().includes(needle) || p.categoryLabel.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle)).slice(0, 8);
	}, [q, products]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) setQ("");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-[12vh] left-1/2 z-50 w-[min(640px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl bg-cream p-5 shadow-card focus:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: "Search the catalog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						placeholder: "Search turf, wallpaper, duvets…",
						value: q,
						onChange: (e) => setQ(e.target.value),
						className: "border-0 shadow-none focus-visible:shadow-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 max-h-[50vh] space-y-1 overflow-y-auto",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-2 py-6 text-center text-sm text-muted",
					children: "No matches."
				}) : results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop/$slug",
					params: { slug: p.slug },
					onClick: () => onOpenChange(false),
					className: "flex items-center gap-3 rounded-xl p-2 hover:bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: "",
						className: "size-14 rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted tabular-nums",
							children: formatKes(p.price)
						})]
					})]
				}) }, p.slug))
			})]
		})] })
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 items-center justify-center rounded-md bg-mustard font-display text-lg font-semibold text-ink",
			children: "R"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-semibold tracking-[0.18em] text-ink uppercase",
			children: "RobertsKE"
		})]
	});
}
var pagesLinks = [
	{
		to: "/about",
		label: "About us"
	},
	{
		to: "/showrooms",
		label: "Showrooms"
	},
	{
		to: "/lookbook",
		label: "Lookbook"
	}
];
var ANNOUNCE = [
	"Pay on delivery across Nairobi",
	"FIRST15 — 15% off your first order",
	"Laser-measured curtains · 100% fit"
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const count = useShop((s) => cartCount(s.cart));
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [mobile, setMobile] = (0, import_react.useState)(false);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNote((n) => (n + 1) % ANNOUNCE.length), 4200);
		return () => window.clearInterval(id);
	}, []);
	const badge = hydrated ? count : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-mustard text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium tracking-wide sm:px-6",
					children: ANNOUNCE[note]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: cn("text-sm font-medium transition-colors hover:text-ink", pathname === "/" ? "text-ink" : "text-muted"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("border-b-2 pb-0.5", pathname === "/" ? "border-mustard" : "border-transparent"),
									children: "Home"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: cn("text-sm font-medium transition-colors hover:text-ink", pathname.startsWith("/shop") ? "text-ink" : "text-muted"),
								children: "Shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
								className: "inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink",
								children: ["Categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
								align: "start",
								className: "z-50 min-w-56 rounded-xl bg-surface p-2 shadow-card",
								children: groups.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/category/$slug",
										params: { slug: c.slug },
										className: "block rounded-lg px-3 py-2 text-sm text-ink outline-none hover:bg-paper",
										children: c.label
									})
								}, c.slug))
							}) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "text-sm font-medium text-muted hover:text-ink",
								children: "New In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lookbook",
								className: "text-sm font-medium text-muted hover:text-ink",
								children: "Lookbook"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
								className: "inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink",
								children: ["Pages ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
								align: "start",
								className: "z-50 min-w-44 rounded-xl bg-surface p-2 shadow-card",
								children: pagesLinks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: p.to,
										className: "block rounded-lg px-3 py-2 text-sm text-ink outline-none hover:bg-paper",
										children: p.label
									})
								}, p.to))
							}) })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Search",
								className: "flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper",
								onClick: () => setSearchOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "WhatsApp consult",
								className: "hidden size-11 items-center justify-center rounded-full text-ink hover:bg-paper sm:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": "Open bag",
								className: "relative flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper",
								onClick: () => setCartOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-1 right-1 flex size-5 items-center justify-center rounded-full bg-sale text-xs font-semibold leading-none text-cream tabular-nums",
									children: badge
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Menu",
								className: "flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper lg:hidden",
								onClick: () => setMobile((v) => !v),
								children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line bg-cream px-4 py-4 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-lg px-3 py-3 text-sm font-medium",
							onClick: () => setMobile(false),
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "rounded-lg px-3 py-3 text-sm font-medium",
							onClick: () => setMobile(false),
							children: "Shop"
						}),
						groups.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							className: "rounded-lg px-3 py-3 text-sm text-muted",
							onClick: () => setMobile(false),
							children: c.label
						}, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lookbook",
							className: "rounded-lg px-3 py-3 text-sm font-medium",
							onClick: () => setMobile(false),
							children: "Lookbook"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/showrooms",
							className: "rounded-lg px-3 py-3 text-sm font-medium",
							onClick: () => setMobile(false),
							children: "Showrooms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-lg px-3 py-3 text-sm font-medium",
							onClick: () => setMobile(false),
							children: "About"
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
				open: cartOpen,
				onOpenChange: setCartOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
				open: searchOpen,
				onOpenChange: setSearchOpen
			})
		]
	});
}
function SiteFooter() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 items-center justify-center rounded-md bg-mustard font-display text-lg font-semibold text-ink",
								children: "R"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold tracking-[0.16em] uppercase",
								children: "RobertsKE"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
							children: "Elevated living for every Nairobi home — curtains, floors, walls, and outdoor turf since 2019."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2 text-xs font-medium tracking-wide text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/roberts.co.ke/",
									className: "hover:text-ink",
									target: "_blank",
									rel: "noreferrer",
									children: "IG"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE.replace(/\s/g, "")}`,
									className: "hover:text-ink",
									children: "Call"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-ink",
							children: "All products"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "curtains" },
							className: "hover:text-ink",
							children: "Curtains"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "flooring" },
							className: "hover:text-ink",
							children: "Flooring"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "outdoor" },
							className: "hover:text-ink",
							children: "Outdoor"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "wallpaper" },
							className: "hover:text-ink",
							children: "Wallpaper"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "Help"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/showrooms",
							className: "hover:text-ink",
							children: "Contact us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "Fit guarantee"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "Shipping"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "FAQs"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "About us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lookbook",
							className: "hover:text-ink",
							children: "Our story"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/showrooms",
							className: "hover:text-ink",
							children: "Showrooms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "Privacy"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Updates on new arrivals and exclusive offers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							if (!email.includes("@")) return;
							toast.success("You’re on the list.");
							setEmail("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							required: true,
							placeholder: "Enter your email",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							"aria-label": "Subscribe",
							className: "flex size-11 shrink-0 items-center justify-center rounded-lg bg-mustard text-ink hover:bg-mustard-deep hover:text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-subtle sm:flex-row sm:items-center sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 RobertsKE. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tracking-wide",
					children: "M-PESA · Visa · Pay on delivery"
				})]
			})
		})]
	});
}
function QuickView() {
	const { quickView, setQuickView } = useCatalog();
	const add = useShop((s) => s.add);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(quickView),
		onOpenChange: (o) => !o && setQuickView(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/45" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-1/2 left-1/2 z-50 w-[min(720px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-cream shadow-card focus:outline-none",
			children: [quickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: quickView.image,
					alt: quickView.name,
					className: "aspect-square w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-2xl leading-tight",
							children: quickView.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs tracking-wide text-subtle uppercase",
							children: quickView.categoryLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg font-medium tabular-nums",
							children: formatKes(quickView.price)
						}),
						quickView.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 line-clamp-5 text-sm leading-relaxed text-muted",
							children: quickView.description
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-2 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => {
									add(quickView, 1);
									toast.success("Added to bag");
									setQuickView(null);
								},
								children: "Add to bag"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop/$slug",
									params: { slug: quickView.slug },
									className: "text-center text-sm text-mustard-deep",
									children: "View full details"
								})
							})]
						})
					]
				})]
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				className: "absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-surface/90 text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		})] })
	});
}
function SiteShell({ children }) {
	(0, import_react.useEffect)(() => {
		useShop.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickView, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: WHATSAPP,
				target: "_blank",
				rel: "noreferrer",
				className: "fixed bottom-5 left-5 z-40 inline-flex size-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-cream shadow-card transition-transform duration-150 hover:bg-mustard-dark active:scale-[0.96] sm:h-12 sm:w-auto sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Chat to buy"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				toastOptions: {
					className: "font-sans",
					style: {
						background: "var(--color-ink)",
						color: "var(--color-cream)",
						border: "1px solid var(--color-mustard-dark)"
					}
				}
			})
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchCatalog = createServerFn({ method: "GET" }).handler(createSsrRpc("f715c9e53e1bcf99fb58ba5ce4b72ca2d1aefe66aa84173718558d28eb575844"));
createServerFn({ method: "GET" }).validator(object({ slug: string() })).handler(createSsrRpc("524c3352ad29d80e88879c8eb27181ed299e4c86095f1cb3dea0dde8d77b71e6"));
var styles_default = "/assets/styles-MEd7PuKh.css";
var APP_NAME = "RobertsKE";
var Route$9 = createRootRoute({
	loader: () => fetchCatalog(),
	staleTime: 6e4,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "RobertsKE — elevating everyday living in Nairobi. Curtains, flooring, wallpaper, 3D panels, and outdoor grass carpet."
			},
			{
				name: "theme-color",
				content: "#C9A227"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	const catalog = Route$9.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogProvider, {
				catalog,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-EDYxRS5j.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about-CW0s1FRO.mjs");
var Route$7 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./cart-C23jTecu.mjs");
var Route$6 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./lookbook-e9kCyA9L.mjs");
var Route$5 = createFileRoute("/lookbook")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./shop-BZjx1HCz.mjs");
var Route$4 = createFileRoute("/shop")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./showrooms-B7bJag-2.mjs");
var Route$3 = createFileRoute("/showrooms")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./category._slug-v-z_yeQE.mjs");
var Route$2 = createFileRoute("/category/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./shop.index-D6KHLNkU.mjs");
var Route$1 = createFileRoute("/shop/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./shop._slug-Bp5K-U4Y.mjs");
var Route = createFileRoute("/shop/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var CartRoute = Route$6.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$9
});
var LookbookRoute = Route$5.update({
	id: "/lookbook",
	path: "/lookbook",
	getParentRoute: () => Route$9
});
var ShopRoute = Route$4.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$9
});
var ShowroomsRoute = Route$3.update({
	id: "/showrooms",
	path: "/showrooms",
	getParentRoute: () => Route$9
});
var CategorySlugRoute = Route$2.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$9
});
var ShopIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ShopRoute
});
var ShopRouteChildren = {
	ShopSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ShopRoute
	}),
	ShopIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	LookbookRoute,
	ShopRoute: ShopRoute._addFileChildren(ShopRouteChildren),
	ShowroomsRoute,
	CategorySlugRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { showrooms as S, pickCover as _, Input as a, reviews as b, useShop as c, PHONE as d, WHATSAPP as f, mosaic as g, liveLookbook as h, useCatalog as i, cn as l, heroSlides as m, Route as n, Button as o, groups as p, Route$2 as r, cartTotals as s, router_exports as t, formatKes as u, promoCodes as v, shopTheLook as x, relatedProducts as y };
