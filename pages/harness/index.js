import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import HarnessSidebar from "../../components/HarnessSidebar";
import { getDocList, getDocBySlug } from "../../lib/harness-docs";
import styles from "../../styles/Harness.module.css";

export default function HarnessIndexPage({ doc, docs }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const next = docs.length > 1 ? docs[1] : null;

  return (
    <Layout wide>
      <Seo
        title="Harness — Introduction"
        description="OKBrain Harness — open-source orchestration layer for AI agents"
        path="/harness/"
      />

      <div className={styles.layout}>
        <HarnessSidebar
          docs={docs}
          currentSlug="introduction"
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

          {next && (
            <nav className={styles.pager}>
              <span />
              <Link href={`/harness/${next.slug}/`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
                <span className={styles.pagerLabel}>Next &rarr;</span>
                <span className={styles.pagerTitle}>{next.title}</span>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await getDocBySlug("introduction");
  const docs = getDocList();

  return {
    props: { doc, docs }
  };
}
