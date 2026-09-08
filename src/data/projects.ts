export type Project = {
  // A stable identifier for this project.
  id: string;
  // The project name shown on the card.
  title: string;
  // A short explanation of what the project does.
  description: string;
  // Optional extra context shown below the description.
  impact?: string;
  // Technologies actually used for this project.
  technologies: string[];
  // Screenshot path, usually inside public/images/projects/.
  image: string;
  // Public deployed URL. Leave empty until the project is deployed.
  liveUrl?: string;
  // Optional public GitHub repository URL.
  githubUrl?: string;
  // Shows the Featured label when true.
  featured?: boolean;
  // Optional grouping label for future content organization.
  category?: string;
};

// Add, remove, or update projects in this array. The Projects section reads from here automatically.
export const projects: Project[] = [
  {
    id: "portfolio-project-showcase",
    title: "Portfolio Project Showcase",
    description:
      "A clean frontend presentation for showcasing work, product thinking, and relevant experience in a clear digital format.",
    impact:
      "Focuses on readability, visual polish, and a modern product-style layout that is easy to maintain.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    image:
      "/images/projects/Myportfolio.png",
    liveUrl: "https://myportfolio-sigma-ten-62.vercel.app/",
    githubUrl: "https://github.com/Kelajane/myportfolio.github.io.git",
    featured: true,
    category: "Web Development",
  },
  {
    id: "paylink-generator-project-showcase",
    title: "Paylink Generator Project Showcase",
    description:
      "A clean frontend presentation for showcasing work, product thinking, and relevant experience in a clear digital format.",
    impact:
      "Focuses on readability, visual polish, and a modern product-style layout that is easy to maintain.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Vite",
      "Supabase",
    ],
    image: "/images/projects/Paylink.png",
    liveUrl: "https://pay-link-gen.vercel.app/",
    githubUrl: "https://github.com/Kelajane/Paylink.git",
    featured: true,
    category: "Web Development",
  },
  {
    id: "ui-design-exploration",
    title: "UI Design Exploration",
    description:
      "A design-first concept centered on hierarchy, usability, and visual consistency across screen sizes.",
    impact:
      "Explores how structure, spacing, and interaction patterns shape the quality of a digital experience.",
    technologies: [
      "Figma",
      "UI Design",
      "Responsive Layouts",
      "Design Systems",
    ],
    image: "/images/projects/UI.png",
    liveUrl:
      "https://www.figma.com/proto/am3w21WgKb28BFstXkCGwV/Linqast-Design-System?node-id=530-36&t=Cl39nXnKSEysMduY-1",
    githubUrl: "",
    featured: true,
    category: "UI/UX Design",
  },
  {
    id: "brand-identity-direction",
    title: "LedgerOdyssey Brand Identity",
    description:
      "A brand and visual identity concept designed to communicate professionalism, clarity, and momentum.",
    impact:
      "Shows how a consistent visual system can improve trust and recognition across digital touchpoints.",
    technologies: ["Brand Design", "Figma"],
    image: "/images/projects/Design.png",
    liveUrl: "/images/projects/Design.png",
    githubUrl: "",
    featured: true,
    category: "Brand Design",
  },
];
