export default function CategoriesProductsSkeleton() {
  return (
    <>
      <div className="container py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full animate-pulse"
            >
              <div className="h-24 w-24 bg-gray-300 rounded mb-3" />
              <div className="h-4 w-20 bg-gray-300 rounded mb-2" />
              <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
