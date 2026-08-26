import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, a as Star, b as Clock3, c as ShieldCheck, n as Truck, o as Sparkles, s as ShoppingBag, u as RefreshCcw, v as Headphones } from "../_libs/lucide-react.mjs";
import { _ as pickCover, b as reviews, c as useShop, g as mosaic, i as useCatalog, l as cn, m as heroSlides, o as Button, u as formatKes, x as shopTheLook } from "./router-BZNXqXZQ.mjs";
import { t as ProductCard } from "./product-card-B8aYWcui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-EDYxRS5j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var trust = [
	{
		icon: Truck,
		title: "Pay on Delivery",
		copy: "Across Nairobi"
	},
	{
		icon: RefreshCcw,
		title: "100% Fit Guarantee",
		copy: "Laser measured"
	},
	{
		icon: ShieldCheck,
		title: "Secure Payments",
		copy: "M-PESA & cards"
	},
	{
		icon: Headphones,
		title: "WhatsApp Support",
		copy: "We’re here to help"
	}
];
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "wallpaper",
		label: "Walls"
	},
	{
		id: "flooring",
		label: "Floors"
	},
	{
		id: "outdoor",
		label: "Outdoor"
	},
	{
		id: "bedding",
		label: "Bedding"
	}
];
function HomePage() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	const current = heroSlides[slide] ?? heroSlides[0];
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setSlide((s) => (s + 1) % heroSlides.length);
		}, 8e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			slide,
			setSlide,
			current
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustRow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogMarquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JustIn, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryMosaic, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewArrivals, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LovedInNairobi, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustRow, { compact: true })
	] });
}
function Hero({ slide, setSlide, current }) {
	const { products, total } = useCatalog();
	const from = products.reduce((min, p) => Math.min(min, p.price), Infinity);
	const fromLabel = Number.isFinite(from) ? formatKes(from) : "KSh 250";
	const look = shopTheLook(products, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[58vh] lg:min-h-[78vh]",
			children: [
				heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.alt,
					className: cn("absolute inset-0 size-full object-cover object-right transition-opacity duration-700 lg:object-center", i === slide ? "opacity-100" : "opacity-0")
				}, s.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-ink/80 via-ink/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-ink/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-4 py-12 sm:px-6 lg:min-h-[78vh] lg:justify-center lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in max-w-xl text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.22em] text-mustard uppercase",
								children: current.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-5xl leading-[0.95] font-medium tracking-tight sm:text-6xl lg:text-7xl",
								children: current.title.split("\n").map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: line
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-base leading-relaxed text-cream/80",
								children: current.copy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-center gap-3",
								children: [current.kind === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "uppercase tracking-wide",
										children: [
											current.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										]
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/category/$slug",
									params: { slug: current.slug },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "uppercase tracking-wide",
										children: [
											current.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-cream/80",
									children: [
										total || products.length,
										" live pieces · from ",
										fromLabel
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex -space-x-2",
									children: products.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: "",
										className: "size-8 rounded-full object-cover ring-2 ring-ink/40"
									}, p.slug))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "680+ Nairobi homes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-xs text-cream/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-mustard text-mustard" }, i))
									}), "4.9"]
								})] })]
							})
						]
					})
				}),
				look.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-6 bottom-10 z-10 hidden w-72 flex-col gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-cream/80 uppercase",
						children: "Shop this look"
					}), look.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop/$slug",
						params: { slug: p.slug },
						className: "flex items-center gap-3 rounded-xl bg-surface/95 p-2 shadow-card backdrop-blur-sm transition-transform duration-150 hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "size-14 rounded-lg object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-ink",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted tabular-nums",
								children: formatKes(p.price)
							})]
						})]
					}, p.slug))]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-6 right-6 z-10 hidden flex-col gap-3 lg:flex",
					children: heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSlide(i),
						className: cn("text-xs tabular-nums tracking-widest", i === slide ? "font-semibold text-cream" : "text-cream/50 hover:text-cream"),
						children: [s.id, i === slide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 block h-px w-6 bg-mustard" }) : null]
					}, s.id))
				})
			]
		})
	});
}
function TrustRow({ compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("px-4 sm:px-6 lg:px-8", compact ? "py-6" : "-mt-6 pb-6"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-2xl bg-surface px-3 py-4 shadow-card sm:grid-cols-4 sm:px-6",
			children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 px-2 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-5 shrink-0 text-mustard-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: t.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t.copy
				})] })]
			}, t.title))
		})
	});
}
function CatalogMarquee() {
	const { products } = useCatalog();
	const names = products.slice(0, 22).map((p) => p.name);
	if (names.length < 6) return null;
	const loop = [...names, ...names];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-line bg-paper py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track items-center gap-8 px-4",
			children: loop.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8 text-mustard-dark",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg whitespace-nowrap italic",
					children: n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-mustard" })]
			}, `${n}-${i}`))
		})
	});
}
function JustIn() {
	const { products } = useCatalog();
	const row = products.slice(0, 12);
	if (row.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCatalog, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Just in"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Tap, look, take home"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "hidden text-sm text-mustard-deep sm:inline",
				children: "See all"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3",
			children: row.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-44 shrink-0 snap-start sm:w-52",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					eager: i < 4
				})
			}, p.slug))
		})]
	});
}
function EmptyCatalog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-16 text-center sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl",
			children: "The showroom is restocking"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "WhatsApp us and we’ll send today’s available pieces."
		})]
	});
}
function CategoryMosaic() {
	const { products } = useCatalog();
	const large = mosaic[0];
	const rest = mosaic.slice(1);
	const countFor = (slug) => products.filter((p) => p.group === slug).length;
	if (!large) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 md:grid-cols-3 md:grid-rows-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/category/$slug",
				params: { slug: large.slug },
				className: "group relative min-h-[340px] overflow-hidden rounded-2xl md:row-span-2 md:min-h-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pickCover(products, large.slug, large.image),
						alt: large.title,
						className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink/55 via-ink/10 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 left-6 text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl",
								children: large.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-cream/80",
								children: [large.copy, countFor(large.slug) ? ` · ${countFor(large.slug)} pieces` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase",
								children: ["Shop now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
							})
						]
					})
				]
			}), rest.map((tile, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/category/$slug",
				params: { slug: tile.slug },
				className: cn("group grid grid-cols-2 items-center overflow-hidden rounded-2xl", i % 2 === 0 ? "bg-paper" : "bg-mustard/25"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col justify-center p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-ink",
							children: tile.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [tile.copy, countFor(tile.slug) ? ` · ${countFor(tile.slug)}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-ink uppercase",
							children: ["Shop now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full min-h-[160px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pickCover(products, tile.slug, tile.image),
						alt: "",
						className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					})
				})]
			}, tile.title))]
		})
	});
}
function NewArrivals() {
	const { products } = useCatalog();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => {
		return (filter === "all" ? products : products.filter((p) => p.group === filter)).slice(0, 10);
	}, [products, filter]);
	if (products.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl",
					children: "New Arrivals"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-4 text-sm",
					children: FILTERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(t.id),
						className: cn("border-b-2 pb-0.5 transition-colors", filter === t.id ? "border-mustard font-medium text-ink" : "border-transparent text-muted"),
						children: t.label
					}, t.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5",
			children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				eager: i < 5
			}, p.slug))
		})]
	});
}
function LovedInNairobi() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-mustard-deep uppercase",
				children: "Loved in Nairobi"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl",
				children: "Homes, not catalogues"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/about",
				className: "hidden text-sm text-mustard-deep sm:inline",
				children: "Our story"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-2xl bg-surface p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex gap-0.5",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-mustard text-mustard" }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-xl leading-snug",
						children: [
							"“",
							r.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-4 text-sm text-muted",
						children: [
							r.name,
							" · ",
							r.place
						]
					})
				]
			}, r.name))
		})]
	});
}
function useOfferClock() {
	const [label, setLabel] = (0, import_react.useState)("00:00:00");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const now = /* @__PURE__ */ new Date();
			const end = new Date(now);
			end.setHours(23, 59, 59, 999);
			const ms = Math.max(0, end.getTime() - now.getTime());
			const h = Math.floor(ms / 36e5).toString().padStart(2, "0");
			const m = Math.floor(ms % 36e5 / 6e4).toString().padStart(2, "0");
			const s = Math.floor(ms % 6e4 / 1e3).toString().padStart(2, "0");
			setLabel(`${h}:${m}:${s}`);
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return label;
}
function PromoBanner() {
	const claim = useShop((s) => s.claimFirstOrder);
	const claimed = useShop((s) => s.firstOrderClaimed);
	const clock = useOfferClock();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-6 rounded-2xl bg-paper px-6 py-8 sm:grid-cols-[1fr_auto_auto] sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-16 shrink-0 items-center justify-center rounded-full bg-mustard text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl",
							children: "Get 15% Off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted",
							children: ["On your first order · ends in ", clock]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-3 uppercase tracking-wide",
							size: "sm",
							onClick: () => claim(),
							children: [
								claimed ? "Code FIRST15 applied" : "Claim offer",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
							]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-6 text-sm text-muted lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							icon: ShoppingBag,
							label: "Shop",
							copy: "Your favourites"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							icon: Clock3,
							label: "Add to cart",
							copy: "Easily"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
							icon: Sparkles,
							label: "Get discount",
							copy: "On checkout"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden size-24 items-center justify-center rounded-full bg-mustard font-display text-2xl font-semibold text-ink sm:flex",
					children: [
						"15%",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"OFF"
					]
				})
			]
		})
	});
}
function RecentlyViewed() {
	const { products } = useCatalog();
	const items = useShop((s) => s.recent).map((slug) => products.find((p) => p.slug === slug)).filter((p) => Boolean(p)).slice(0, 5);
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "You were looking at"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
		})]
	});
}
function Step({ icon: Icon, label, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-mustard-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs",
			children: copy
		})] })]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
