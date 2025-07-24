import React from "react";

export default function SearchProductSkeleton() {
  return (
    <>
      <section className="py-10">
        <div className="container space-y-5">
          <form>
            <div className="relative">
              <input
                type="text"
                className="form-control w-full"
                placeholder="Search for products..."
                disabled
              />
              <span className="absolute top-1/2 right-2 -translate-y-1/2 h-5 w-5 bg-gray-300 rounded-full animate-pulse" />
            </div>
          </form>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 py-6">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full animate-pulse"
              >
                <div className="h-24 w-24 bg-gray-300 rounded mb-3" />
                <div className="h-4 w-20 bg-gray-300 rounded mb-2" />
                <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
