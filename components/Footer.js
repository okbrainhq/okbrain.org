import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <p className={styles.copy}>OKBrain</p>
      </div>
      <div className={styles.legal}>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <span className={styles.entity}>&copy; {new Date().getFullYear()} GDI4K Inc.</span>
      </div>
    </footer>
  );
}
