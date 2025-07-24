import { useContext, useEffect, useState } from "react";
import ProductCart from "../ProductCard/ProductCart";
import { ProductsContext } from "../../context/products.context";
import FeaturedProductsSkeleton from "../Skeleton/FeaturedProductsSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedProducts() {
  const { products, isLoading } = useContext(ProductsContext);
  const [search, setsearch] = useState(null);

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-xl text-gray-800 font-bold mb-2">
            Featured Product
          </h2>
          <form action="">
            <search className="relative mb-5">
              <input
                type="text"
                name="search"
                className="form-control w-full"
                placeholder="Search for products..."
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-1/2 right-2 -translate-1/2"
              />
            </search>
          </form>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-x-5 gap-y-10 py-6">
            {products &&
              products
                .filter((p) => {
                  if (!search || search.trim() === "") return true;

                  return p?.title?.toLowerCase().includes(search.toLowerCase());
                })
                .map((product) => (
                  <ProductCart key={product.id} productInfo={product} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
