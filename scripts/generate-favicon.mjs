import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const sizes = [
  { name: "favicon.png", size: 32, fontSize: 18, radius: 4 },
  { name: "icon-192.png", size: 192, fontSize: 108, radius: 24 },
  { name: "icon-512.png", size: 512, fontSize: 288, radius: 64 },
  { name: "apple-touch-icon.png", size: 180, fontSize: 100, radius: 0 },
];

async function main() {
  const font = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/vt323@latest/latin-400-normal.woff"
  ).then((r) => r.arrayBuffer());

  const fonts = [{ name: "VT323", data: font, weight: 400, style: "normal" }];

  for (const { name, size, fontSize, radius } of sizes) {
    const markup = {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          borderRadius: `${radius}px`,
          fontFamily: "VT323",
        },
        children: {
          type: "div",
          props: {
            style: {
              color: "#88c888",
              fontSize,
              letterSpacing: "0.02em",
              lineHeight: 1,
            },
            children: "OK",
          },
        },
      },
    };

    const svg = await satori(markup, { width: size, height: size, fonts });
    const resvg = new Resvg(svg, { fitTo: { mode: "width", value: size } });
    const png = resvg.render().asPng();

    fs.writeFileSync(path.join(root, "public", name), png);
    console.log(`  generated ${name} (${size}x${size})`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
