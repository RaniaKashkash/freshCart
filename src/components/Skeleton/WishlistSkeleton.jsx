import WishlistItemSkeleton from "./WishlistItemSkeleton";

export default function WishlistSkeleton() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 my-8 gap-10 items-start">
          <div className="border-1 border-gray-200 rounded-lg p-4 space-y-4">
            <div className="space-y-1 border-b-1 border-b-gray-200 py-4">
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="space-y-5">
              {[...Array(6)].map((_, idx) => (
                <WishlistItemSkeleton key={idx} />
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 border border-gray-200 rounded bg-gray-200 animate-pulse"
                  style={{ width: 32, height: 32 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
