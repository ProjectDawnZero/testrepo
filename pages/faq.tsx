export default function FAQ() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Do you host videos?</h2>
          <p className="text-gray-700">No. We only link to third-party websites.</p>
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
    </div>
  );
}
