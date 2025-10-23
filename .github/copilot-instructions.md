# AI Coding Agent Instructions for dago-portfolio

## Project Overview
This is a personal IT portfolio built with Astro, featuring project showcases with filtering and timeline layout. Projects are managed as content collections in Markdown files.

## Architecture
- **Framework**: Astro for static site generation
- **Styling**: UnoCSS with custom presets and rules (see `uno.config.ts`)
- **Content**: Projects defined in `src/content/projects/` as Markdown with frontmatter schema (see `src/content/config.ts`)
- **Components**: Key components in `src/components/` - FilterBar for tag-based filtering, ProjectBlock for project display, Timeline for layout
- **Data Flow**: Projects fetched via `getCollection('projects')`, grouped by year on index page, filtered client-side via JavaScript

## Key Patterns
- **Content Collections**: Use `defineCollection` with Zod schemas for type-safe content (e.g., projects have title, date, stack array, optional screenshots)
- **Filtering Logic**: Implemented in FilterBar component with data attributes (`data-tags`, `data-tag-lc`) and URL sync via `history.replaceState`
- **Component Props**: Strongly typed interfaces (e.g., `ProjectBlock` expects ISO date strings, stack as string array)
- **Styling**: UnoCSS utilities with custom rules like `space-y-*` for spacing, `sr-only` for accessibility
- **Internationalization**: Dates formatted in Lithuanian (`lt-LT`), some UI text in Lithuanian

## Developer Workflows
- **Development**: `npm run dev` starts dev server with hot reload
- **Build**: `npm run build` generates static files to `dist/`
- **Preview**: `npm run preview` serves built site locally
- **Adding Projects**: Create new `.md` file in `src/content/projects/` with frontmatter matching schema, content as Markdown body
- **Debugging**: Check browser console for filter state; projects hidden via `hidden` attribute

## Conventions
- **File Structure**: Components in `src/components/`, pages in `src/pages/`, content in `src/content/`
- **Naming**: Kebab-case for files (e.g., `project-block.astro`), camelCase for JS variables
- **Scripts**: Inline `<script is:inline>` for client-side logic (e.g., FilterBar filtering)
- **Assets**: Screenshots as images in project directories, referenced in frontmatter
- **Deployment**: GitHub Pages to Hostinger, configured in Astro config

## Integration Points
- **External Links**: Project URLs open in new tab with `rel="noopener noreferrer"`
- **Accessibility**: ARIA attributes on filter buttons, screen reader text for icons
- **Performance**: Static generation with pre-rendered content, client-side filtering only

Reference files: `src/pages/index.astro` (main logic), `src/components/FilterBar.astro` (filtering), `src/content/config.ts` (schemas)</content>
<parameter name="filePath">/Users/dan/Documents/IT/dago/dago-portfolio/.github/copilot-instructions.md