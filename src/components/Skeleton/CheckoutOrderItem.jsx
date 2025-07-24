import React from "react";

export default function CheckoutOrderItem() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-shrink-0 animate-pulse">
        <div className="flex gap-3">
          <div className="image size-14 bg-gray-200 rounded overflow-hidden flex-shrink-0" />
          <div>
            <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-4 w-12 bg-gray-300 rounded" />
          <span className="h-4 w-8 bg-gray-200 rounded" />
        </div>
      </div>
    </>
  );
}
