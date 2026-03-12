import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        OKBrain
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
