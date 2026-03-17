import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const postsDir = path.join(root, "content/posts");
const outputDir = path.join(root, "public/og");

async function loadFonts() {
  const [vt323, ibmPlexMono] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/vt323@latest/latin-400-normal.woff"
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-400-normal.woff"
    ).then((r) => r.arrayBuffer()),
  ]);
  return [
    { name: "VT323", data: vt323, weight: 400, style: "normal" },
    { name: "IBM Plex Mono", data: ibmPlexMono, weight: 400, style: "normal" },
  ];
}

function formatDate(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function createSiteCardMarkup() {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#1a1a1a",
        padding: "52px",
        fontFamily: "VT323",
      },
      children: {
        type: "div",
        props: {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#212121",
            borderRadius: "28px",
            border: "2px solid #3a5a3a",
            padding: "58px",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  color: "#88c888",
                  fontSize: 170,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  textAlign: "center",
                },
                children: "OKBrain",
              },
            },
            {
              type: "div",
              props: {
                style: {
                  color: "#9ab89a",
                  fontSize: 76,
                  lineHeight: 1.4,
                  marginTop: 16,
                  textAlign: "center",
                },
                children: "Embrace AI, but Own It.",
              },
            },
          ],
        },
      },
    },
  };
}

function createBlogPostMarkup(title, excerpt, date, slug) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#1a1a1a",
        padding: "52px",
        fontFamily: "VT323",
      },
      children: {
        type: "div",
        props: {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#212121",
            borderRadius: "28px",
            border: "2px solid #3a5a3a",
            padding: "58px",
          },
          children: [
            {
              type: "div",
              props: {
                style: { display: "flex", flexDirection: "column" },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        color: "#5e8a5e",
                        fontSize: 28,
                        marginBottom: 20,
                      },
                      children: `// ${formatDate(date)}`,
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        color: "#88c888",
                        fontSize: 72,
                        lineHeight: 1.15,
                        marginBottom: 24,
                      },
                      children: title,
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontFamily: "IBM Plex Mono",
                        color: "#9ab89a",
                        fontSize: 28,
                        lineHeight: 1.6,
                        paddingBottom: 28,
                        borderBottom: "1px dashed #3a5a3a",
                      },
                      children: excerpt,
                    },
                  },
                ],
              },
            },
            {
              type: "div",
              props: {
                style: {
                  color: "#5e8a5e",
                  fontSize: 26,
                },
                children: `okbrain.org/blog/${slug}`,
              },
            },
          ],
        },
      },
    },
  };
}

async function renderToPng(element, fonts) {
  const svg = await satori(element, { width: 1200, height: 630, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  return resvg.render().asPng();
}

async function main() {
  console.log("Generating OG images...");
  const fonts = await loadFonts();

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Site card
  const siteCard = createSiteCardMarkup();
  const sitePng = await renderToPng(siteCard, fonts);
  fs.writeFileSync(path.join(outputDir, "site-card.png"), sitePng);
  console.log("  generated site-card.png");

  // Blog post cards
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(content);

    const element = createBlogPostMarkup(
      data.title,
      data.excerpt,
      data.date,
      slug
    );
    const png = await renderToPng(element, fonts);

    fs.writeFileSync(path.join(outputDir, `${slug}.png`), png);
    console.log(`  generated ${slug}.png`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error("Failed to generate OG images:", err);
  process.exit(1);
});
