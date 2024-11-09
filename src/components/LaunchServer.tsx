export default function LaunchServer() {
  function handleRetry() {
    // TODO: customizable location
    window.electron.loadUrl("http://127.0.0.1:6969");
  }
  return (
    <div class="flex h-full flex-col items-center justify-center gap-4 p-4">
      <p>Server is unavailable</p>
      <button
        onClick={handleRetry}
        class="rounded-md bg-white px-4 py-2 text-black transition-colors hover:bg-neutral-200"
      >
        Try again
      </button>
    </div>
  );
}
