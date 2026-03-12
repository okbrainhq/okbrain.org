import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug,
    ...data,
    contentHtml: processedContent.toString()
  };
}
