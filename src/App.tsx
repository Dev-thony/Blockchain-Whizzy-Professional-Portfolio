import {
  ArrowUpRight,
  Download,
  Github,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Reveal } from "./components/ui/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { CustomCursor } from "./components/ui/CustomCursor";
import { SectionHeading } from "./components/ui/SectionHeading";
import { SocialIcon } from "./components/ui/SocialIcon";

import {
  capabilities,
  journey,
  personalInfo,
  skillGroups,
  socialLinks,
} from "./data/portfolio";

import { projects } from "./data/projects";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div
      id="top"
      className="min-h-screen bg-[#090909] text-[#F5F5F5] antialiased"
    >
      <>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

        <motion.div
          id="top"
          className="min-h-screen bg-[#090909] text-[#F5F5F5] antialiased"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <CustomCursor />

          <Header />

          {/* ========================================================= */}
          {/* HERO */}
          {/* ========================================================= */}

          <section className="container-editorial relative flex min-h-screen items-center pt-32 pb-20">
            <div className="w-full">
              {/* Availability */}
              <Reveal>
                <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  <span className="h-2 w-2 rounded-full bg-lime-400" />
                  {personalInfo.availability}
                </div>
              </Reveal>

              <div className="my-10 h-px w-20 bg-white/15" />

              {/* Giant Heading */}
              <Reveal delay={100}>
                <div className="space-y-2">
                  <h1 className="display text-white">DAVID</h1>
                  <h1 className="display text-neutral-600">ANTHONY</h1>
                </div>
              </Reveal>

              {/* Divider */}
              <Reveal delay={150}>
                <div className="my-12 h-px w-full bg-white/10" />
              </Reveal>

              {/* Bottom Intro Grid */}
              <Reveal delay={250}>
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                  {/* Left Content */}
                  <div>
                    <p className="max-w-xl text-lg leading-8 text-neutral-300">
                      {personalInfo.summary}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      {/* Primary CTA */}
                      <a
                        href="#projects"
                        className="group cursor-hover inline-flex h-12 items-center gap-3 border border-white px-6 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black!"
                      >
                        Selected Work
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </a>

                      {/* Secondary CTA */}
                      <a
                        href={personalInfo.resumeDownloadPath}
                        download="David-Anthony-CV.pdf"
                        className="group cursor-hover inline-flex h-12 items-center gap-3 border border-white/20 px-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400 transition-all duration-300 hover:border-white hover:text-white"
                      >
                        Download CV
                        <Download
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Right Info */}
                  <div className="space-y-8 border-l border-white/10 pl-6 lg:pl-10">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                        Role
                      </p>

                      <h2 className="font-heading text-3xl leading-tight">
                        {personalInfo.title}
                      </h2>
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                        Location
                      </p>

                      <div className="flex items-center gap-2 text-neutral-300">
                        <MapPin size={15} />
                        {personalInfo.location}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                        Email
                      </p>

                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 text-neutral-300 transition hover:text-white"
                      >
                        <Mail size={15} />
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Huge Scroll Label */}
              <div className="absolute bottom-10 left-0 hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-[0.45em] text-neutral-600">
                <div className="h-px w-16 bg-neutral-700" />
                Scroll
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* ABOUT */}
          {/* ========================================================= */}

          <section
            id="about"
            className="container-editorial relative flex min-h-screen items-center pt-32 pb-20"
          >
            <div className="w-full">
              <Reveal>
                <div>
                  {/* Left Label */}
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                      About
                    </p>
                  </div>

                  {/* Right Content */}
                  <div className="space-y-12 mt-2">
                    <h2 className="section-title max-w-4xl">
                      I design and build digital products with an obsession for
                      simplicity, usability, and visual clarity.
                    </h2>

                    <div className="grid gap-10 lg:grid-cols-2 text-neutral-300 leading-8">
                      <p>
                        I'm{" "}
                        <span className="text-white font-medium">
                          David Anthony
                        </span>
                        , a frontend engineer and product-focused developer who
                        enjoys turning ambitious ideas into elegant interfaces.
                        I care about products that feel intuitive before they
                        feel impressive.
                      </p>

                      <p>
                        Every interface I build is guided by structure,
                        typography, spacing, accessibility, and performance. I
                        enjoy collaborating with designers and founders to
                        transform concepts into polished user experiences.
                      </p>
                    </div>

                    {/* Values */}
                    <div className="border-t border-white/10 pt-12">
                      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {[
                          ["01", "Frontend Engineering"],
                          ["02", "Design Systems"],
                          ["03", "Product Thinking"],
                          ["04", "Responsive UX"],
                        ].map(([number, title]) => (
                          <div key={number}>
                            <p className="text-neutral-600 text-sm mb-3">
                              {number}
                            </p>

                            <h3 className="font-heading text-lg text-white">
                              {title}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="border-l border-white/20 pl-6 italic text-neutral-400 text-lg leading-8 mb-15">
                      “Good interfaces disappear. Great interfaces make people
                      feel confident.”
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Huge Scroll Label */}
              <div className="absolute bottom-10 left-0 hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-[0.45em] text-neutral-600">
                <div className="h-px w-16 bg-neutral-700" />
                Scroll
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SKILLS */}
          {/* ========================================================= */}

          <section id="skills" className="container-editorial pt-32 pb-20">
            <Reveal>
              <div className="mb-12 space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Skills
                  </p>

                  <h2 className="section-title mt-4 max-w-2xl">
                    Tools and technologies I use to craft modern web
                    experiences.
                  </h2>
                </div>

                <p className="max-w-sm text-neutral-400 leading-7">
                  I work across interface design, frontend engineering,
                  animation, performance optimization, and product
                  implementation.
                </p>
              </div>
            </Reveal>

            {/* Big Editorial Grid */}
            <div className="mt-24 space-y-24">
              {skillGroups.map((group, index) => (
                <Reveal key={group.category} delay={index * 80}>
                  <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[220px_1fr]">
                    {/* Category */}
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-600">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-heading text-2xl text-white">
                        {group.category}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="cursor-hover border border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-neutral-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Capability Strip */}
            <Reveal delay={250}>
              <div className="mt-28 border-y border-white/10 py-10">
                <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.28em] text-neutral-500">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Supabase",
                    "Firebase",
                    "Node.js",
                  ].map((skill) => (
                    <span key={skill} className="transition hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* ========================================================= */}
          {/* PROJECTS */}
          {/* ========================================================= */}

          <section id="projects" className="container-editorial pt-32 pb-20">
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Selected Work
                  </p>

                  <h2 className="section-title mt-4 max-w-3xl">
                    Projects where design decisions meet engineering execution.
                  </h2>
                </div>

                <p className="max-w-md text-neutral-400 leading-7">
                  Every project below represents a product challenge I solved
                  through UI, frontend architecture, responsiveness,
                  accessibility, and thoughtful implementation.
                </p>
              </div>
            </Reveal>

            <div className="mt-24 space-y-32">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <article className="cursor-hover">
                    <div
                      className={`grid gap-12 items-center ${
                        index % 2 === 0
                          ? "lg:grid-cols-[1.1fr_0.9fr]"
                          : "lg:grid-cols-[0.9fr_1.1fr]"
                      }`}
                    >
                      {/* IMAGE */}
                      <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                        <div className="overflow-hidden rounded-sm border border-white/10 bg-neutral-900">
                          <img
                            src={project.image}
                            alt={project.title}
                            onError={(event) => {
                              event.currentTarget.onerror = null;
                              event.currentTarget.src = "/favicon.svg";
                            }}
                            className="h-105 w-full object-cover transition duration-700 hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                        <p className="text-neutral-600 text-sm mb-4">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="font-heading text-5xl leading-none text-white">
                          {project.title}
                        </h3>

                        <p className="mt-8 text-neutral-300 leading-8 text-lg">
                          {project.description}
                        </p>

                        {project.impact && (
                          <p className="mt-6 border-l border-white/20 pl-5 text-neutral-400 leading-7">
                            {project.impact}
                          </p>
                        )}

                        {/* TECH STACK */}
                        <div className="mt-10 flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* LINKS */}
                        <div className="mt-10 flex flex-wrap gap-8 text-sm uppercase tracking-[0.25em]">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="group flex items-center gap-2 text-white"
                            >
                              {project.type === "design"
                                ? "Live Design"
                                : "Live Site"}
                              <ArrowUpRight
                                size={15}
                                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                              />
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="group flex items-center gap-2 text-neutral-400 transition hover:text-white"
                            >
                              Source
                              <Github
                                size={15}
                                className="transition group-hover:rotate-12"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* JOURNEY / EXPERIENCE */}
          {/* ========================================================= */}

          <section id="journey" className="container-editorial pt-32 pb-20">
            <Reveal>
              <div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Journey
                  </p>

                  <h2 className="font-heading mt-5 text-4xl leading-tight">
                    Experience shaped by building products and learning in
                    public.
                  </h2>
                </div>

                <p className="max-w-xl text-neutral-400 leading-8">
                  Every step in my journey has been focused on improving how
                  users interact with software while strengthening frontend
                  engineering practices.
                </p>
              </div>
            </Reveal>

            {/* Timeline */}
            <div className="relative mt-28 ml-2 border-l border-white/5">
              {journey.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="relative ml-10 py-20">
                    {/* Timeline Dot */}
                    <div className="absolute -left-11.5 top-22 h-4 w-4 rounded-full border border-white bg-[#090909]" />

                    {/* Period */}
                    <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-neutral-600">
                      {item.period}
                    </p>

                    {/* Title */}
                    <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                      {item.company}
                    </p>

                    {/* Details */}
                    <div className="mt-10 space-y-5">
                      {item.details.map((detail) => (
                        <div key={detail} className="flex gap-4">
                          <span className="mt-11px h-1.5 w-1.5 rounded-full bg-neutral-500" />

                          <p className="max-w-2xl leading-8 text-neutral-300">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Large Statement */}
            <Reveal delay={250}>
              <div className="mt-32 border-t border-white/10 pt-14">
                <p className="max-w-4xl font-heading text-3xl leading-tight text-neutral-200 sm:text-4xl lg:text-5xl">
                  I enjoy building products that feel calm, intentional, and
                  effortless to use—through clean interfaces, strong systems,
                  and thoughtful engineering.
                </p>
              </div>
            </Reveal>
          </section>

          {/* ========================================================= */}
          {/* CAPABILITIES */}
          {/* ========================================================= */}

          <section className="container-editorial pt-32 pb-20">
            <Reveal>
              <div className="border-y border-white/10 py-14">
                <div>
                  <div className="mb-5">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                      Capabilities
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {capabilities.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-white/5 pb-5"
                      >
                        <span className="text-neutral-600 text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-lg text-neutral-200 leading-8">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ========================================================= */}
          {/* RESUME CTA */}
          {/* ========================================================= */}

          <section className="container-editorial pt-32 pb-20">
            <Reveal>
              <div className="border border-white/10 p-10 md:p-16">
                <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Resume
                </p>

                <h2 className="mt-6 font-heading text-5xl leading-none lg:text-7xl">
                  Curious about the details?
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                  My resume contains experience, projects, technical stack, and
                  the product work I've contributed to across frontend
                  engineering and UI.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">
                  <a
                    href={personalInfo.resumeViewPath}
                    className="group flex items-center gap-3 border border-white px-7 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black!"
                  >
                    View Resume
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href={personalInfo.resumeDownloadPath}
                    download="David-Anthony-CV.pdf"
                    className="group flex items-center gap-3 border border-white/20 px-7 py-4 text-sm uppercase tracking-[0.25em] text-neutral-400 transition hover:border-white hover:text-white"
                  >
                    Download
                    <Download
                      size={16}
                      className="transition group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ========================================================= */}
          {/* CONTACT */}
          {/* ========================================================= */}

          <section id="contact" className="container-editorial pt-32 pb-20">
            <Reveal>
              <div className="space-y-12">
                <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Contact
                </p>

                {/* Huge Closing Heading */}
                <h2 className="display text-[14.5vw] leading-[0.9] text-white">
                  LET'S BUILD
                </h2>

                <h2 className="display text-[15vw] leading-[0.9] text-neutral-700">
                  TOGETHER
                </h2>

                <div className="h-px w-full bg-white/10" />

                {/* Contact Grid */}
                <div className="grid gap-16 pt-8 lg:grid-cols-[1fr_320px]">
                  {/* Left */}
                  <div>
                    <p className="max-w-2xl text-xl leading-9 text-neutral-300">
                      I'm available for frontend engineering roles, freelance
                      projects, product collaborations, and conversations around
                      UI, design systems, and digital experiences.
                    </p>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="group mt-10 inline-flex items-center gap-3 text-lg text-white"
                    >
                      {personalInfo.email}

                      <ArrowUpRight
                        size={18}
                        className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>

                    <div className="mt-10 flex items-center gap-3 text-neutral-500">
                      <MapPin size={16} />
                      {personalInfo.location}
                    </div>

                    <div className="mt-3 flex items-center gap-3 text-neutral-500">
                      <Sparkles size={16} />
                      {personalInfo.availability}
                    </div>
                  </div>

                  {/* Right Social Links */}
                  <div className="space-y-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target={
                          link.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.url.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="group flex items-center justify-between border-b border-white/10 pb-5 text-neutral-400 transition hover:text-white"
                      >
                        <div className="flex items-center gap-4">
                          <SocialIcon
                            name={link.icon}
                            size={18}
                            className="text-neutral-500 group-hover:text-white"
                          />

                          <span className="uppercase tracking-[0.22em] text-sm">
                            {link.platform}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </motion.div>
      </>

      <Footer />
    </div>
  );
}

export default App;
