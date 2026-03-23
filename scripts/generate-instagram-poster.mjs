import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import QRCode from "qrcode";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function loadFonts() {
  const fontsDir = path.join(__dirname, "fonts");
  const vt323 = fs.readFileSync(path.join(fontsDir, "vt323-latin-400-normal.woff"));
  const ibmPlexMono = fs.readFileSync(path.join(fontsDir, "ibm-plex-mono-latin-400-normal.woff"));
  return [
    { name: "VT323", data: vt323, weight: 400, style: "normal" },
    { name: "IBM Plex Mono", data: ibmPlexMono, weight: 400, style: "normal" },
  ];
}

function featureItem(text) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        alignItems: "center",
        marginBottom: 14,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              color: "#5e8a5e",
              fontSize: 38,
              marginRight: 14,
            },
            children: ">",
          },
        },
        {
          type: "div",
          props: {
            style: {
              color: "#9ab89a",
              fontSize: 38,
            },
            children: text,
          },
        },
      ],
    },
  };
}

function detailItem(value) {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        alignItems: "baseline",
        marginBottom: 10,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              color: "#5e8a5e",
              fontSize: 30,
              marginRight: 14,
              fontFamily: "IBM Plex Mono",
            },
            children: "//",
          },
        },
        {
          type: "div",
          props: {
            style: {
              color: "#88c888",
              fontSize: 38,
            },
            children: value,
          },
        },
      ],
    },
  };
}

async function main() {
  console.log("Generating Instagram poster...");
  const fonts = await loadFonts();

  // Load logo
  const logoPath = path.join(root, "public/icon-512.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  // Load Hatch Maker Studio logo
  const hatchLogoPath = path.join(root, "public/images/hatch-makerspace.jpg");
  const hatchLogoBuffer = fs.readFileSync(hatchLogoPath);
  const hatchLogoDataUri = `data:image/jpeg;base64,${hatchLogoBuffer.toString("base64")}`;

  // Generate QR code as SVG, then convert to data URI
  const qrSvgString = await QRCode.toString(
    "https://www.okbrain.org/launch-party/",
    {
      type: "svg",
      margin: 1,
      color: {
        dark: "#88c888",
        light: "#212121",
      },
    }
  );
  const qrDataUri = `data:image/svg+xml;base64,${Buffer.from(qrSvgString).toString("base64")}`;

  const markup = {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#1a1a1a",
        padding: "40px",
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
            padding: "52px",
          },
          children: [
            // Logo icon only
            {
              type: "img",
              props: {
                src: logoDataUri,
                width: 60,
                height: 60,
                style: { borderRadius: "12px" },
              },
            },

            // Hero: OKBrain + Launch Party
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        color: "#88c888",
                        fontSize: 140,
                        lineHeight: 1.05,
                      },
                      children: "OKBrain",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        color: "#88c888",
                        fontSize: 140,
                        lineHeight: 0.85,
                        marginTop: -10,
                      },
                      children: "Launch Party",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontFamily: "IBM Plex Mono",
                        color: "#5e8a5e",
                        fontSize: 36,
                        marginTop: 20,
                      },
                      children: "// Embrace AI, but Own It.",
                    },
                  },
                ],
              },
            },

            // Features
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "1px dashed #3a5a3a",
                  borderBottom: "1px dashed #3a5a3a",
                  paddingTop: 28,
                  paddingBottom: 14,
                },
                children: [
                  featureItem("OKBrain Harness Launch"),
                  featureItem("Open Source Grants"),
                  featureItem("Office Hours"),
                ],
              },
            },

            // Event Details
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                },
                children: [
                  detailItem("Hatch Works"),
                  detailItem("March 31st, 2026"),
                  detailItem("6PM Onwards"),
                ],
              },
            },

            // QR Code + Hatch Logo
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "1px dashed #3a5a3a",
                  paddingTop: 32,
                },
                children: [
                  // Top row: QR code left, Logistics Partner label right
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                      children: [
                        {
                          type: "img",
                          props: {
                            src: qrDataUri,
                            width: 180,
                            height: 180,
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              width: 180,
                              height: 180,
                              borderRadius: "50%",
                              border: "2px dashed #5e8a5e",
                              overflow: "hidden",
                            },
                            children: [
                              {
                                type: "img",
                                props: {
                                  src: hatchLogoDataUri,
                                  width: 180,
                                  height: 180,
                                },
                              },
                              {
                                type: "div",
                                props: {
                                  style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  },
                                  children: Array.from({ length: 45 }, (_, i) => ({
                                    type: "div",
                                    props: {
                                      style: {
                                        width: "100%",
                                        height: 2,
                                        backgroundColor: "rgba(136, 200, 136, 0.25)",
                                        marginBottom: 2,
                                      },
                                    },
                                  })),
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  // Bottom row: URL left, Hatch name right
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginTop: 16,
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: {
                              fontFamily: "IBM Plex Mono",
                              color: "#5e8a5e",
                              fontSize: 22,
                            },
                            children: "okbrain.org/launch-party",
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: {
                              fontFamily: "IBM Plex Mono",
                              color: "#5e8a5e",
                              fontSize: 22,
                            },
                            children: "logistics partner",
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  };

  const w = 1080;
  const h = 1350;

  // Render the crisp poster
  const posterSvg = await satori(markup, { width: w, height: h, fonts });
  const posterPng = new Resvg(posterSvg, { fitTo: { mode: "width", value: w } }).render().asPng();

  // Render glow-only layer: just the hero text on black, matching poster layout
  const glowMarkup = JSON.parse(JSON.stringify(markup));
  const card = glowMarkup.props.children;
  // Black out backgrounds
  glowMarkup.props.style.backgroundColor = "#000000";
  card.props.style.backgroundColor = "#000000";
  card.props.style.border = "none";
  // Hide all children except the hero text (index 1)
  const children = card.props.children;
  card.props.children = children.map((child, i) => {
    if (i === 1) return child; // keep hero section
    return { type: "div", props: { style: { display: "flex", flexDirection: "column", opacity: 0 }, children: child } };
  });

  const glowSvg = await satori(glowMarkup, { width: w, height: h, fonts });
  const glowPng = new Resvg(glowSvg, { fitTo: { mode: "width", value: w } }).render().asPng();

  const glowLayer = await sharp(Buffer.from(glowPng))
    .blur(45)
    .modulate({ brightness: 1.5, saturation: 1.8 })
    .linear(0.5, 0)
    .toBuffer();

  const png = await sharp(Buffer.from(posterPng))
    .composite([{ input: glowLayer, blend: "screen" }])
    .png()
    .toBuffer();

  const outputPath = path.join(root, "public/og/instagram-launch-party.png");
  fs.writeFileSync(outputPath, png);
  console.log(`Generated: ${outputPath}`);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
