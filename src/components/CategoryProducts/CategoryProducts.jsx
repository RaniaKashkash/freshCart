import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useParams } from "react-router";
import ProductCart from "../../components/ProductCard/ProductCart";
import CategoriesProductsSkeleton from "../Skeleton/CategoriesProductsSkeleton";

export default function Categories() {
  const [products, setProduct] = useState(null);
  const { id } = useParams();

  const { getProductsByCategory, isLoading, setIsLoading, setError } =
    useContext(CategoriesContext);

  async function handleGetProducts({ id }) {
    try {
      setIsLoading(true);
      const result = await getProductsByCategory({ id });
      setIsLoading(false);
      setProduct(result.data.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    handleGetProducts({ id });
  }, [id]);

  if (isLoading) return <CategoriesProductsSkeleton />;

  return (
    <>
      {products&&!isLoading && products.length > 0 ? (
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
          <p className="text-xl font-semibold text-center">
            Nothing to see here… yet! More products coming soon
          </p>
          <p className="text-sm mt-2">
            Try exploring other categories or come back later.
          </p>
        </div>
      )}
    </>
  );
}
