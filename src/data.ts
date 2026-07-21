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
  'API Services',
  'Websites',
  'Serverless Systems',
  'Cloud Infra',
];

export const SERVICES = [
  {
    id: '01',
    title: 'Build',
    desc: 'Custom web apps, mobile apps, AI agents, and internal tools — built from first principles.',
  },
  {
    id: '02',
    title: 'Consult',
    desc: 'Architecture review, tech strategy, and roadmap planning for teams that need clarity.',
  },
  {
    id: '03',
    title: 'Operate',
    desc: 'Server setup, CI/CD, deployment, monitoring, and maintenance — byte by byte.',
  },
  {
    id: '04',
    title: 'Ship',
    desc: 'Own products and MVPs that prove ideas fast and scale when traction hits.',
  },
];

export const WHY = [
  'Full-stack, end-to-end delivery.',
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
    tags: ['Rust', 'OpenAPI'],
  },
  {
    id: '02',
    name: 'sentinel-ai',
    status: 'beta',
    description: 'Autonomous agent that monitors logs and alerts with reasoning.',
    tags: ['Python', 'LLM'],
  },
  {
    id: '03',
    name: 'byteforms',
    status: 'alpha',
    description: 'Zero-backend form engine with spam-resistant submission handling.',
    tags: ['TypeScript', 'Edge'],
  },
] as const;

export const COMMANDS: Record<string, string> = {
  '--help': `Available commands:\n  --help              Show this message\n  --get-services      List services we offer\n  --get-products      Show our own products\n  --contact           Contact info\n  --about             About DOCOBYTE`,
  '--get-services': `
  Services offered by DOCOBYTE:\n  └─ Build: custom web, mobile, AI agents, internal tools\n  └─ Consult: architecture, strategy, roadmap\n  └─ Operate: server setup, CI/CD, deployment, maintenance\n  └─ Ship: MVPs and own products`,
  '--get-products': `
  Our own products:\n  └─ docobyte-api: REST gateway for AI agents and microservices\n  └─ sentinel-ai: autonomous log monitoring agent\n  └─ byteforms: zero-backend form engine`,
  '--contact': `Email: hello@docobyte.dev\nGitHub: https://github.com/docobyte\nX: https://x.com/docobyte`,
  '--about': `DOCOBYTE is a software house and startup lab.\nWe build, consult, operate, and ship — so your business keeps moving.`,
};
