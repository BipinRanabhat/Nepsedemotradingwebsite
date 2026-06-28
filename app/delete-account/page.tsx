import type { Metadata } from "next";
import LegalShell, { Callout } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Delete Your Account — NEPSE Demo Trading",
  description:
    "Request permanent deletion of your NEPSE Demo Trading account and associated personal data.",
};

const MAILTO =
  "mailto:support@nepsedemotrading.com" +
  "?subject=" +
  encodeURIComponent("Account Deletion Request") +
  "&body=" +
  encodeURIComponent(
    "Please delete my NEPSE Demo Trading account and all associated data.\n\n" +
      "Registered email: \n" +
      "Username: \n\n" +
      "I understand this action is permanent and cannot be undone."
  );

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete Your Account"
      updated="June 2025"
      footerLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms & Conditions" },
      ]}
    >
      <section>
        <p>
          You can request permanent deletion of your NEPSE Demo Trading account
          and all personal data associated with it at any time. This page
          explains how to make the request, what is deleted, and how long it
          takes.
        </p>
      </section>

      <section>
        <h2>1. How to Request Deletion</h2>
        <p>
          Send an email to{" "}
          <a href="mailto:support@nepsedemotrading.com">
            support@nepsedemotrading.com
          </a>{" "}
          from the email address registered to your account, with the subject{" "}
          <strong>&quot;Account Deletion Request&quot;</strong>. Please include
          your <strong>username</strong> and <strong>registered email</strong>{" "}
          so we can verify your identity.
        </p>
        <p className="mt-4">
          <a
            href={MAILTO}
            className="inline-block px-6 py-3 rounded-xl bg-accent text-bg font-bold hover:bg-accent-deep transition-colors no-underline"
          >
            Request Account Deletion
          </a>
        </p>
        <p className="mt-4 text-sm text-content-mute">
          We verify that the request comes from the account owner before deleting
          any data. If we cannot verify your identity, we may ask for additional
          confirmation.
        </p>
      </section>

      <section>
        <h2>2. What Gets Deleted</h2>
        <p>When your account is deleted, we permanently remove:</p>
        <ul>
          <li>Your account profile (email address and username)</li>
          <li>Your password (already stored only as a secure hash)</li>
          <li>Your virtual trading activity, orders, and portfolio holdings</li>
          <li>Your price alerts and notification preferences</li>
          <li>Your active sessions and login tokens</li>
        </ul>
      </section>

      <section>
        <h2>3. What May Be Retained</h2>
        <p>
          We may retain a limited amount of information where required to comply
          with legal obligations, resolve disputes, or prevent fraud and abuse.
          Any retained data is kept only for as long as necessary and is not used
          for any other purpose.
        </p>
      </section>

      <section>
        <h2>4. Timeline</h2>
        <p>
          We process deletion requests within <strong>30 days</strong> of
          verifying your identity. Once your account is deleted, the action is{" "}
          <strong>permanent and cannot be undone</strong> — your trading history,
          portfolio, and leaderboard standing will be lost.
        </p>
      </section>

      <Callout>
        Deleting your account is permanent. If you only want to step away, you
        can simply log out and return later — your progress is kept while your
        account remains active.
      </Callout>

      <section>
        <h2>5. Need Help?</h2>
        <p>
          For any questions about account deletion or your data, contact us at:
        </p>
        <div className="mt-3 p-4 bg-card border border-border rounded-xl text-sm text-content-dim">
          <p>
            <strong>NEPSE Demo Trading</strong>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:support@nepsedemotrading.com">
              support@nepsedemotrading.com
            </a>
          </p>
          <p>Location: Kathmandu, Nepal</p>
        </div>
        <p className="mt-3 text-sm">
          See our <a href="/privacy">Privacy Policy</a> for full details on how
          we handle your data.
        </p>
      </section>
    </LegalShell>
  );
}
