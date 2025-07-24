import React from "react";

export default function BrandsSkeleton() {
  return (
    <>
      <section className="p-10">
        <div className="container">
          <div className="grid xl:grid-cols-4 gap-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
              >
                <div>
                  <div className="aspect-[4/3] w-full bg-gray-200" />
                  <div className="p-3 text-center">
                    <div className="h-5 w-32 bg-gray-300 rounded mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
