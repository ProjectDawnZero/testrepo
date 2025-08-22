import Link from 'next/link';

export default function AdSquare() {
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
      <div className="flex flex-col">
        <div className="flex flex-row items-center text-center">
          <div id="square-ad-1" className="items-center text-center">
            <iframe
              className="m-2 self-center justify-self-center"
              src="//a.magsrv.com/iframe.php?idzone=5706028&size=300x250"
              width="300"
              height="250"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>
          <div id="square-ad-2" className="items-center text-center">
            <iframe
              className="m-2 self-center justify-self-center"
              src="//a.magsrv.com/iframe.php?idzone=5706030&size=300x250"
              width="300"
              height="250"
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>
          {/* <div id="square-ad-3" className="items-center text-center"></div> */}
        </div>
        <div className="flex flex-row items-center text-center">
          <div id="square-ad-4" className="items-center text-center"></div>
          <div id="square-ad-5" className="items-center text-center"></div>
          <div id="square-ad-6" className="items-center text-center"></div>
        </div>
      </div>
    </div>
  );
}
