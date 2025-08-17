import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function Compliance() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">18 U.S.C. § 2257 Compliance</h1>
        <p className="mb-4">
          All sites listed on this directory comply with 18 U.S.C. § 2257. Records required by this
          statute are maintained by the respective site operators. Contact individual sites for
          their compliance statements.
        </p>
        <footer className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {' | '}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </AgeGate>
  );
}
