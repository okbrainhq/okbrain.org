import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { siteConfig } from "../lib/site";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description
  };

  return (
    <Layout hideFooter>
      <Seo structuredData={structuredData} />

      <section className={styles.hero}>
        <div className={styles.logo} aria-label="OKBrain logo">
          OK
        </div>
        <h1 className={styles.title}>OKBrain</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <Link className={styles.cta} href="/blog/own-your-ai-stack">
          Learn More
        </Link>
      </section>
    </Layout>
  );
}
