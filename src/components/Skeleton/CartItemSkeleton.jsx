import React from 'react';

export default function CartItemSkeleton() {
  return (
    <div
      className="item flex justify-between animate-pulse opacity-70"
      aria-hidden="true"
      role="status"
    >
      <div className="flex items-center gap-4">
        <div className="image bg-gray-200 size-20 rounded-lg overflow-hidden object-cover" />
        <div className="details flex flex-col gap-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-3 w-8 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <div className="border-gray-300 border flex items-center gap-2 p-1 rounded">
          <div className="h-8 w-8 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
          <div className="h-8 w-8 bg-gray-200 rounded" />
        </div>
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-8 w-8 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
