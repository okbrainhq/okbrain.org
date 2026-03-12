export const siteConfig = {
  name: "OKBrain",
  siteUrl: "https://okbrain.org",
  description: "OKBrain is a simple static site about embracing AI while keeping ownership of your stack, content, and publishing workflow.",
  tagline: "Embarce AI, but Own It.",
  defaultOgImage: "/og/site-card.svg"
};

export function toAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
