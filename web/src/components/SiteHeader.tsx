"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";
import { pathFor, resolvePathname, type PageKey } from "@/i18n/routes";
import { contato, whatsappUrl } from "@/lib/site-data";
import LanguageSwitcher from "./LanguageSwitcher";

const whatsappHref = whatsappUrl(contato.whatsappComercial.phone);

const NAV_KEYS = ["about", "products", "careers", "commercial"] as const satisfies readonly PageKey[];

export default function SiteHeader({
  lang,
  t,
  marquee,
}: {
  lang: Locale;
  t: Dict["header"];
  marquee: string[];
}) {
  const pathname = usePathname();
  const activePage = resolvePathname(pathname)?.page ?? "home";

  const headerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const xRef = useRef(0);

  const [hidden, setHidden] = useState(false);
  const [spacerH, setSpacerH] = useState(136);
  const [menuOpen, setMenuOpen] = useState(false);

  // Marquee: continuous scroll via rAF, paused on hover, off under reduced motion.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last: number | null = null;
    const speed = 40; // px/s
    const step = (ts: number) => {
      if (last === null) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;
      if (!pausedRef.current) {
        xRef.current -= speed * dt;
        const half = track.scrollWidth / 2;
        if (half > 0 && -xRef.current >= half) xRef.current += half;
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Hide the whole header once the hero is scrolled past (second block reaches top).
  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current;
      const hero = document.getElementById("hero");
      const headerH = header?.offsetHeight ?? 136;
      // Home hides the header once you scroll past its hero; internal pages keep it visible.
      const collapse = hero
        ? hero.getBoundingClientRect().bottom <= headerH
        : false;
      setHidden(collapse);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Keep a spacer equal to the header height (header is fixed/out of flow).
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => setSpacerH(header.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Close the mobile menu on navigation (adjusting state during render, per React docs) and on Escape.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b border-tan/20 bg-cream/95 backdrop-blur-md transition-all duration-[400ms] ease-out ${
          hidden
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* Marquee */}
        <div
          className="overflow-hidden whitespace-nowrap bg-crust"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            ref={trackRef}
            className="inline-flex items-center will-change-transform"
            aria-hidden="true"
          >
            {[...marquee, ...marquee].map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center py-[7px] text-xs font-semibold uppercase tracking-[3px] text-gold"
              >
                {w}
                <span className="mx-[22px] text-gold/45">—</span>
              </span>
            ))}
          </div>
        </div>

        {/* Nav bar */}
        <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-3 sm:px-10">
          <Link
            href={pathFor("home", lang)}
            aria-label={t.logoAria}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/assets/logo-kero.png"
              alt={t.logoAlt}
              width={71}
              height={60}
              priority
              className="h-[48px] w-auto sm:h-[56px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_KEYS.map((key) => {
              const isActive = key === activePage;
              return (
                <Link
                  key={key}
                  href={pathFor(key, lang)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-nav px-3.5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[1.2px] text-crust transition-colors ${
                    isActive
                      ? "after:absolute after:inset-x-3.5 after:bottom-1 after:h-[2px] after:rounded-full after:bg-gold"
                      : "hover:bg-gold/15"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <LanguageSwitcher
              lang={lang}
              label={t.language}
              menuLabel={t.languageMenuAria}
            />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-nav bg-gold px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              {t.cta}
            </a>
          </nav>

          {/* Mobile: language + menu toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher
              lang={lang}
              label={t.language}
              menuLabel={t.languageMenuAria}
            />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-nav text-crust transition-colors hover:bg-gold/15"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile panel */}
          {menuOpen && (
            <nav
              id="mobile-menu"
              className="absolute inset-x-0 top-full border-b border-tan/20 bg-cream px-6 pb-5 pt-1 shadow-card-hover lg:hidden"
            >
              <ul className="flex flex-col">
                {NAV_KEYS.map((key) => {
                  const isActive = key === activePage;
                  return (
                    <li key={key}>
                      <Link
                        href={pathFor(key, lang)}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`relative block border-b border-tan/15 py-3.5 text-sm font-semibold uppercase tracking-[1.2px] text-crust ${
                          isActive
                            ? "after:absolute after:bottom-[10px] after:left-0 after:h-[2px] after:w-6 after:rounded-full after:bg-gold"
                            : ""
                        }`}
                      >
                        {t.nav[key]}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-btn bg-gold px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[1.2px] text-crust"
                  >
                    {t.cta}
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <div style={{ height: spacerH }} aria-hidden="true" />
    </>
  );
}
