import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/products-service";
import ProductCart from "../ProductCard/ProductCart";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import RelatedProductsSkeleton from "../Skeleton/RelatedProductsSkeleton";

export default function RelatedProduct({ productDetails }) {
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { category } = productDetails;

  async function fetchproductByCategory() {
    try {
      const response = await getAllProduct({ category: category._id });
      if (response.success) {
        setRelatedProduct(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
    }
  }

  useEffect(() => {
    fetchproductByCategory();
  }, []);
  if (isLoading) return <RelatedProductsSkeleton />;

  return (
    <>
      <section>
        <div className="container py-10 ">
          <div className="header">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl text-gray-800 font-bold mb-2 ">
                You May Also Like
              </h2>
              <div className="arrows text-md flex gap-2 text-primary-600 *:bg-gray-100 *:size-8 *:rounded-full">
                <button className="prev-btn">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="next-btn">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>

          {relatedProduct.length > 0 && (
            <div className="w-full">
              <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                spaceBetween={5}
                loop={true}
              >
                {relatedProduct.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCart productInfo={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
