import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray p-6">
          <h2>1. General Information</h2>
          <p>
            The information provided by GooningGuide.com ("we," "our," or "us") on this website is
            for general informational purposes only. All information on the site is provided in good
            faith, however we make no representation or warranty of any kind regarding accuracy,
            adequacy, validity, reliability, or completeness.
          </p>

          <h2>2. External Links Disclaimer</h2>
          <p>
            GooningGuide.com contains links to third-party websites. We do not monitor, investigate,
            or verify the accuracy or reliability of any information offered by third-party sites
            linked through this site. We are not responsible for any content, privacy policies, or
            practices of third-party websites.
          </p>

          <h2>3. Adult Content Warning</h2>
          <p>
            This website contains adult-oriented material intended for individuals aged 18 years and
            older. By entering, you certify that you are at least 18 years old. We are not
            responsible for access by minors or individuals who falsely represent their age.
          </p>

          <h2>4. No Professional Advice</h2>
          <p>
            The content on GooningGuide.com does not constitute legal, medical, or professional
            advice. Users should seek qualified professionals for specific concerns.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, GooningGuide.com and its operators shall not be
            liable for any damages arising out of your use of the site, including but not limited to
            direct, indirect, incidental, or consequential damages.
          </p>

          <h2>6. DMCA/DSA Compliance</h2>
          <p>
            We comply with the Digital Millennium Copyright Act (DMCA) and the EU Digital Services
            Act (DSA). Users can submit takedown notices via our{' '}
            <Link href="/copyright" className="text-blue-700">
              Copyright Policy page
            </Link>
            . Content removal decisions are made in line with applicable laws.
          </p>

          <h2>7. Contact Information</h2>
          <p>If you have any questions regarding this Disclaimer, please contact us at:</p>
          <p>Email: connect@gooningguide.com</p>
        </div>
      </div>
    </div>
  );
}
