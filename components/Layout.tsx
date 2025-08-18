import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="place-self-center">
      <header className="bg-rose-600 p-4 text-white">
        <nav className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
          <Link href="/" className="h-full rounded-xl bg-white text-xl font-bold">
            <Image
              className="rounded-xl"
              width={100}
              height={100}
              alt="Gooning Guide"
              src={'/logo.png'}
            />
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
            <Link href="/compliance" className="mr-4 hover:underline">
              18 U.S.C. § 2257
            </Link>
            <Link href="/tos" className="mr-4 hover:underline">
              Terms
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="mt-12 bg-rose-600 p-6 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href={'/rta'}>
            <Image
              width={120}
              height={60}
              alt="RTA"
              src={'/images/rta_logo.gif'}
              className="mb-4"
            />
          </Link>
          <p className="text-sm">© {new Date().getFullYear()} Gooning Guide</p>
          <div className="flex flex-col items-center text-sm sm:flex-row">
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
            <Link href="/compliance" className="mr-4 hover:underline">
              18 U.S.C. § 2257
            </Link>
            <Link href="/tos" className="mr-4 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
