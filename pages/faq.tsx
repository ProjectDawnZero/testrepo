import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray space-y-6 p-6">
          <div>
            <h2>1. What is GooningGuide.com?</h2>
            <p>
              GooningGuide.com is an informational and entertainment website that provides
              adult-oriented content, guides, and resources. It is intended strictly for users who
              are 18 years or older.
            </p>
          </div>

          <div>
            <h2>2. Do I need to register to use the site?</h2>
            <p>
              No, you do not need to register to browse the site. Some features or services may
              require additional consent or age verification depending on local laws.
            </p>
          </div>

          <div>
            <h2>3. Is the content legal?</h2>
            <p>
              Yes. We require that all content shared on the site complies with 18 U.S.C. § 2257 and
              other applicable laws. Any copyright-protected material belongs to its respective
              owners.
            </p>
          </div>

          <div>
            <h2>4. How do I report copyright infringement?</h2>
            <p>
              You may submit a notice via our{' '}
              <Link href="/copyright" className="text-blue-700">
                Copyright Policy
              </Link>{' '}
              page using the contact form or the provided email address.
            </p>
          </div>

          <div>
            <h2>5. Do you use cookies?</h2>
            <p>
              Yes. We use cookies to enhance user experience, provide analytics, and display
              personalized ads. Details can be found in our{' '}
              <Link href="/privacy" className="text-blue-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2>6. How can I contact you?</h2>
            <p>
              Please visit our{' '}
              <Link href="/about" className="text-blue-700">
                About
              </Link>{' '}
              page for contact information or reach out through the provided email address in our
              policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
