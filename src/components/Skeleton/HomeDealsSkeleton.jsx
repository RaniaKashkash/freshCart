import React from 'react';

export default function HomeDealsSkeleton() {
  return (
    <>
      <section>
        <div className="container py-10">
          <div className="header flex justify-between items-center">
            <div>
              <h2 className="text-xl text-gray-800 font-bold mb-2">
                Deals of the Day
              </h2>
              <div className="counter flex items-center gap-1">
                <p className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                <span className="size-8 rounded-md bg-gray-200 animate-pulse" />
                <span>:</span>
                <span className="size-8 rounded-md bg-gray-200 animate-pulse" />
                <span>:</span>
                <span className="size-8 rounded-md bg-gray-200 animate-pulse" />
              </div>
            </div>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 animate-pulse"
              >
                <div className="h-32 w-full bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-3 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
