import React from 'react';

export default function ProductCartSkeleton() {
  return (
    <>
      <div className="card relative bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
        <div className="image flex justify-center items-center h-60 bg-gray-200" />
        <div className="content p-4 space-y-2">
          <div className="space-y-1">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-5 w-40 bg-gray-200 rounded" />
          </div>
          <div className="rating flex gap-2 items-center">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-8 bg-gray-200 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <div className="price space-x-2 flex items-center">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="actions absolute flex flex-col gap-4 top-4 right-4">
          <div className="h-6 w-6 bg-gray-200 rounded-full" />
          <div className="h-6 w-6 bg-gray-200 rounded-full" />
          <div className="h-6 w-6 bg-gray-200 rounded-full" />
        </div>
        <div className="discount absolute top-4 left-4">
          <div className="h-6 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </>
  );
}
