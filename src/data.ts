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
  '--help': `Available commands:\n  --help              Show this message\n  --get-projects      List open-source projects\n  --contact           Contact info\n  --about-ai          About DOCOBYTE AI`,
  '--get-projects': PROJECTS.map(p => `\n  ${p.name} [${p.status}]\n  └─ ${p.description}\n  └─ stack: ${p.tags.join(', ')}`).join(''),
  '--contact': `Email: hello@docobyte.dev\nGitHub: https://github.com/docobyte\nX: https://x.com/docobyte`,
  '--about-ai': `DOCOBYTE AI experiments combine LLMs with deterministic tooling.\nWe build agents that reason, observe, and act — not just chat.`,
};
