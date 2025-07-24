export default function FeaturedProductsSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-xl text-gray-800 font-bold mb-2">Featured Product</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 py-6">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 animate-pulse"
              >
                <div className="h-32 w-full bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-3 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
