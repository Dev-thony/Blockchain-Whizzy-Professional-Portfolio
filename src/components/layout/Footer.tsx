import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="container-editorial py-24">
        {/* Top Divider */}
        <div className="mb-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          <div className="h-px w-12 bg-white/20" />
          End of Portfolio
        </div>

        {/* Huge Name */}
        <div className="space-y-2">
          <h2 className="display text-[16vw] leading-[0.85] tracking-[-0.08em] text-white">
            DAVID
          </h2>

          <h2 className="display text-[16vw] leading-[0.85] tracking-[-0.08em] text-neutral-800">
            ANTHONY
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="mt-20 grid gap-16 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div className="space-y-8">
            <p className="max-w-xl text-lg leading-8 text-neutral-400">
              Frontend Engineer · Product Builder · UI Systems Thinker.
            </p>

            <p className="max-w-lg text-neutral-500 leading-7">
              Building accessible, performant, and visually thoughtful digital
              experiences using React, TypeScript, Tailwind CSS, and modern web
              technologies.
            </p>

            <a
              href="#top"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-neutral-300 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Connect
            </p>

            <div className="space-y-5">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between border-b border-white/10 pb-4 text-neutral-400 transition hover:text-white"
                >
                  <span className="uppercase tracking-[0.22em] text-sm">
                    {link.platform}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.25em] text-neutral-600 md:flex-row md:items-center md:justify-between">
          <span>© {year} David Anthony</span>

          <span>Designed & Built with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
