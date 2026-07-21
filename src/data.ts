export interface PaletteColor {
  name: string;
  hex: string;
}

export const PALETTE: PaletteColor[] = [
  { name: 'Void', hex: '#08080A' },
  { name: 'Byte', hex: '#10B981' },
  { name: 'Signal', hex: '#0EA5E9' },
  { name: 'Pulse', hex: '#A855F7' },
  { name: 'Caution', hex: '#F59E0B' },
  { name: 'White', hex: '#F4F4F5' },
];

export const TYPEWRITER_WORDS = [
  'Software',
  'AI Agents',
  'APIs',
  'Websites',
  'Systems',
  'Products',
  'Platforms',
  'Microservices',
  'Automations',
  'Infrastructures',
  'Dashboards',
  'Outcomes',
  'Databases',
  'Cloud Architectures',
  'SaaS Solutions',
  'Integrations',
  'Mobile Apps',
  'Algorithms',
  'Real-time Systems',
];

export const HERO_MESSAGES = [
  'Got an idea? Let us turn it into code—byte by byte.',
  'Full-service software house. You focus on business; we handle the bytes.',
  'AI agents, APIs, cloud infra—we speak fluent machine.',
  'From zero to deployed. Tell us what you need.',
  'Your next product, shipped. One conversation away.',
  'Compile the future. We architect systems that scale.',
  'Develop. Optimize. Create. We deliver the outcomes.',
  'Optimized to the last byte. Engineered for maximum performance.',
  'From the first commit to the final production deployment.',
  'Clean syntax, solid architecture, flawless execution.',
  'Stop debugging your ideas. Let us compile them into reality.',
  'We write the code. You own the market.',
  'Bridging the gap between abstract ideas and compiled realities.',
  'Transforming raw requirements into high-performance solutions.',
  'Your vision, our architecture. Deployed and ready to scale.',
  'Automating workflows. Optimizing performance. Delivering results.',
  'Full-stack expertise. End-to-end execution. Real outcomes.',
];

export const SERVICES = [
  {
    id: '01',
    title: 'Develop',
    desc: 'Custom web apps, mobile apps, AI agents, and internal tools — built from first principles with the right technology.',
    letter: 'D',
  },
  {
    id: '02',
    title: 'Optimize',
    desc: 'Architecture review, tech strategy, and roadmap planning — optimizing business processes through software.',
    letter: 'O',
  },
  {
    id: '03',
    title: 'Create',
    desc: 'Server setup, CI/CD, deployment, monitoring — creating innovative digital products, byte by byte.',
    letter: 'C',
  },
  {
    id: '04',
    title: 'Outcome',
    desc: 'Own products and MVPs that prove ideas fast and scale when traction hits — focused on real results.',
    letter: 'O',
  },
];

export const WHY = [
  'Full-stack, end-to-end delivery — every byte connected.',
  'Lean team, senior hands on every project.',
  'Own products alongside client work.',
  'Transparent pricing, no long-term lock-in.',
];

export const PROJECTS = [
  {
    id: '01',
    name: 'docobyte-api',
    status: 'v1.0',
    description: 'Lightweight REST API gateway for AI agents and microservices.',
    tags: ['API Gateway', 'Rust'],
  },
  {
    id: '02',
    name: 'sentinel-ai',
    status: 'beta',
    description: 'Autonomous agent that monitors logs and alerts with reasoning.',
    tags: ['AI Agent', 'Monitoring'],
  },
  {
    id: '03',
    name: 'byteforms',
    status: 'alpha',
    description: 'Zero-backend form engine with spam-resistant submission handling.',
    tags: ['Form Engine', 'No-Code'],
  },
  {
    id: '04',
    name: 'bytetix',
    status: 'concept',
    description: 'Multi-event ticketing platform for Event Organizers — from fun runs and concerts to seminars.',
    tags: ['Ticketing', 'SaaS', 'Multi-tenant'],
  },
  {
    id: '05',
    name: 'notulic-ai',
    status: 'concept',
    description: 'AI-Powered Meeting Intelligence — turn conversations into instant meeting notes.',
    tags: ['AI', 'Productivity', 'Meeting Notes'],
  },
] as const;

export const COMMANDS: Record<string, string> = {
  '--help': `Available commands:\n  --help              Show this message\n  --get-services      List services we offer\n  --get-products      Show our own products\n  --contact           Contact info\n  --about             About DOCOBYTE`,
  '--get-services': `
  Services offered by DOCOBYTE:\n  └─ Build: custom web, mobile, AI agents, internal tools\n  └─ Consult: architecture, strategy, roadmap\n  └─ Operate: server setup, CI/CD, deployment, maintenance\n  └─ Ship: MVPs and own products`,
  '--get-products': `
  Our own products:\n  └─ docobyte-api: REST gateway for AI agents and microservices\n  └─ sentinel-ai: autonomous log monitoring agent\n  └─ byteforms: zero-backend form engine\n  └─ bytetix: multi-event ticketing platform for EOs (concept)\n  └─ notulic-ai: AI-powered meeting intelligence (concept)`,
  '--contact': `Email: hello@docobyte.dev\nGitHub: https://github.com/docobyte\nX: https://x.com/docobyte\nWhatsApp: https://wa.me/6285111336200`,
  '--about': `DOCOBYTE is a software house and startup lab.\nWe build, consult, operate, and ship — so your business keeps moving.`,
};
