import { visit } from "unist-util-visit";

export default function remarkYoutube() {
  return (tree) => {
    visit(tree, "html", (node, index, parent) => {
      const match = node.value.match(/<!--\s*youtube:(\S+?)\s*-->/);
      if (!match) return;

      const videoId = match[1];
      const embedHtml = `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>`;

      parent.children.splice(index, 1, {
        type: "html",
        value: embedHtml,
      });
    });
  };
}
