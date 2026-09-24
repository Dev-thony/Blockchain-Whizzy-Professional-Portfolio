import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="group flex flex-col leading-none uppercase tracking-[0.3em]"
          >
            <span className="text-[10px] text-neutral-500">Portfolio</span>

            <span className="mt-1 font-heading text-lg text-white transition group-hover:text-neutral-300">
              David Anthony
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[11px] uppercase tracking-[0.28em] text-neutral-400 transition hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="group flex items-center gap-2 border border-white/20 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-neutral-300 transition hover:border-white hover:bg-white hover:text-black!"
            >
              Let's Talk
              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/40 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
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
