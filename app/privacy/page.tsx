import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NEPSE Demo Trading",
  description: "Learn how NEPSE Demo Trading collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h2>
          <p>
            NEPSE Demo Trading (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains what personal information we collect, how we use it, and your rights regarding that information when you use the NEPSE Demo Trading mobile application (&quot;the App&quot;).
          </p>
          <p className="mt-3">
            By using the App, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">2. Information We Collect</h2>
          <h3 className="font-semibold text-gray-700 mb-2">Information you provide directly:</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Email address</strong> — used for account registration and communication</li>
            <li><strong>Username</strong> — used to identify you on the leaderboard and within the App</li>
            <li><strong>Password</strong> — stored as a securely hashed value; we never store plaintext passwords</li>
          </ul>
          <h3 className="font-semibold text-gray-700 mb-2">Information generated through your use of the App:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Virtual trading activity (buy/sell orders, portfolio holdings)</li>
            <li>Price alert preferences</li>
            <li>App usage logs (for debugging and improving the service)</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect real financial information, payment data, or government identity documents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Create and manage your account</li>
            <li>Operate and maintain the App and leaderboard</li>
            <li>Send transactional emails (account verification, password reset)</li>
            <li>Send price alert notifications you have configured</li>
            <li>Respond to your support requests</li>
            <li>Detect and prevent fraudulent or abusive use of the App</li>
            <li>Improve and develop new features</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">4. How We Store Your Data</h2>
          <p>
            Your account data and trading activity are stored in a PostgreSQL database hosted on <strong>Railway</strong> (a cloud infrastructure provider). Data is stored on servers located in the United States. Railway follows industry-standard security practices including encryption at rest and in transit.
          </p>
          <p className="mt-3">
            We retain your account data for as long as your account is active. If you request account deletion, we will delete your personal data within 30 days, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">5. Third-Party Services</h2>
          <p>We use the following third-party services to operate the App:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Brevo (formerly Sendinblue)</strong> — used to send transactional emails such as account verification and password reset emails. Your email address is shared with Brevo for this purpose. Brevo&apos;s privacy policy is available at{" "}
              <a href="https://www.brevo.com/legal/privacypolicy/" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">brevo.com/legal/privacypolicy</a>.
            </li>
            <li>
              <strong>Railway</strong> — cloud hosting provider for our backend and database. See{" "}
              <a href="https://railway.app/legal/privacy" className="text-emerald-600 underline" target="_blank" rel="noopener noreferrer">railway.app/legal/privacy</a>.
            </li>
          </ul>
          <p className="mt-3">
            These services are used only to the extent necessary to operate the App and are not permitted to use your data for their own marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">6. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. These measures include:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Passwords are hashed using bcrypt before storage</li>
            <li>All communication between the App and our servers uses HTTPS (TLS encryption)</li>
            <li>Access to the database is restricted to authorised personnel only</li>
          </ul>
          <p className="mt-3">
            However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security and will notify you if a data breach occurs that affects your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">7. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Correction</strong> — request that we correct inaccurate or incomplete data</li>
            <li><strong>Deletion</strong> — request that we delete your account and personal data</li>
            <li><strong>Portability</strong> — request your data in a structured, machine-readable format</li>
            <li><strong>Withdraw consent</strong> — withdraw consent to optional data processing at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@nepsedemotrade.com" className="text-emerald-600 underline hover:text-emerald-700">
              support@nepsedemotrade.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">8. Children&apos;s Privacy</h2>
          <p>
            The App is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete it promptly. If you believe a child has provided us with their information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice within the App or by sending an email to the address associated with your account. Your continued use of the App after any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
          </p>
          <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm">
            <p><strong>NEPSE Demo Trading</strong></p>
            <p>Email: <a href="mailto:support@nepsedemotrade.com" className="text-emerald-600 underline">support@nepsedemotrade.com</a></p>
            <p>Location: Kathmandu, Nepal</p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 flex gap-4">
        <Link href="/terms" className="hover:text-emerald-600">Terms &amp; Conditions</Link>
        <Link href="/about" className="hover:text-emerald-600">About</Link>
      </div>
    </div>
  );
}
