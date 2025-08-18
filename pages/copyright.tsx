import { useState } from 'react';

export default function CopyrightPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">DMCA / DSA Copyright Policy</h1>

      <div className="rounded-2xl shadow-md">
        <div className="prose prose-gray p-6">
          <p>
            <strong>Effective Date:</strong> 20/03/2025
          </p>
          <p>
            GooningGuide.com respects the intellectual property rights of others and expects users
            and linked third-party sites to do the same. In accordance with the{' '}
            <strong>Digital Millennium Copyright Act (DMCA)</strong> and the{' '}
            <strong>EU Digital Services Act (DSA)</strong>, we have adopted the following policy for
            handling copyright infringement notices.
          </p>

          <h2>1. Filing a Notice of Infringement</h2>
          <p>
            If you believe that content accessible via GooningGuide.com infringes your copyright,
            your notice must include:
          </p>
          <ul>
            <li>Your full name, address, phone number, and email address.</li>
            <li>A description of the copyrighted work claimed to have been infringed.</li>
            <li>The exact URL(s) where the infringing material appears.</li>
            <li>
              A good-faith statement that the disputed use is not authorized by the copyright owner,
              its agent, or the law.
            </li>
            <li>
              A statement that the information is accurate and you are authorized to act on behalf
              of the owner.
            </li>
            <li>Your physical or electronic signature.</li>
          </ul>

          <h2>2. Counter-Notification</h2>
          <p>
            If you believe your content was removed in error, you may send a counter-notice
            including identification of the removed content, a good-faith statement it was removed
            by mistake, your consent to jurisdiction, and your signature.
          </p>

          <h2>3. Contact Information</h2>
          <p>
            Email: dmca@gooningguide.com
            <br />
          </p>
        </div>
      </div>

      <div className="rounded-2xl shadow-md">
        <div className="space-y-4 p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSej8TfXkNwWVr02tEDt3dl50MMKlx-OoqmHSb5XJgDOpwdrhA/viewform?embedded=true"
            width="100%"
            height="915"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
