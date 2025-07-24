import React from "react";
import CheckoutOrderItem from "./CheckoutOrderItem";

export default function CheckoutSkeleton() {
  return (
    <>
      <section className="bg-gray-100/30">
        <div className="container max-w-5xl py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left side skeleton */}
            <div className="col-span-2">
              <div>
                <div className="bg-white rounded-lg p-4 shadow-sm mb-6 animate-pulse">
                  <div className="h-6 w-40 bg-gray-300 rounded mb-4" />
                  <div className="h-5 w-64 bg-gray-200 rounded mb-3" />
                  <div className="h-5 w-56 bg-gray-200 rounded mb-3" />
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg p-4 shadow-sm mb-6 animate-pulse">
                  <div className="h-6 w-40 bg-gray-300 rounded mb-4" />
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                  </div>
                  <div className="h-10 w-32 bg-gray-300 rounded mt-6" />
                </div>
              </div>
            </div>
            {/* Right side skeleton */}
            <div className="shadow-md bg-white rounded-lg px-4 py-8 space-y-5 animate-pulse">
              <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
              <div className="space-y-3 py-5 border-b-1 border-gray-200">
                {[...Array(3)].map((_, i) => (
                  <CheckoutOrderItem key={i} />
                ))}
              </div>
              <div className="details space-y-4 border-b-1 border-b-gray-200 py-4">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>
              <div className="totalPrice flex justify-between items-center">
                <span className="h-4 w-16 bg-gray-200 rounded" />
                <span className="h-4 w-24 bg-gray-300 rounded" />
              </div>
              <div className="buttons flex flex-col grow-1 gap-5">
                <div className="h-10 w-full bg-gray-200 rounded" />
              </div>
              <div className="features space-y-5">
                <div className="bg-gray-100 px-6 py-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-gray-300 rounded-full" />
                    <span className="h-4 w-24 bg-gray-200 rounded" />
                  </div>
                  <div className="h-3 w-32 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
