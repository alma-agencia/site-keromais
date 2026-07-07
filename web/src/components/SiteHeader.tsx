"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems, marqueeItems, contato } from "@/lib/site-data";

const whatsappHref = `https://wa.me/${contato.whatsappComercial.phone}`;

function keyForPath(pathname: string): string {
  if (pathname === "/") return "home";
  const item = navItems.find((n) => pathname.startsWith(n.href));
  return item?.key ?? "home";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const activeKey = keyForPath(pathname);

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
    const step = (t: number) => {
      if (last === null) last = t;
      const dt = (t - last) / 1000;
      last = t;
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

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
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
            {[...marqueeItems, ...marqueeItems].map((w, i) => (
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
            href="/"
            aria-label="Kero+ Pães Congelados — início"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/assets/logo-kero.png"
              alt="Kero+ Pães Congelados"
              width={71}
              height={60}
              priority
              className="h-[48px] w-auto sm:h-[56px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-nav px-3.5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[1.2px] text-crust transition-colors ${
                    isActive
                      ? "after:absolute after:inset-x-3.5 after:bottom-1 after:h-[2px] after:rounded-full after:bg-gold"
                      : "hover:bg-gold/15"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-nav bg-gold px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[1.2px] text-crust transition-colors hover:bg-crust hover:text-cream"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-nav text-crust transition-colors hover:bg-gold/15 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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

          {/* Mobile panel */}
          {menuOpen && (
            <nav
              id="mobile-menu"
              className="absolute inset-x-0 top-full border-b border-tan/20 bg-cream px-6 pb-5 pt-1 shadow-card-hover lg:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = item.key === activeKey;
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`relative block border-b border-tan/15 py-3.5 text-sm font-semibold uppercase tracking-[1.2px] text-crust ${
                          isActive
                            ? "after:absolute after:bottom-[10px] after:left-0 after:h-[2px] after:w-6 after:rounded-full after:bg-gold"
                            : ""
                        }`}
                      >
                        {item.label}
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
                    Fale Conosco
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
