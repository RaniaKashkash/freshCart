import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/calcDiscount-utils";
import {
  faCirclePlus,
  faCodeCompare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Ratings from "../Ratings/Ratings";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { AuthContext } from "../../context/Auth.context";
import { wishlistContext } from "../../context/whishlist.context";

export default function ProductCart({ productInfo }) {
  const { handleAddProductToCart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const { handleAddWishlistProduct, wishlistProduct, removeWishlistItem } =
    useContext(wishlistContext);
  const navigate = useNavigate();

  const {
    id,
    title,
    category,
    imageCover,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
  } = productInfo;

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

  return (
    <>
      <div className="card relative bg-white rounded-xl shadow-md overflow-hidden">
        <div className="image">
          <Link to={`/product/${id}`} className="block">
            <img src={imageCover} alt="" className="h-60 mx-auto" />
          </Link>
        </div>
        <div className="content p-4 space-y-2">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">{category.name}</span>

            <h2 className="font-semibold ">
              <Link to={`/product/${id}`} className="line-clamp-1">
                {title}
              </Link>
            </h2>
          </div>
          <div className="rating flex gap-1 items-center">
            <Ratings ratings={ratingsAverage} />
            <span>{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="price space-x-2">
              <span className=" text-primary-600">
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </span>
              {priceAfterDiscount && (
                <del className="text-gray-500">{price} EGP</del>
              )}
            </div>
            <button
              className="*:hover:text-primary-700 *:transition-colors *:duration-200"
              onClick={() => {
                token ? handleAddProductToCart({ id }) : navigate("/login");
              }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-3xl text-primary-600"
              />
            </button>
          </div>
        </div>

        <div className="actions text-gray-500 absolute flex flex-col gap-4 top-4 right-4 *:hover:text-primary-500 transition-colors duration-200">
          <button onClick={handleToggleFavorite}>
            <FontAwesomeIcon
              icon={faHeart}
              className={isFavourite ? "text-red-600" : "text-gray-400"}
            />
          </button>
          <button>
            <Link to={`/product/${id}`}>
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>
        <div className="discount absolute top-4 left-4">
          {priceAfterDiscount && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md">
              -{calcDiscount(price, priceAfterDiscount)}%
            </span>
          )}
        </div>
      </div>
    </>
  );
}
