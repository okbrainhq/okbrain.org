export const siteConfig = {
  name: "OKBrain",
  siteUrl: "https://okbrain.org",
  description: "AI agents are the future. Make sure you control your agents but not the other way around.",
  tagline: "Embrace AI, but Own It.",
  defaultOgImage: "/og/site-card.png"
};

export function toAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
