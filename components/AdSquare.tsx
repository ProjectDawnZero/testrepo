export default function AdSquare() {
  const hide = false;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">Ad Space</p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div id="square-ad-1" className="items-center text-center"></div>
          <div id="square-ad-2" className="items-center text-center"></div>
          <div id="square-ad-3" className="items-center text-center"></div>
        </div>
        <div className="flex flex-row">
          <div id="square-ad-4" className="items-center text-center"></div>
          <div id="square-ad-5" className="items-center text-center"></div>
          <div id="square-ad-6" className="items-center text-center"></div>
        </div>
      </div>
    </div>
  );
}
