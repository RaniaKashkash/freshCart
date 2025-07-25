import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/calcDiscount-utils";
import Ratings from "../Ratings/Ratings";
import {
  faCartShopping,
  faRotateRight,
  faShareNodes,
  faTruck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { AuthContext } from "../../context/Auth.context";
import { useNavigate } from "react-router";
import ProductInfoSkeleton from "../../components/Skeleton/ProductInfoSkeleton";
import { wishlistContext } from "../../context/whishlist.context";

export default function ProductInfo({ productDetails }) {
  const {
    id,
    images,
    title,
    category,
    description,
    price,
    priceAfterDiscount,
    quantity,
    ratingsAverage,
    ratingsQuantity,
  } = productDetails;
  const {
    handleAddProductToCart,
    cartInfo,
    isLoading,
    handleDeleteProductFromCart,
  } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const { token } = useContext(AuthContext);
  const { handleAddWishlistProduct, wishlistProduct, removeWishlistItem } =
    useContext(wishlistContext);

  const [isFavourite, setIsFavourite] = useState(
    wishlistProduct?.data.some((product) => product.id === id)
  );

  const handleToggleFavorite = () => {
    if (isFavourite) {
      removeWishlistItem({ id });
    } else {
      handleAddWishlistProduct({ id });
    }
    setIsFavourite(!isFavourite);
  };
  if (isLoading) return <ProductInfoSkeleton />;
  const navigate = useNavigate();

  useEffect(() => {
    const products = cartInfo?.data?.products;

    if (Array.isArray(products)) {
      const result = products.some((product) => product?.product?.id === id);

      if (result) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    }
  }, [cartInfo, id]);

  return (
    <>
      <section>
        <div className="container py-10 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* left side */}
            <div className="galleryrounded-lg overflow-hidden ">
              <ReactImageGallery
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                items={images.map((image) => {
                  return { original: image, thumbnail: image };
                })}
              ></ReactImageGallery>
            </div>
            {/* Right side */}
            <div className="details col-span-2  bg-white p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`${
                    quantity > 0
                      ? "bg-primary-200 text-primary-800"
                      : "bg-red-200 text-red-800"
                  } py-1 px-2 text-[12px] rounded-md`}
                >
                  {quantity ? "In Stock" : "Sold Out"}
                </span>
                <div className="flex gap-2 *:cursor-pointer *:hover:text-primary-500 *:transition-colors *:duration-200 ">
                  <FontAwesomeIcon
                    onClick={() => {
                      token ? handleToggleFavorite() : navigate("/login");
                    }}
                    icon={faHeart}
                    className={isFavourite ? "text-red-600" : "text-gray-400"}
                  />
                </div>
              </div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <div className="review flex gap-2 items-center">
                <Ratings ratings={ratingsAverage} />
                <div className="">
                  <span>{ratingsAverage}</span>
                  <span>({ratingsQuantity} reviews)</span>
                </div>
              </div>
              <div className="price flex items-center gap-3">
                <span className="font-semibold text-xl">
                  {priceAfterDiscount || price} EGP
                </span>
                {priceAfterDiscount ? (
                  <>
                    <del className="text-gray-500">{price}EGP</del>

                    <span className="bg-red-200 text-red-800 py-1 px-2 text-[12px] rounded-md">
                      Save {calcDiscount(price, priceAfterDiscount)}%
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="description py-3 mt-3 border-t-1 border-gray-200/90">
                {description}
              </div>

              <div className="buttons flex *:grow-1 gap-2 *:font-bold">
                {inCart ? (
                  <button
                    className={
                      "btn bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                    }
                    onClick={() => {
                      handleDeleteProductFromCart({ id });
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="ms-2">Remove from to cart</span>
                  </button>
                ) : (
                  <button
                    className={
                      "btn bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                    }
                    onClick={() => {
                      token
                        ? handleAddProductToCart({ id })
                        : navigate("/login");
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="ms-2">Add to cart</span>
                  </button>
                )}
              </div>

              <div className="">
                <div className="p-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 *:flex *:justify-start *:items-center *:gap-4 *:px-4 *:py-2">
                  <div className="card p-2 ">
                    <div className="icon  *:text-xl text-primary-700 flex justify-center items-center  rounded-full min-w-12 min-h-12  bg-primary-200">
                      <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className="content">
                      <h2 className="font-medium">Free Delivery</h2>
                      <span className="text-sm text-gray-500">
                        Free shipping foe orders over 50 EGP
                      </span>
                    </div>
                  </div>
                  <div className="card p-2 ">
                    <div className="icon  *:text-xl text-primary-700 flex justify-center items-center  rounded-full min-w-12 min-h-12 bg-primary-200">
                      <FontAwesomeIcon icon={faRotateRight} />
                    </div>
                    <div className="content">
                      <h2 className="font-medium">30 Days return</h2>
                      <span className="text-sm text-gray-500">
                        Satisfaction guaranteed or money back
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
