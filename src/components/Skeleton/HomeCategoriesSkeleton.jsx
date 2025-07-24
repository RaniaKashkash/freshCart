import React from 'react';

export default function HomeCategoriesSkeleton() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container py-10">
          <div className="flex items-center justify-between py-8">
            <h2 className="font-bold text-xl">Shop By Category</h2>
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid xl:grid-cols-6 gap-10">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="card rounded-md bg-white shadow-lg flex flex-col gap-2 items-center justify-center p-3 animate-pulse"
              >
                <div className="size-16 rounded-full bg-gray-200" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
