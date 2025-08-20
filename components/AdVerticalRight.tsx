import Link from 'next/link';

export default function AdVerticalRight() {
  const hide = false;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">
        Ads by{' '}
        <Link className="underline" target="_blank" href={'https://www.exoclick.com/'}>
          ExoClick
        </Link>
      </p>
      <div id="vertical-ad-3" className="items-center text-center">
        <iframe
          className="hidden self-center justify-self-center sm:block"
          src="//a.magsrv.com/iframe.php?idzone=5706022&size=160x600"
          width="160"
          height="600"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
      <div id="vertical-ad-4" className="items-center text-center">
        <iframe
          className="mt-5 hidden self-center justify-self-center sm:block"
          src="//a.magsrv.com/iframe.php?idzone=5706024&size=160x600"
          width="160"
          height="600"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
