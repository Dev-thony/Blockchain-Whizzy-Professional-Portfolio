export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: 'linkedin' | 'github' | 'x' | 'mail' | 'message';
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
  resumeViewPath: '/resume/david-anthony-resume.html',
  resumeDownloadPath: '/resume/david-anthony-cv.pdf',
  github: 'https://github.com/Kelajane6',
  linkedin: 'https://www.linkedin.com/in/blockchainwhizzy',
  x: 'https://twitter.com/blockchainwhizy',
  whatsapp: 'https://wa.me/2347015336065',
  telegram: 'https://t.me/blockchainwhizzy',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: personalInfo.linkedin, icon: 'linkedin' },
  { platform: 'GitHub', url: personalInfo.github, icon: 'github' },
  { platform: 'X', url: personalInfo.x, icon: 'x' },
  { platform: 'Email', url: `mailto:${personalInfo.email}`, icon: 'mail' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    category: 'Design & UX',
    items: ['Figma', 'UI Design', 'Design Systems', 'Wireframing', 'User Flows', 'Visual Design'],
  },
  {
    category: 'Interests / Exploring',
    items: ['Blockchain concepts', 'Web3 ecosystem', 'Decentralized product thinking', 'Cryptocurrency fundamentals', 'Emerging technology learning'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Vite', 'VS Code', 'Adobe Photoshop', 'Adobe Illustrator'],
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
