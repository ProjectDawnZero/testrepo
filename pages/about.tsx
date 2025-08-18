import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">About Us</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray space-y-6 p-6">
          <div>
            <h2>Our Mission</h2>
            <p>
              We curate an organized, safe-to-browse directory of adult websites. Our mission is to
              highlight reputable destinations and help users avoid spammy or unsafe sites. We
              continuously review listings.
            </p>
          </div>

          <div>
            <h2>Who We Are</h2>
            <p>
              We are a small, independent team passionate about curating and presenting guides,
              tips, and resources for adult audiences. We prioritize safety, respect, and compliance
              in all our content.
            </p>
          </div>

          <div>
            <h2>Legal Compliance</h2>
            <p>
              GooningGuide.com complies with 18 U.S.C. § 2257 and the EU Digital Services Act (DSA).
              All third-party content is the responsibility of the respective owners, and we act
              swiftly on any copyright or DMCA/DSA takedown requests.
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>
              If you need to reach us for questions, feedback, or legal concerns, please use the
              contact information provided in our{' '}
              <Link href="/copyright" className="text-blue-700">
                Copyright Policy
              </Link>{' '}
              or{' '}
              <Link href="/privacy" className="text-blue-700">
                Privacy Policy
              </Link>{' '}
              pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
