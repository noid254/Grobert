import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-api-BOhEpYxT.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchCatalog_createServerFn_handler = createServerRpc({
	id: "f715c9e53e1bcf99fb58ba5ce4b72ca2d1aefe66aa84173718558d28eb575844",
	name: "fetchCatalog",
	filename: "src/lib/shop-api.ts"
}, (opts) => fetchCatalog.__executeServer(opts));
var fetchCatalog = createServerFn({ method: "GET" }).handler(fetchCatalog_createServerFn_handler, async () => {
	const { loadCatalog } = await import("./woo.server-DAsVn0Vs.mjs");
	try {
		return await loadCatalog();
	} catch {
		return {
			products: [],
			total: 0,
			fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
});
var fetchProductBySlug_createServerFn_handler = createServerRpc({
	id: "524c3352ad29d80e88879c8eb27181ed299e4c86095f1cb3dea0dde8d77b71e6",
	name: "fetchProductBySlug",
	filename: "src/lib/shop-api.ts"
}, (opts) => fetchProductBySlug.__executeServer(opts));
var fetchProductBySlug = createServerFn({ method: "GET" }).validator(object({ slug: string() })).handler(fetchProductBySlug_createServerFn_handler, async ({ data }) => {
	const { loadCatalog } = await import("./woo.server-DAsVn0Vs.mjs");
	return (await loadCatalog()).products.find((p) => p.slug === data.slug) ?? null;
});
//#endregion
export { fetchCatalog_createServerFn_handler, fetchProductBySlug_createServerFn_handler };
