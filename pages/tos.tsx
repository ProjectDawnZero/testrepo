import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-4 text-gray-700">
          By using this directory, you agree to these terms. This site is for adults only. You must
          be at least 18 years old (or the age of majority in your jurisdiction) to access this
          website.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Use of the Service</h2>
        <ul className="list-inside list-disc space-y-1 text-gray-700">
          <li>We provide links to third-party sites; we do not host content.</li>
          <li>We are not responsible for third-party content or policies.</li>
          <li>Do not use this site for illegal activities or to access illegal content.</li>
        </ul>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Intellectual Property</h2>
        <p className="text-gray-700">
          All trademarks, logos, and names belong to their respective owners. This directory is a
          curated list of external resources and does not claim ownership of third-party content.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Disclaimers</h2>
        <p className="text-gray-700">
          The service is provided "as is" without warranties. We do not guarantee availability,
          accuracy, or fitness for any particular purpose.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Changes</h2>
        <p className="text-gray-700">
          We may update these terms at any time. Continued use of the site constitutes acceptance of
          the updated terms.
        </p>
      </div>
    </AgeGate>
  );
}
