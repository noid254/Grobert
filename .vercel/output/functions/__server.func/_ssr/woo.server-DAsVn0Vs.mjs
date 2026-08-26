//#region node_modules/.nitro/vite/services/ssr/assets/woo.server-DAsVn0Vs.js
var WC_BASE = "https://shop.roberts.co.ke/wp-json/wc/v3";
var WC_KEY = "ck_09b245f148dceb71269bc46d86da2cc0a8a8a3d6";
var WC_SECRET = "cs_54e14d323aa5c933dbc300af1321a5d4f696bff2";
var cache = null;
var TTL_MS = 3e5;
function authHeader() {
	return "Basic " + Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString("base64");
}
function stripHtml(html) {
	return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/&/gi, "&").replace(/"/gi, "\"").replace(/&#39;/gi, "'").replace(/</gi, "<").replace(/>/gi, ">").replace(/\s+/g, " ").trim();
}
function groupFrom(cats) {
	const slugs = new Set(cats.map((c) => c.slug));
	const has = (...keys) => keys.some((k) => slugs.has(k));
	if (has("grass-carpet", "grass-carpet-carpets-and-flooring", "garden-and-outdoor")) return {
		group: "outdoor",
		label: "Outdoor & Garden"
	};
	if (has("curtains-sheers", "curtain-rails")) return {
		group: "curtains",
		label: "Curtains & Rails"
	};
	if (has("3d-wall-panels", "3d-brick-foam-panel", "fluted-panel", "3d-foam-panels", "3d-wallpaper")) return {
		group: "panels",
		label: "3D Wall Panels"
	};
	if (has("self-adhesive-wallpaper", "glue-wallpaper", "contact-paper", "fluted-self-adhesive-wallpaper", "adhesive-contact-paper")) return {
		group: "wallpaper",
		label: "Wallpaper"
	};
	if (has("carpets-and-flooring", "area-rugs", "puzzle-mat", "puzzle-mats", "wall-to-wall-carpets", "woodgrain-cushion-vinyl", "pvc-honeycomb-perforated-mats")) return {
		group: "flooring",
		label: "Carpets & Flooring"
	};
	if (has("beddings")) return {
		group: "bedding",
		label: "Beddings"
	};
	if (has("laptop-desk", "home-organization")) return {
		group: "furnishings",
		label: "Living extras"
	};
	if (has("wall-decor-essentials")) return {
		group: "wallpaper",
		label: "Wall Decor"
	};
	return {
		group: "furnishings",
		label: cats[0]?.name ?? "Collection"
	};
}
function mapProduct(p, index) {
	if (p.status && p.status !== "publish") return null;
	if (p.catalog_visibility === "hidden") return null;
	const name = (p.name || "").trim();
	if (!name || name.toLowerCase() === "product") return null;
	const price = Number(p.price || p.sale_price || p.regular_price || 0);
	if (!Number.isFinite(price) || price <= 0) return null;
	const gallery = (p.images || []).map((i) => i.src).filter((src) => Boolean(src)).slice(0, 5);
	if (gallery.length === 0) return null;
	const regular = Number(p.regular_price || 0);
	const compareAt = regular > price + 20 ? regular : void 0;
	const pct = compareAt ? Math.round((1 - price / compareAt) * 100) : 0;
	const { group, label } = groupFrom(p.categories || []);
	const desc = stripHtml(p.short_description || p.description || "");
	return {
		id: p.id,
		slug: p.slug,
		name,
		group,
		categoryLabel: label,
		price,
		compareAt,
		onSale: Boolean(p.on_sale) && pct >= 5,
		badge: index < 10 ? "NEW" : pct >= 10 ? `-${pct}%` : void 0,
		image: gallery[0],
		hoverImage: gallery[1],
		gallery,
		description: desc.slice(0, 420),
		featured: Boolean(p.featured) || index < 10,
		stock: p.stock_status === "instock" ? "instock" : p.stock_status || "instock",
		permalink: p.permalink || ""
	};
}
async function fetchPage(page, perPage) {
	const url = `${WC_BASE}/products?per_page=${perPage}&page=${page}&status=publish`;
	const res = await fetch(url, { headers: {
		Authorization: authHeader(),
		Accept: "application/json"
	} });
	if (!res.ok) throw new Error(`Shop catalog unavailable (${res.status})`);
	return {
		total: Number(res.headers.get("X-WP-Total") || "0"),
		json: await res.json()
	};
}
async function loadCatalog() {
	if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
	const first = await fetchPage(1, 100);
	let raw = first.json;
	const pages = Math.max(1, Math.ceil((first.total || raw.length) / 100));
	if (pages > 1) {
		const rest = await Promise.all(Array.from({ length: pages - 1 }, (_, i) => fetchPage(i + 2, 100)));
		raw = raw.concat(...rest.map((r) => r.json));
	}
	const products = raw.map((p, i) => mapProduct(p, i)).filter((p) => Boolean(p));
	const data = {
		products,
		total: products.length,
		fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	cache = {
		at: Date.now(),
		data
	};
	return data;
}
//#endregion
export { loadCatalog };
