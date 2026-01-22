export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-6">
      <div className="flex flex-col items-center gap-6 text-neutral-900">
        {/* Spinner */}
        <div
          className="h-10 w-10 rounded-full border-2 border-neutral-300 border-t-neutral-900 animate-spin"
          aria-label="Loading"
        />

        {/* Text */}
        <h1 className="text-2xl font-semibold tracking-wide">
          Loading
        </h1>
      </div>
    </div>
  );
}
