"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the server-side error to your console or tracking service
    console.error("SSR Execution Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Error Icon */}
        <p className="text-base font-semibold text-blue-600">500</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Server-side error occurred
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we had some trouble fetching the data from the Express server.
          Please try again or head back home.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => reset()}
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            Try again
          </button>

          <Link
            href="/"
            className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Technical Details (Only visible in Dev mode) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-10 text-left p-4 bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-xs font-mono text-red-500 overflow-auto whitespace-pre-wrap">
              <strong>Error Digest:</strong> {error.digest} <br />
              <strong>Message:</strong> {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
