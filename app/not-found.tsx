import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center bg-transparent text-neutral-900 px-6">
      <div className="text-center max-w-md py-3">
        <h1 className="text-8xl font-extrabold tracking-tight text-neutral-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-neutral-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-neutral-600">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 transition
                       hover:bg-neutral-200 hover:text-neutral-100
                       focus:outline-none focus:ring-2 focus:ring-neutral-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
