import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styles from "../styles/Legal.module.css";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for OKBrain, operated by GDI4K Inc."
        path="/privacy"
      />

      <article className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: March 23, 2026</p>

        <div className={styles.content}>
          <p>
            This Privacy Policy describes how <strong>GDI4K Inc.</strong> ("Company", "we", "us", or "our"),
            a Delaware C Corporation, collects, uses, and shares information in connection with your use
            of <strong>OKBrain</strong> (the "Service") available at okbrain.org.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account and Contact Information:</strong> When you subscribe to our newsletter or sign up for events, we collect your email address and any other information you voluntarily provide.</li>
            <li><strong>Communications:</strong> When you contact us, we may collect your name, email address, and the contents of your message.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> We may collect information about how you access and use the Service, including your IP address, browser type, operating system, referring URLs, pages viewed, and dates/times of visits.</li>
            <li><strong>Cookies and Similar Technologies:</strong> We may use cookies and similar tracking technologies to collect information about your browsing activity. See our Cookie Policy for more details.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Send you newsletters and updates you have opted into</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Monitor and analyze usage trends</li>
            <li>Detect, prevent, and address technical issues or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating the Service (e.g., email delivery, hosting, analytics).</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described
            in this policy, unless a longer retention period is required by law. You may request deletion
            of your data at any time by contacting us.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your personal
            information. However, no method of transmission over the Internet or electronic storage
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict the processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:hello@gdi4k.com">hello@gdi4k.com</a>.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            The Service is not directed to children under the age of 13. We do not knowingly collect
            personal information from children under 13. If we learn that we have collected personal
            information from a child under 13, we will take steps to delete that information promptly.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in the United States or other countries
            where our service providers operate. By using the Service, you consent to the transfer of
            your information to countries that may have different data protection laws than your country
            of residence.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the updated policy on this page with a revised "Last updated" date. Your continued
            use of the Service after changes constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>GDI4K Inc.</strong><br />
            A Delaware C Corporation<br />
            Email: <a href="mailto:hello@gdi4k.com">hello@gdi4k.com</a>
          </p>
          <p>
            For OKBrain-specific inquiries:{" "}
            <a href="mailto:hello@okbrain.org">hello@okbrain.org</a>
          </p>
        </div>
      </article>
    </Layout>
  );
}
