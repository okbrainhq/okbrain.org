export const siteConfig = {
  name: "OKBrain",
  siteUrl: "https://okbrain.org",
  description: "AI is inevitable. The only question is — will you take control?",
  tagline: "Embrace AI, but Own It.",
  defaultOgImage: "/og/site-card.png"
};

export function toAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
