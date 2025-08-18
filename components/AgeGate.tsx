import { useEffect, useState } from 'react';

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const verified = localStorage.getItem('ageVerified');
    if (verified) setIsVerified(true);
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  if (!isVerified) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Age Verification</h2>
          <p className="mb-4 text-gray-700">
            You must be 18 or older to access this site. By entering, you confirm you are at least
            18 years of age.
          </p>
          <button
            id="verify-age"
            onClick={handleVerify}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            I am 18 or older
          </button>
          <p className="mt-4">
            <a href="/compliance" className="text-blue-600 hover:underline">
              Exit
            </a>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
