
import CartItemSkeleton from './CartItemSkeleton';

export default function CartSkeleton() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 my-8 gap-10 items-start">
        {/* left side skeleton */}
        <div className="col-span-2 border-1 border-gray-200 rounded-lg p-4 space-y-4">
          <div className="space-y-1 border-b-1 border-b-gray-200 py-4">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-5">
            {/* Show 3 skeleton items as example */}
            <CartItemSkeleton />
            <CartItemSkeleton />
            <CartItemSkeleton />
          </div>
        </div>
        {/* right side skeleton */}
        <div className="border-1 border-gray-200 rounded-lg px-4 py-8 space-y-5">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="space-y-4 border-b-1 border-b-gray-200 py-2">
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-14 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-5">
            <div className="bg-gray-100 px-6 py-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="bg-gray-100 px-6 py-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
