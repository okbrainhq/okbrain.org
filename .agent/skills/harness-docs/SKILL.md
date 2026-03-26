---
description: Guide for writing and editing Harness documentation pages, including adding images and YouTube videos.
---

# Harness Documentation

## Writing Harness Docs

Harness docs live in `content/harness/` as numbered markdown files:

```
content/harness/01-introduction.md
content/harness/02-getting-started.md
...
```

### Sorting & Ordering

Files are sorted alphabetically by filename. The numeric prefix controls display order — `01-`, `02-`, etc. The prefix is stripped to create the URL slug (e.g., `01-introduction.md` → `/harness/introduction/`).

### Frontmatter

Each file requires a `title` in YAML frontmatter:

```yaml
---
title: Your Page Title
---
```

### Adding Images

Use standard markdown image syntax. Place image files in `public/images/`:

```markdown
![Alt text describing the image](/images/filename.svg)
```

Supported formats: `.svg`, `.png`, `.jpg`, `.gif`, `.webp`. SVGs are preferred for diagrams since they match the terminal aesthetic and scale perfectly.

Images render at full width within the content area (`max-width: 700px`), styled with a subtle border and background.

### Adding YouTube Videos

Use the `<!-- youtube:VIDEO_ID -->` syntax anywhere in your markdown:

```markdown
Some text before the video.

<!-- youtube:dQw4w9WgXcQ -->

Text continues after.
```

The `VIDEO_ID` is the YouTube video ID from the URL (e.g., from `https://youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`).

Videos render as responsive 16:9 iframes aligned with the text content width.

### Supported Markdown

Powered by `remark-gfm`, so you get GitHub Flavored Markdown: tables, strikethrough, autolinks, task lists, fenced code blocks with language hints.

## Technical Details

### Markdown Pipeline

The rendering pipeline is: `remark` → `remark-gfm` → `remarkYoutube` (custom plugin) → `remark-html` (with `sanitize: false`).

All markdown processing is defined in `lib/harness-docs.js` (for harness docs) and `lib/posts.js` (for blog posts). Both files share the same pipeline.

### YouTube Remark Plugin

The custom plugin is at `lib/remark-youtube.js`. It:
1. Visits `html` nodes in the remark AST (HTML comments are parsed as `html` type nodes)
2. Matches `<!-- youtube:ID -->` patterns
3. Replaces the node with a `<div class="video-embed"><iframe ...></iframe></div>` HTML node
4. `sanitize: false` is required on `remark-html` because it strips `<iframe>` and `<div>` by default

### CSS Module Gotcha

The `video-embed` class is styled in **global** CSS (`styles/globals.css`), not in CSS modules (`Harness.module.css` / `Post.module.css`). This is intentional — the HTML comes from `dangerouslySetInnerHTML`, so CSS modules would hash the class name and it would never match the unhashed class in the rendered HTML.

Images use the existing `.content img` CSS module rules and work fine because standard `<img>` elements don't rely on class matching for base styling.

### Content Rendering

Pages use `dangerouslySetInnerHTML={{ __html: doc.contentHtml }}` to render the processed markdown as raw HTML. The harness doc pages are at `pages/harness/[slug].js`.
