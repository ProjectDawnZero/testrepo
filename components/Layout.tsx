import Link from 'next/link';
import React from 'react';
import AdHorizontalTop from './AdHorizontalTop';
import AdHorizontalBottom from './AdHorizontalBottom';
import AdVerticalLeft from './AdVerticalLeft';
import AdVerticalRight from './AdVerticalRight';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="place-self-center">
      <header className="bg-gray-800 p-4 text-white">
        <nav className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
          <Link href="/" className="text-xl font-bold">
            Adult Directory
          </Link>
          <div className="flex flex-col items-center sm:flex-row">
            <Link href="/faq" className="mr-4 hover:underline">
              FAQ
            </Link>
            <Link href="/about" className="mr-4 hover:underline">
              About
            </Link>
            <Link href="/copyright" className="mr-4 hover:underline">
              Copyright
            </Link>
            <Link href="/disclaimer" className="mr-4 hover:underline">
              Disclaimer
            </Link>
            <Link href="/privacy" className="mr-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/compliance" className="hover:underline">
              18 U.S.C. § 2257
            </Link>
          </div>
        </nav>
      </header>

      <AdHorizontalTop />

      <main className="min-h-screen">
        <div className="flex flex-row">
          <AdVerticalLeft />
          {children}
          <AdVerticalRight />
        </div>
      </main>

      <AdHorizontalBottom />

      <footer className="mt-12 bg-gray-900 p-6 text-gray-300">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Adult Directory</p>
          <div className="flex flex-col items-center text-sm sm:flex-row">
            <Link href="/ratings" className="mr-4 hover:underline">
              Ratings
            </Link>
            <Link href="/tos" className="mr-4 hover:underline">
              Terms
            </Link>
            <Link href="/copyright" className="mr-4 hover:underline">
              Copyright
            </Link>
            <Link href="/disclaimer" className="mr-4 hover:underline">
              Disclaimer
            </Link>
            <Link href="/faq" className="mr-4 hover:underline">
              FAQ
            </Link>
            <Link href="/about" className="mr-4 hover:underline">
              About
            </Link>
            <Link href="/privacy" className="mr-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/compliance" className="hover:underline">
              18 U.S.C. § 2257
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
