import { Link } from "react-router";
import ProductCart from "../ProductCard/ProductCart";
import { useContext, useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/calcCounterDown-utils";
import { ProductsContext } from "../../context/products.context";
import HomeDealsSkeleton from "../Skeleton/HomeDealsSkeleton";
export default function HomeDeals() {
  const {products,isLoading,error} = useContext(ProductsContext);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeleft = getTimeLeft();
      setTimeLeft(newTimeleft);
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }
  const deals = products
    ?.filter((product) => product.priceAfterDiscount)
    .slice(0, 5);
  return (
    <>
      <section>
        <div className="container py-10">
          <div className="header flex justify-between items-center">
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold mb-2">
                Deals of the Day
              </h2>
              <div className="counter flex items-center gap-1">
                <p>Offers end in</p>
                <span className="size-8 text-sm flex justify-center items-center rounded-md bg-gray-900 text-white ">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="size-8 text-sm flex justify-center items-center rounded-md bg-gray-900 text-white ">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="size-8 text-sm flex justify-center items-center rounded-md bg-gray-900 text-white ">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
            {deals?.map((product) => (
              <ProductCart key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
