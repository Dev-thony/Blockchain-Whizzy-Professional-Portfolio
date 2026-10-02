export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: 'linkedin' | 'github' | 'x' | 'whatsapp' | 'telegram' | 'mail' | 'instagram';
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type JourneyItem = {
  period: string;
  title: string;
  company: string;
  details: string[];
};

export const personalInfo = {
  name: 'David Anthony',
  shortName: 'David Anthony',
  title: 'Frontend Developer • UI/UX Designer • Blockchain/Web3 Enthusiast',
  headline: 'I design and build thoughtful digital experiences with clarity, usability, and modern frontend craft.',
  summary:
    'I am a frontend developer and UI/UX designer with a strong interest in blockchain and emerging web technologies. I create responsive interfaces, clear product experiences, and thoughtful digital communication with practical execution in mind.',
  email: 'kelajane6@gmail.com',
  location: 'Nigeria',
  availability: 'Available for frontend and design collaborations',
  // Single authoritative CV source. View CV and Download CV both point to this file,
  // so the resume you see is always the resume you download.
  resumeViewPath: '/resume/david-anthony-cv.pdf',
  resumeDownloadPath: '/resume/david-anthony-cv.pdf',
  // Local professional profile placeholder. Replace this file to add a real photo.
  profileImage: '/images/profile-placeholder.svg',
  github: 'https://github.com/Dev-thony',
  linkedin: 'https://www.linkedin.com/in/blockchainwhizzy',
  x: 'https://twitter.com/Blockchainwhizy',
  whatsapp: 'https://wa.me/2347015336065',
  telegram: 'https://t.me/blockchainwhizzy',
  instagram: 'https://www.instagram.com/dev_tony01/',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Authoritative list of every social platform shown across the site.
 * The Contact section and the Footer both read from this single source.
 *
 * To add another social platform, add another object to this list with the
 * platform name, URL, and appropriate icon. If the icon is not already handled
 * by the SocialIcon component, add it there too.
 */
export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
  { platform: "GitHub", url: personalInfo.github, icon: "github" },
  { platform: "X", url: personalInfo.x, icon: "x" },
  { platform: "WhatsApp", url: personalInfo.whatsapp, icon: "whatsapp" },
  { platform: "Telegram", url: personalInfo.telegram, icon: "telegram" },
  { platform: "Instagram", url: personalInfo.instagram, icon: "instagram" },
  { platform: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    category: 'Design & UX',
    items: ['UI Design', 'Design Systems', 'Wireframing', 'User Flows', 'Visual Design'],
  },
  {
    category: 'Interests / Exploring',
    items: ['Blockchain concepts', 'Web3 ecosystem', 'Decentralized product thinking', 'Cryptocurrency fundamentals', 'Emerging technology learning'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Vite', 'VS Code', 'IDE', 'Command Line', 'Productivity Tools', 'Figma'],
  },
];

export const journey: JourneyItem[] = [
  {
    period: 'Current focus',
    title: 'Frontend development and product design',
    company: 'Independent work',
    details: [
      'Building polished user interfaces with a strong focus on layout quality, accessibility, and maintainable code.',
      'Exploring blockchain and Web3 concepts through a product lens while prioritizing usability, clarity, and trust.',
    ],
  },
  {
    period: 'Technical foundation',
    title: 'Digital systems, design, and support',
    company: 'IT and creative work',
    details: [
      'Worked across troubleshooting, systems thinking, and visual execution to understand both technical stability and user experience.',
      'Combined design sensibility with development practices to create interfaces that are useful, clear, and distinctive.',
    ],
  },
  {
    period: 'Learning path',
    title: 'Frontend craft, design thinking, and emerging technology',
    company: 'Self-directed growth',
    details: [
      'Built practical experience with modern web tools, responsive UI work, and product-oriented implementation decisions.',
      'Continued expanding knowledge at the intersection of frontend engineering, design, and emerging digital experiences.',
    ],
  },
];

export const capabilities = [
  'Frontend development',
  'Responsive web interfaces',
  'UI implementation from design to code',
  'Web3 product exploration',
  'Product-minded prototyping',
  'Design system thinking',
];
