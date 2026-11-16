import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"),
  );
  const [activeHref, setActiveHref] = useState<string | null>(
    () => navItems.find((item) => item.href === window.location.hash)?.href ?? null,
  );
  const returningToTop = useRef(false);
  const navigationTarget = useRef<string | null>(null);
  const clearActiveAfterNavigation = useRef(false);

  const navigateToSection = (href: string, clearActive = false) => {
    returningToTop.current = false;
    navigationTarget.current = href;
    clearActiveAfterNavigation.current = clearActive;
    setPinned(true);
    setActiveHref(clearActive ? null : href);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    let scrollSettleTimer: number | undefined;

    const updateActiveHref = () => {
      const activePosition = window.scrollY + window.innerHeight * 0.3;
      let currentHref: string | null = null;

      if (window.scrollY > 24) {
        for (const item of navItems) {
          const section = document.querySelector<HTMLElement>(item.href);
          if (section && section.offsetTop <= activePosition) {
            currentHref = item.href;
          }
        }
      }

      if (
        window.scrollY > 24 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      ) {
        currentHref = navItems[navItems.length - 1].href;
      }

      setActiveHref(currentHref);
    };

    const finishNavigation = () => {
      window.clearTimeout(scrollSettleTimer);
      navigationTarget.current = null;
      if (clearActiveAfterNavigation.current) {
        setActiveHref(null);
      } else {
        updateActiveHref();
      }
    };

    const resumeActiveTracking = (event: Event) => {
      if (
        event instanceof KeyboardEvent &&
        !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)
      ) {
        return;
      }
      if (!clearActiveAfterNavigation.current) return;
      clearActiveAfterNavigation.current = false;
      updateActiveHref();
    };

    const dismissPinnedHeader = (event: Event) => {
      if (
        event instanceof KeyboardEvent &&
        !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)
      ) {
        return;
      }

      setPinned(false);
      navigationTarget.current = null;
      clearActiveAfterNavigation.current = false;
      updateActiveHref();
    };

    const onScroll = () => {
      if (clearActiveAfterNavigation.current) {
        setActiveHref(null);
        return;
      }

      if (returningToTop.current) {
        setActiveHref(null);
        if (window.scrollY <= 24) returningToTop.current = false;
        return;
      }

      if (navigationTarget.current) {
        window.clearTimeout(scrollSettleTimer);
        scrollSettleTimer = window.setTimeout(finishNavigation, 180);
        return;
      }

      updateActiveHref();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", finishNavigation);
    window.addEventListener("wheel", resumeActiveTracking, { passive: true });
    window.addEventListener("touchstart", resumeActiveTracking, { passive: true });
    window.addEventListener("keydown", resumeActiveTracking);
    window.addEventListener("wheel", dismissPinnedHeader, { passive: true });
    window.addEventListener("touchmove", dismissPinnedHeader, { passive: true });
    window.addEventListener("keydown", dismissPinnedHeader);

    return () => {
      window.clearTimeout(scrollSettleTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", finishNavigation);
      window.removeEventListener("wheel", resumeActiveTracking);
      window.removeEventListener("touchstart", resumeActiveTracking);
      window.removeEventListener("keydown", resumeActiveTracking);
      window.removeEventListener("wheel", dismissPinnedHeader);
      window.removeEventListener("touchmove", dismissPinnedHeader);
      window.removeEventListener("keydown", dismissPinnedHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`z-50 px-3 pt-3 ${
          pinned ? "fixed inset-x-0 top-0" : "relative"
        }`}
      >
        <div
          className="mx-auto flex h-16 w-full max-w-360 items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl md:px-8"
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={() => {
              returningToTop.current = window.scrollY > 24;
              navigationTarget.current = null;
              clearActiveAfterNavigation.current = false;
              setPinned(false);
              setActiveHref(null);
            }}
            className="group flex flex-col leading-none uppercase tracking-[0.18em] sm:tracking-[0.3em]"
          >
            <span className="text-[10px] text-neutral-500">Portfolio</span>

            <span className="mt-1 font-heading text-lg text-white transition group-hover:text-neutral-300">
              David Anthony
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => navigateToSection(item.href)}
                aria-current={activeHref === item.href ? "location" : undefined}
                className={`rounded-full px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  activeHref === item.href
                    ? "bg-white/10 text-white shadow-[0_1px_3px_rgba(255,255,255,0.08)]"
                    : "text-neutral-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              {theme === "dark" ? (
                <Sun size={17} aria-hidden="true" />
              ) : (
                <Moon size={17} aria-hidden="true" />
              )}
            </button>

            {/* CTA */}
            <a
              href="https://calendar.app.google/dfCBMhKMS43pvUAo6"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-neutral-300 transition hover:border-white hover:bg-white hover:text-black! lg:flex"
            >
              Let's Talk
              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/40 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto bg-black/98 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-editorial flex h-full flex-col justify-center">
          <nav className="space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 pb-5 text-3xl font-heading text-white transition hover:text-neutral-400"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {item.label}

                <ArrowUpRight
                  size={20}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </nav>

          <div className="mt-16 border-t border-white/10 pt-8 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Frontend Engineer · Product Builder
          </div>
        </div>
      </div>
    </>
  );
}
