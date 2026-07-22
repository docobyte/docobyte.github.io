# DocoByte Website

<p align="center">
  <strong>Compile the Future</strong> — Software Development · AI · Cloud · Digital Solutions
</p>

<p align="center">
  <a href="https://docobyte.com"><img src="https://img.shields.io/badge/Website-docobyte.com-0052FF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website"></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-v7.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38DFD8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"></a>
</p>

---

DocoByte is a software development and digital solutions company. This repository houses the source code for the official website, built with [Astro](https://astro.build) for optimal performance.

## Brand Philosophy

| Letter | Concept | Description |
| :---: | :--- | :--- |
| **D** | **Develop** | Build robust, scalable solutions using modern, cutting-edge technology. |
| **O** | **Optimize** | Streamline and automate complex business processes through efficient software. |
| **C** | **Create** | Craft innovative digital products that solve real-world problems. |
| **O** | **Outcome** | Maintain a laser-focus on high-quality results and real client impact. |
| **Byte** | **Micro-details** | Every grand digital solution is composed of tiny, interconnected bytes. |

---

## Tech Stack & Tools

* **Framework:** [Astro v7](https://astro.build) (SSG / Static Site Generation)
* **UI Library:** [React v19](https://react.dev) with TypeScript
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com) & Vite integration
* **Icons:** [Lucide Astro](https://lucide.dev) & Iconify
* **Deployment:** GitHub Pages (automated via GitHub Actions)

---

## Getting Started

### Prerequisites

Ensure the following are installed on the local development machine:
* [Node.js](https://nodejs.org/) (`>= 22.12.0`)
* [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone this repository to the local machine:
   ```bash
   git clone git@github.com:docobyte/docobyte.github.io.git
   cd docobyte.github.io
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Local Development Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Astro development server at `http://localhost:4321` |
| `pnpm build` | Builds the static production site into the `./dist` folder |
| `pnpm preview` | Previews the locally built production site |
| `pnpm stop` | Stops the running Astro development server |
| `pnpm astro` | Runs arbitrary Astro CLI commands |

---

## Deployment Workflow

We use a Git-based deployment workflow. 
1. Any code changes pushed or merged into the `main` branch automatically trigger a GitHub Actions workflow.
2. The workflow compiles the site and deploys the static files to GitHub Pages.
3. The site is served live at [docobyte.com](https://docobyte.com).

---

<p align="center">
  DocoByte Team
</p>
