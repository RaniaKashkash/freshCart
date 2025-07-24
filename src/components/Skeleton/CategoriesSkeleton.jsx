export default function CategoriesSkeleton() {
  return (
    <>
      <section className="p-10">
        <div className="container">
          <div className="header flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-col gap-2 mb-4 md:mb-0">
              <div className="h-6 w-48 bg-gray-300 rounded animate-pulse mb-2" />
              <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="relative">
                <div className="h-10 w-52 bg-gray-200 rounded-lg animate-pulse" />
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="buttons flex border border-gray-300">
                <div className="bg-gray-300 p-2 rounded animate-pulse" />
                <div className="bg-gray-200 p-2 rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
              >
                <div className="aspect-[4/3] w-full bg-gray-200" />
                <div className="p-3 text-center">
                  <div className="h-5 w-32 bg-gray-300 rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
