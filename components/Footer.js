import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <p className={styles.copy}>OKBrain</p>
    </footer>
  );
}
