import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray p-6">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using GooningGuide.com ("we," "our," or "us"), you agree to be bound by
            these Terms of Service and all applicable laws. If you do not agree, you must
            discontinue use of the site immediately.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            This site contains adult-oriented content intended only for individuals aged 18 years
            and older. By using this site, you confirm that you meet this age requirement.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You agree not to use the site for any unlawful purpose, including but not limited to
            distributing prohibited content, violating intellectual property rights, or engaging in
            fraudulent activity.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content provided on GooningGuide.com, unless otherwise stated, is the property of
            the site operators or licensed to us. You may not copy, reproduce, distribute, or create
            derivative works without express permission.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The site and its content are provided "as is" without warranties of any kind, express or
            implied. We disclaim all warranties including merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any damages, including
            direct, indirect, incidental, or consequential damages, arising from your use of the
            site.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our site may contain links to third-party websites. We are not responsible for the
            content or practices of those external sites.
          </p>

          <h2>8. Privacy Policy</h2>
          <p>
            Your use of this site is also governed by our{' '}
            <Link href="/privacy" className="text-blue-700">
              Privacy Policy
            </Link>
            . Please review it carefully to understand our data practices.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time without
            prior notice. Continued use of the site constitutes acceptance of the revised terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed under the laws of [Your
            Country/State], without regard to conflict of law principles.
          </p>

          <h2>11. Contact Information</h2>
          <p>For questions regarding these Terms of Service, please contact us at:</p>
          <p>
            <p>Email: connect@gooningguide.com</p>
          </p>
        </div>
      </div>
    </div>
  );
}
