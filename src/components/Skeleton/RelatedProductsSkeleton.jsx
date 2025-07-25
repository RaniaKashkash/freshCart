export default function RelatedProductsSkeleton() {
  return (
    <>
      <section>
        <div className="container py-10">
          <div className="header">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl text-gray-800 font-bold mb-2">
                You May Also Like
              </h2>
              <div className="arrows text-md flex gap-2 text-primary-600 *:bg-gray-100 *:size-8 *:rounded-full">
                <button className="prev-btn" disabled />
                <button className="next-btn" disabled />
              </div>
            </div>
          </div>

          <div className="flex gap-5 w-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-40 animate-pulse"
              >
                <div className="h-24 w-24 bg-gray-300 rounded mb-3" />
                <div className="h-4 w-20 bg-gray-300 rounded mb-2" />
                <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
