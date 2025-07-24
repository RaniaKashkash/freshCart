import React from "react";

export default function ProductInfoSkeleton() {
  return (
    <>
      <section>
        <div className="container py-10 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* left side skeleton */}
            <div className="gallery rounded-lg overflow-hidden flex justify-center items-center bg-gray-100 animate-pulse h-96">
              <div className="h-80 w-80 bg-gray-300 rounded" />
            </div>
            {/* Right side skeleton */}
            <div className="details col-span-2 bg-white p-4 space-y-4 animate-pulse">
              <div className="flex items-center justify-between">
                <span className="bg-gray-200 h-6 w-24 rounded-md" />
                <div className="flex gap-2">
                  <div className="h-6 w-6 bg-gray-300 rounded-full" />
                  <div className="h-6 w-6 bg-gray-300 rounded-full" />
                </div>
              </div>
              <div className="h-6 w-48 bg-gray-300 rounded" />
              <div className="review flex gap-2 items-center">
                <div className="h-5 w-24 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
              <div className="price flex items-center gap-3">
                <div className="h-6 w-24 bg-gray-300 rounded" />
                <div className="h-5 w-16 bg-gray-200 rounded" />
                <div className="h-5 w-16 bg-gray-200 rounded" />
              </div>
              <div className="description py-3 mt-3 border-t-1 border-gray-200/90">
                <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
              <div className="buttons flex gap-2">
                <div className="h-10 w-32 bg-gray-300 rounded" />
                <div className="h-10 w-32 bg-gray-200 rounded" />
              </div>
              <div className="border-t-2 border-gray-200 py-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="card p-2 flex gap-3 items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-24 bg-gray-100 rounded" />
                  </div>
                </div>
                <div className="card p-2 flex gap-3 items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-24 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
