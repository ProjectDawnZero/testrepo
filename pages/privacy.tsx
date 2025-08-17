import AgeGate from '../components/AgeGate';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4">
          This site complies with GDPR and CCPA. We use cookies for analytics and advertising via
          ExoClick. No personal data is collected beyond what is necessary for site functionality.
          Contact us at [your-email] for data inquiries.
        </p>
      </div>
    </AgeGate>
  );
}
