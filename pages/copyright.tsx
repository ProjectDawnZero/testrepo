import AgeGate from '../components/AgeGate';
// import Link from 'next/link';

export default function Copyright() {
  return (
    <AgeGate>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Copyright & DMCA</h1>
        <p className="mb-4 text-gray-700">
          We respect intellectual property rights. This directory links to third-party sites and
          does not host content. If you believe your copyrighted work has been infringed on a linked
          site, please contact that site directly.
        </p>
        <h2 className="mb-2 mt-6 text-xl font-semibold">DMCA Notices</h2>
        <p className="text-gray-700">
          For requests specifically related to this directory (e.g., removal of a link), send a
          detailed notice including the URLs in question, your contact information, and a statement
          under penalty of perjury that you are authorized to act on behalf of the rights holder.
        </p>
        <p className="mt-4 text-gray-700">Email: dmca@yourdomain.com</p>
      </div>
    </AgeGate>
  );
}
