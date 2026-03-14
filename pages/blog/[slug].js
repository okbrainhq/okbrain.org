import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";
import { siteConfig } from "../../lib/site";
import styles from "../../styles/Post.module.css";

export default function BlogPostPage({ post }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}/`,
    image: `${siteConfig.siteUrl}/og/${post.slug}.png`
  };

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}/`}
        image={`/og/${post.slug}.png`}
        type="article"
        publishedTime={post.date}
        structuredData={structuredData}
      />

      <article className={styles.post}>
        <p className={styles.date}>{post.date}</p>
        <h1>{post.title}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPostSlugs().map((slug) => ({
      params: { slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: await getPostBySlug(params.slug)
    }
  };
}
