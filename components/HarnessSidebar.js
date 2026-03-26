import Link from "next/link";
import styles from "../styles/Harness.module.css";

export default function HarnessSidebar({ docs, currentSlug, isOpen, onToggle }) {
  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={onToggle} />
          <aside className={`${styles.sidebar} ${styles.sidebarOpen}`}>
            <button
              className={styles.closeButton}
              onClick={onToggle}
              aria-label="Close navigation"
            >
              <span className={styles.closeIcon}>&times;</span>
              Close
            </button>
          <div className={styles.sidebarHeader}>
            <Link className={styles.sidebarTitle} href="/harness/" onClick={onToggle}>
              OKBrain Harness
            </Link>
          </div>
            <nav className={styles.sidebarNav}>
              {docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/harness/${doc.slug}/`}
                  className={`${styles.sidebarLink} ${currentSlug === doc.slug ? styles.sidebarLinkActive : ""}`}
                  onClick={onToggle}
                >
                  {doc.title}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}

      {!isOpen && (
        <aside className={styles.sidebar} aria-hidden="true">
          <div className={styles.sidebarHeader}>
            <Link className={styles.sidebarTitle} href="/harness/">
              OKBrain Harness
            </Link>
          </div>
          <nav className={styles.sidebarNav}>
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/harness/${doc.slug}/`}
                className={`${styles.sidebarLink} ${currentSlug === doc.slug ? styles.sidebarLinkActive : ""}`}
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
}
