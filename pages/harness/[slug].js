import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import HarnessSidebar from "../../components/HarnessSidebar";
import { getDocList, getAllDocSlugs, getDocBySlug } from "../../lib/harness-docs";
import styles from "../../styles/Harness.module.css";

export default function HarnessDocPage({ doc, docs, slug }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentIndex = docs.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const next = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <Layout>
      <Seo
        title={`Harness — ${doc.title}`}
        description={`OKBrain Harness documentation: ${doc.title}`}
        path={`/harness/${slug}/`}
        image={`/og/harness-${slug}.png`}
      />

      <div className={styles.layout}>
        <HarnessSidebar
          docs={docs}
          currentSlug={slug}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className={styles.contentArea}>
          <article className={styles.content}>
            {!sidebarOpen && (
              <button
                className={styles.menuButton}
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
              >
                <span className={styles.menuIcon}>
                  <span className={styles.menuBar} />
                  <span className={styles.menuBar} />
                  <span className={styles.menuBar} />
                </span>
                Menu
              </button>
            )}
            <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
          </article>

          <nav className={styles.pager}>
            {prev ? (
              <Link href={`/harness/${prev.slug}/`} className={styles.pagerLink}>
                <span className={styles.pagerLabel}>&larr; Previous</span>
                <span className={styles.pagerTitle}>{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/harness/${next.slug}/`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
                <span className={styles.pagerLabel}>Next &rarr;</span>
                <span className={styles.pagerTitle}>{next.title}</span>
              </Link>
            ) : <span />}
          </nav>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllDocSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug || "introduction";
  const doc = await getDocBySlug(slug);
  const docs = getDocList();

  return {
    props: { doc, docs, slug }
  };
}
