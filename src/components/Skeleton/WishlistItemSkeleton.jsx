export default function WishlistItemSkeleton() {
   return (
    <div className="item flex justify-between border-b border-gray-300 p-4 animate-pulse">
      <div className="flex items-center gap-4 w-full">
        <div className="bg-gray-200 size-24 rounded-lg overflow-hidden"></div>
        <div className="details space-y-2 flex-1">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            <div className="h-3 bg-gray-300 rounded w-6"></div>
            <div className="h-3 bg-gray-300 rounded w-8"></div>
          </div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <div className="buttons grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="h-10 bg-gray-300 rounded w-24"></div>
          <div className="h-10 bg-gray-300 rounded w-10"></div>
        </div>
      </div>
    </div>
  );
}
