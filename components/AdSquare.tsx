export default function AdSquare() {
  const hide = true;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">Ad Space Square</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div id="square-ad-1"> Ad 1 </div>
          <div id="square-ad-2"> Ad 2 </div>
          <div id="square-ad-3"> Ad 3 </div>
        </div>
        <div className="flex hidden flex-col sm:block">
          <div id="square-ad-4"> Ad 4 </div>
          <div id="square-ad-5"> Ad 5 </div>
          <div id="square-ad-6"> Ad 6 </div>
        </div>
      </div>
    </div>
  );
}
