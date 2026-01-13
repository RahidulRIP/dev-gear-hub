"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Critical Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg">
          <h1 className="text-6xl font-bold text-red-600 mb-4">
            CRITICAL ERROR
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            The entire application crashed!
          </h2>

          <p className="text-gray-600 mb-6 italic text-sm">
            Details: {error?.message || "Internal Root Error"}
          </p>

          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all"
          >
            RELOAD APPLICATION
          </button>
        </div>
      </body>
    </html>
  );
}
