import Link from 'next/link';

export default function AdHorizontalBottom() {
  const hide = false;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">
        {/* Ads by{' '}
        <Link className="underline" target="_blank" href={'https://www.exoclick.com/'}>
          ExoClick
        </Link> */}
        Ad Space
      </p>
      <div id="horizontal-ad-1" className="items-center text-center">
        <iframe
          className="hidden self-center justify-self-center sm:block"
          src="//a.magsrv.com/iframe.php?idzone=5706010&size=900x250"
          width="900"
          height="250"
          scrolling="no"
          frameBorder="0"
        ></iframe>
        <iframe
          className="self-center justify-self-center sm:hidden"
          src="//a.magsrv.com/iframe.php?idzone=5706014&size=300x100"
          width="300"
          height="100"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
