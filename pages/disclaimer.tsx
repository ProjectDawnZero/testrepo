import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function Disclaimer() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Disclaimer</h1>
        <p className="mb-4 text-gray-700">
          This is a curated directory linking to external websites. We do not control or endorse
          third-party content, policies, or practices. Visiting external links is at your own
          discretion and risk.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">No Warranties</h2>
        <p className="text-gray-700">
          The directory is provided on an "as is" and "as available" basis.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Adult Content Warning</h2>
        <p className="text-gray-700">
          Linked websites may contain explicit adult content intended for consenting adults only.
          Ensure it is legal in your jurisdiction to view such content.
        </p>
      </div>
    </AgeGate>
  );
}
