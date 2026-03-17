import Image from "next/image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import LaunchPartyForm from "../components/LaunchPartyForm";
import styles from "../styles/LaunchParty.module.css";

export default function LaunchPartyPage() {
  return (
    <Layout>
      <Seo
        title="Launch Party"
        description="Join the OKBrain Launch Party on April 1st, 2026. Open-source AI Harness, grants, and weekly office hours."
        path="/launch-party"
      />

      <section className={styles.container}>
        <h1 className={styles.title}>Launch Party</h1>
        <p className={styles.date}>April 1st, 2026</p>

        <div className={styles.content}>
          <p>OKBrain is officially launching. Join us to witness:</p>

          <ul>
            <li>Open-source release of <a href="https://github.com/okbrainhq/OKBrain-Harness">OKBrain Harness</a></li>
            <li>Grants for open-source projects</li>
            <li>Weekly office hours sessions</li>
          </ul>
        </div>

        <div className={styles.partner}>
          <p className={styles.partnerLabel}>Logistics Partner</p>
          <a href="https://www.instagram.com/hatchmakerstudio/" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
            <Image
              src="/images/hatch-makerspace.jpg"
              alt="Hatch Maker Studio"
              width={48}
              height={48}
              className={styles.partnerLogo}
            />
            <span className={styles.partnerName}>Hatch Maker Studio</span>
          </a>
        </div>

        <div className={styles.formSection}>
          <LaunchPartyForm />
        </div>
      </section>
    </Layout>
  );
}
