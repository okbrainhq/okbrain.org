import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styles from "../styles/Legal.module.css";

export default function TermsOfService() {
  return (
    <Layout>
      <Seo
        title="Terms of Service"
        description="Terms of Service for OKBrain, operated by GDI4K Inc."
        path="/terms"
      />

      <article className={styles.container}>
        <h1>Terms of Service</h1>
        <p className={styles.updated}>Last updated: March 23, 2026</p>

        <div className={styles.content}>
          <p>
            These Terms of Service ("Terms") govern your access to and use of <strong>OKBrain</strong> (the "Service")
            operated by <strong>GDI4K Inc.</strong> ("Company", "we", "us", or "our"), a Delaware C Corporation.
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service at okbrain.org, you agree to these Terms and our Privacy Policy.
            If you do not agree to these Terms, you may not use the Service.
          </p>

          <h2>2. Use of the Service</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Service in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            <li>Use any automated system to access the Service in a manner that sends more requests than a human can reasonably produce</li>
            <li>Transmit any viruses, malware, or other harmful code</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by GDI4K Inc. and are
            protected by international copyright, trademark, and other intellectual property laws. Our content
            may not be copied, reproduced, distributed, or used without our express written permission, unless
            otherwise stated.
          </p>

          <h2>4. User Content</h2>
          <p>
            If you submit any content to the Service (such as comments or feedback), you grant us a non-exclusive,
            worldwide, royalty-free license to use, reproduce, modify, and distribute that content in connection
            with the Service. You represent that you have the right to submit such content and that it does not
            violate any third-party rights.
          </p>

          <h2>5. Newsletter and Communications</h2>
          <p>
            By subscribing to our newsletter, you consent to receive periodic emails from us. You may
            unsubscribe at any time by following the unsubscribe link in any email or by contacting us
            at <a href="mailto:hello@okbrain.org">hello@okbrain.org</a>.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites or services that are not owned or controlled
            by GDI4K Inc. We have no control over and assume no responsibility for the content, privacy policies,
            or practices of any third-party sites or services.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind,
            whether express or implied, including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. We do not warrant that the Service will
            be uninterrupted, error-free, or secure.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, GDI4K Inc. shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting
            from your use of the Service.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless GDI4K Inc. and its officers, directors, employees, and
            agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys'
            fees) arising out of your use of the Service or violation of these Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
            United States, without regard to its conflict of law provisions. Any disputes arising under these
            Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes
            by posting the updated Terms on this page with a revised "Last updated" date. Your continued use
            of the Service after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice, for
            any reason, including if you breach these Terms. Upon termination, your right to use the Service
            will cease immediately.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
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
