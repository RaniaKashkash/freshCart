import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllProduct } from "../../services/products-service";
import Loading from "../Loading/Loading";
import ProductCart from "../ProductCard/ProductCart";
import BrandproductsSkeleton from "../Skeleton/BrandproductsSkeleton";

export default function BrandProduct() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState(null);

  async function getBrandsProduct({ id }) {
    try {
      setIsLoading(true);
      const response = await getAllProduct({ brand: id });
      if (response.success) {
        console.log(response);
      }
      setIsLoading(false);

      setProducts(response.data.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    getBrandsProduct({ id });
  }, []);
  if (isLoading) return <BrandproductsSkeleton />;
  return (
    <>
      {products && products.length > 0 ? (
        <div className="container py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCart productInfo={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-10">
          <span className="text-5xl mb-4">🛒</span>
          <p className="text-xl font-semibold">
            Nothing to see here… yet! More products coming soon
          </p>
          <p className="text-sm mt-2">
            Try exploring other brands or come back later.
          </p>
        </div>
      )}
    </>
  );
}
