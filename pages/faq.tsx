import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function FAQ() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">Do you host videos?</h2>
            <p className="text-gray-700">No. We only link to third-party websites.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">How are rankings decided?</h2>
            <p className="text-gray-700">
              See our{' '}
              <Link className="text-blue-600 hover:underline" href="/ratings">
                ratings
              </Link>{' '}
              page for criteria.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">Is the site free?</h2>
            <p className="text-gray-700">
              Yes. We may display ads or accept sponsorships, clearly labeled.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">How do I request a link removal?</h2>
            <p className="text-gray-700">
              Contact us with the exact URL and reason. We review valid requests promptly.
            </p>
          </div>
        </div>
        <footer className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {' | '}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </AgeGate>
  );
}
