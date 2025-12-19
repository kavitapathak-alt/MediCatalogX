"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">
        Search Results
      </h1>

      {query ? (
        <p className="text-gray-600">
          Showing results for:{" "}
          <span className="font-semibold text-blue-700">
            "{query}"
          </span>
        </p>
      ) : (
        <p className="text-gray-500">No search query found.</p>
      )}

      {/* Yahin pe API se products fetch kar sakte ho */}
    </div>
  );
}
