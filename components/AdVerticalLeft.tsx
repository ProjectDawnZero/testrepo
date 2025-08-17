export default function AdVerticalLeft() {
  const hide = true;
  return (
    <div hidden={hide} className="mt-6 rounded-lg border p-4">
      <p className="text-center">Ad Space</p>
      <div id="vertical-ad-1"> left ad 1</div>
      <div id="vertical-ad-2"> left ad 2</div>
    </div>
  );
}
