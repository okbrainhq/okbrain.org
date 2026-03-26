import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkYoutube from "./remark-youtube.js";

const docsDirectory = path.join(process.cwd(), "content/harness");

function stripPrefix(fileName) {
  return fileName.replace(/^\d+-/, "").replace(/\.md$/, "");
}

export function getDocList() {
  const fileNames = fs.readdirSync(docsDirectory).filter((f) => f.endsWith(".md")).sort();

  return fileNames.map((fileName) => {
    const slug = stripPrefix(fileName);
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

export function getAllDocSlugs() {
  const fileNames = fs.readdirSync(docsDirectory).filter((f) => f.endsWith(".md")).sort();
  return fileNames.map(stripPrefix);
}

export async function getDocBySlug(slug) {
  const fileNames = fs.readdirSync(docsDirectory).filter((f) => f.endsWith(".md"));
  const fileName = fileNames.find((f) => stripPrefix(f) === slug);
  const fullPath = path.join(docsDirectory, fileName || `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkGfm).use(remarkYoutube).use(html, { sanitize: false }).process(content);

  return {
    slug,
    ...data,
    contentHtml: processedContent.toString()
  };
}
