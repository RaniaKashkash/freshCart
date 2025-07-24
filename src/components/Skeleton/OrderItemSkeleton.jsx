export default function OrderItemSkeleton() {
  return (
    <>
      <div className="orders-item bg-bg-gray bg-gray-100/60 border-1 border-gray-300 rounded-md my-3 p-4 animate-pulse">
        <div className="header">
          <div className="space-y-3">
            <div className="order-details flex justify-between">
              <div>
                <div className="order-no flex items-center gap-2">
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                </div>
                <div className="h-3 w-32 bg-gray-200 rounded mt-2" />
              </div>
              <div className="flex gap-3">
                <div className="h-4 w-20 bg-gray-300 rounded" />
                <div className="h-4 w-24 bg-gray-300 rounded" />
              </div>
            </div>

            <div className="order-items bg-white p-3 flex justify-between items-start">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="size-14 bg-gray-200 rounded" />
                    <div className="h-4 w-6 bg-gray-300 rounded mt-1" />
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-r-2 border-gray-300 flex gap-16 px-4">
                <div>
                  <div className="h-3 w-10 bg-gray-200 rounded mb-1" />
                  <div className="h-4 w-8 bg-gray-300 rounded" />
                </div>
                <div>
                  <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                </div>
                <div>
                  <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="buttons flex flex-col gap-2">
                <div className="h-8 w-24 bg-gray-300 rounded" />
                <div className="h-8 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
