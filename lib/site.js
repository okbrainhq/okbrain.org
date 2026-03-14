export const siteConfig = {
  name: "OKBrain",
  siteUrl: "https://okbrain.org",
  description: "Get the full benefit of AI for your existing workflows, while retaining the control & ownership.",
  tagline: "Embrace AI, but Own It.",
  defaultOgImage: "/og/site-card.png"
};

export function toAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
