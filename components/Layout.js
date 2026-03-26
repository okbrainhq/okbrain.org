import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, hideFooter = false, wide = false }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.main} ${wide ? styles.mainWide : ""}`}>{children}</main>
      {hideFooter ? null : <Footer />}
    </div>
  );
}
