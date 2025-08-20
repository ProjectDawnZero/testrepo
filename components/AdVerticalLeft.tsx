export default function AdVerticalLeft() {
  const hide = false;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">Ad Space</p>
      <div id="vertical-ad-1" className="items-center text-center"></div>
      <div id="vertical-ad-2" className="items-center text-center"></div>
    </div>
  );
}
