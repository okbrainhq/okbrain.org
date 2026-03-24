import Link from "next/link";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styles from "../styles/Grants.module.css";

export default function GrantsPage() {
  return (
    <Layout>
      <Seo
        title="Open Source Grants"
        description="OKBrain offers $200 monthly grants for open-source projects that align with our core principles. Apply today."
        path="/grants"
        image="/og/grants.png"
      />

      <article className={styles.container}>
        <h1>Open Source Grants</h1>

        <div className={styles.content}>
          <p>
            OKBrain is offering grants for open-source projects that follow
            our <Link href="/blog/embrace-ai-but-own-it/">core principles</Link>.
            Each grant covers a one-month project span.
          </p>

          <h2>What You Get</h2>
          <ul>
            <li>A <strong>$200 prepaid card</strong> to spend on cloud credits, hardware, or anything your project needs</li>
            <li>You must spend the full $200 during your allocated month</li>
            <li>Access to <strong>weekly office hours</strong></li>
            <li>Access to <strong>Hatch Maker Studio</strong></li>
            <li>An <strong>end-of-month presentation</strong> opportunity in front of technical panels and the public</li>
          </ul>
          <p>
            The grant applies to a specific month. If you want to continue,
            you must reapply for subsequent months.
          </p>

          <h2>Criteria</h2>
          <ul>
            <li>You must currently reside in <strong>Sri Lanka</strong></li>
            <li>Your project must align with OKBrain&apos;s <Link href="/blog/embrace-ai-but-own-it/">core principles</Link></li>
            <li>You must describe how you intend to use the funds</li>
            <li>Your project must be <strong>open-source</strong> and you must maintain documentation throughout the timeline</li>
            <li>You must use the <strong>MIT License</strong></li>
            <li>You retain all rights to your work</li>
            <li>You keep all purchased hardware</li>
          </ul>
          <p className={styles.disclaimer}>
            OKBrain, Arunoda Susiripala, GDI4K Inc., and Hatch Works disclaim all liability
            for any actions taken, outcomes, or damages arising from the use of
            these grants. By accepting a grant, you acknowledge that you are
            solely responsible for your project and its consequences.
          </p>

          <h2>How It Works</h2>
          <ul>
            <li>One application per person per month</li>
            <li><strong>Three grants</strong> are approved each month</li>
            <li>Applications open on the <strong>1st</strong> of each month</li>
            <li>Applications close on the <strong>last day</strong> of each month</li>
            <li>Winners are announced on the <strong>1st of the following month</strong></li>
            <li>Prepaid cards are distributed the same day as the announcement</li>
          </ul>

          <div className={styles.cta}>
            <a href="https://forms.gle/c2Dw8qE4exEW1dcQ9" target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
              Apply Now
            </a>
          </div>

          <h2>Contact</h2>
          <p>
            For more information, email us at{" "}
            <a href="mailto:hello@okbrain.org">hello@okbrain.org</a>.
          </p>
        </div>
      </article>
    </Layout>
  );
}
