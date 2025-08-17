import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function About() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">About This Directory</h1>
        <p className="mb-4 text-gray-700">
          We curate an organized, safe-to-browse directory of adult websites. Our mission is to
          highlight reputable destinations and help users avoid spammy or unsafe sites. We
          continuously review listings and update rankings.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">Contact</h2>
        <p className="text-gray-700">Email: contact@yourdomain.com</p>
      </div>
    </AgeGate>
  );
}
