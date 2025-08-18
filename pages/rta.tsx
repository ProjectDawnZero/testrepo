import Link from 'next/link';

export default function RTALabelPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">RTA Label</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray space-y-6 p-6">
          <div>
            <h2>Restricted To Adults (RTA) Label</h2>
            <p>
              GooningGuide.com is labeled with the <strong>RTA (Restricted To Adults)</strong>{' '}
              website label. This label is designed to protect minors from accessing
              age-inappropriate material. Parental filtering and blocking software can recognize the
              RTA tag and restrict access accordingly.
            </p>
          </div>

          <div>
            <h2>What is RTA?</h2>
            <p>
              RTA is a free, non-profit initiative created by the Association of Sites Advocating
              Child Protection (ASACP). It enables webmasters to label their sites as containing
              adult content so that filtering software can block access for underage users.
            </p>
          </div>

          <div>
            <h2>Why We Use RTA</h2>
            <p>
              Our goal is to provide a safe and compliant environment for adults while helping
              parents and guardians prevent minors from accessing unsuitable material. By
              implementing the RTA label, we demonstrate our commitment to child protection and
              legal compliance.
            </p>
          </div>

          <div>
            <h2>RTA Meta Tag</h2>
            <p>This site includes the following RTA meta tag in its source code:</p>
            <div className="rounded-lg bg-gray-100 p-3 text-sm">
              {`<meta name="RTA" content="RTA-5042-1996-1400-1577-RTA" />`}
            </div>
          </div>

          <div>
            <h2>Learn More</h2>
            <p>
              To learn more about the RTA labeling initiative, visit the official{' '}
              <Link
                href="https://www.rtalabel.org/index.php?content=parents"
                className="text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                RTA Label website
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
