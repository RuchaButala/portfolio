# Personal Software Engineering Portfolio

A dark, responsive personal portfolio for a backend-focused software engineer.

Persistent project context and instructions for AI agents live in
[.github/copilot-instructions.md](.github/copilot-instructions.md).

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint

## Local development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Run lint checks:

```powershell
npm run lint
```

Create a production build:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## Deployment

The project is configured as a static Vite application and can be deployed to
Cloudflare Pages. Configure the build command as `npm run build` and publish the
`dist` directory.
