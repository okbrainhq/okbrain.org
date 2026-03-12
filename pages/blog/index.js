import Link from "next/link";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { getSortedPosts } from "../../lib/posts";
import { siteConfig } from "../../lib/site";
import styles from "../../styles/BlogIndex.module.css";

export default function BlogIndexPage({ posts }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.siteUrl}/blog/`,
    description: "Markdown-powered writing from OKBrain."
  };

  return (
    <Layout>
      <Seo
        title="Blog"
        description="Read the OKBrain blog, generated from Markdown at build time."
        path="/blog/"
        structuredData={structuredData}
      />

      <section className={styles.wrapper}>
        <div className={styles.list}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <article>
                <p className={styles.date}>{post.date}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className={styles.link}>Read post</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getSortedPosts()
    }
  };
}
