import Link from 'next/link';

export default function AdHorizontalTop() {
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
      <div id="horizontal-ad-2" className="items-center self-center text-center">
        <iframe
          className="hidden self-center justify-self-center sm:block"
          width="728"
          height="90"
          scrolling="no"
          src="//tsyndicate.com/iframes2/2376de7994494fe1bcb7fbd48cbb43ed.html?extid={extid}"
        ></iframe>
        <iframe
          className="self-center justify-self-center sm:hidden"
          src="//a.magsrv.com/iframe.php?idzone=5706008&size=300x50"
          width="300"
          height="50"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
