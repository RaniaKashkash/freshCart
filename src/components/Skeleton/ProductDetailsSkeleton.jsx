import ProductInfoSkeleton from "./ProductInfoSkeleton";
import RelatedProductsSkeleton from "./RelatedProductsSkeleton";

export default function ProductDetailsSkeleton() {
  return (
    <>
      <div className="bg-gray-50">

        <ProductInfoSkeleton />
        {/* Tabs skeleton placeholder */}
        <div className="container py-6">
          <div className="bg-white rounded-md p-6 animate-pulse space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-full bg-gray-200 rounded mb-2" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        </div>
        <RelatedProductsSkeleton />
      </div>
    </>
  );
}
