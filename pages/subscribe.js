import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SubscribeForm from "../components/SubscribeForm";
import styles from "../styles/Subscribe.module.css";

export default function SubscribePage() {
  return (
    <Layout>
      <Seo
        title="Subscribe"
        description="Subscribe to OKBrain. No spam. Unsubscribe anytime."
        path="/subscribe"
      />

      <section className={styles.container}>
        <h1 className={styles.title}>Stay in the Loop</h1>
        <p className={styles.description}>
          No spam. Unsubscribe anytime.
        </p>
        <SubscribeForm />
      </section>
    </Layout>
  );
}
