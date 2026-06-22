import type { Metadata } from "next";
import LegalShell, { Callout } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms & Conditions — NEPSE Demo Trading",
  description: "Read the Terms and Conditions for using the NEPSE Demo Trading app.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      updated="June 2025"
      footerLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/about", label: "About" },
      ]}
    >
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the NEPSE Demo Trading application (&quot;the App&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must not use the App.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          NEPSE Demo Trading is a paper trading simulator that allows users to practice buying and selling stocks listed on the Nepal Stock Exchange (NEPSE) using a virtual currency balance. No real money is deposited, traded, withdrawn, or held at any time. The App is provided for educational and entertainment purposes only.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the App. By using the App, you represent and warrant that you meet this age requirement. If you are under the age of 18, you should use the App only with the involvement and consent of a parent or legal guardian.
        </p>
      </section>

      <section>
        <h2>4. Account Registration</h2>
        <p>
          To access most features of the App, you must create an account using a valid email address and password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately at{" "}
          <a href="mailto:support@nepsedemotrading.com">support@nepsedemotrading.com</a>{" "}
          if you suspect unauthorized access to your account.
        </p>
      </section>

      <section>
        <h2>5. Virtual Currency and Trading</h2>
        <p>Upon registration, you are granted a virtual starting balance (denominated in virtual NPR) for use within the App. This virtual currency:</p>
        <ul>
          <li>Has no real monetary value</li>
          <li>Cannot be withdrawn, exchanged, or converted to real money or any other asset</li>
          <li>Cannot be transferred between accounts</li>
          <li>May be reset or adjusted by us at any time without notice</li>
        </ul>
        <p className="mt-3">
          All trades, portfolio values, and returns displayed within the App are entirely simulated and do not reflect real investment performance.
        </p>
      </section>

      <section>
        <h2>6. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of any applicable regulations</li>
          <li>Attempt to gain unauthorized access to any part of the App or its servers</li>
          <li>Use automated bots, scripts, or other tools to interact with the App</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the App</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Post or transmit content that is offensive, harmful, or illegal</li>
          <li>Create multiple accounts to manipulate the leaderboard or gain unfair advantages</li>
        </ul>
      </section>

      <section>
        <h2>7. Not Financial Advice</h2>
        <Callout>
          <strong>Important Disclaimer:</strong> Nothing in the App constitutes financial, investment, legal, or tax advice. The App is a simulation tool for educational purposes only. Market data displayed may be delayed or inaccurate. Do not make real investment decisions based on your performance within the App. Always consult a licensed financial advisor before investing real money.
        </Callout>
      </section>

      <section>
        <h2>8. Accuracy of Market Data</h2>
        <p>
          We strive to display accurate NEPSE market data, but we do not guarantee the completeness, accuracy, or timeliness of any data displayed within the App. Market data is sourced from third-party providers and may be subject to delays or errors. We are not liable for any discrepancies between data shown in the App and actual market conditions.
        </p>
      </section>

      <section>
        <h2>9. Intellectual Property</h2>
        <p>
          All content within the App, including but not limited to the design, graphics, text, logos, and software, is owned by or licensed to NEPSE Demo Trading and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
        </p>
      </section>

      <section>
        <h2>10. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account at any time, with or without notice, if we believe you have violated these Terms or if the App is discontinued. Upon termination, your access to the App and your virtual balance will be permanently removed.
        </p>
      </section>

      <section>
        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, NEPSE Demo Trading and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability to you for any claim shall not exceed NPR 0, as the App is provided free of charge and involves no real financial transactions.
        </p>
      </section>

      <section>
        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of significant changes via the App or by email. Your continued use of the App after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
        </p>
      </section>

      <section>
        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Nepal.
        </p>
      </section>

      <section>
        <h2>14. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us at{" "}
          <a href="mailto:support@nepsedemotrading.com">support@nepsedemotrading.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
