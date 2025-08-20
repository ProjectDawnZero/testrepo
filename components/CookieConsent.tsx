import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const verified = localStorage.getItem('cookiesAccepted');
    if (verified) setVisible(false);
  }, []);

  const handleVerify = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-semibold">Privacy & Cookie Policy</h2>
        <p className="mb-4 text-sm text-gray-600">
          We use cookies to enhance your browsing experience, analyze traffic, and serve
          personalized ads. By continuing to use our site, you agree to our{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex justify-end space-x-2">
          <Link
            id="privacy-decline"
            href={'/privacy'}
            className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Decline
          </Link>
          <button
            id="privacy-accept"
            onClick={handleVerify}
            className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
