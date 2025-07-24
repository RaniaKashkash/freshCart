import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../Ratings/Ratings";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { wishlistContext } from "../../context/whishlist.context";
import { CartContext } from "../../context/cart.context";
export default function WishlistItem({ productInfo }) {
  const {
    id,
    imageCover,
    title,
    category,
    price,
    ratingsAverage,
    ratingsQuantity,
  } = productInfo;
  const { handleDeleteWishlistproduct, removeWishlistItem } =
    useContext(wishlistContext);
  const { handleAddProductToCart } = useContext(CartContext);

  return (
    <>
      <div
        className={`item flex flex-col sm:flex-row justify-between space-y-4  border-b-1 border-b-gray-300 p-4`}
      >
        <div className="flex items-center gap-3 ">
          <div className="image  w-24 h-24 min-w-24 min-h-24 rounded-lg overflow-hidden">
            <Link to={`/product/${id}`}>
              <img
                src={imageCover}
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="details space-y-1">
            <span className="text-[13px] text-gray-500">{category.name}</span>
            <h2 className="font-semibold line-clamp-1">{title}</h2>
            <div className="flex items-center gap-2">
              <Ratings ratings={ratingsAverage} />
              <span className="text-[12px] text-gray-500">
                {ratingsAverage}
              </span>
              <span className="text-[12px] text-gray-500">
                ({ratingsQuantity})
              </span>
            </div>
            <div className="">
              <span className="">{price} EGP</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-between ">
          <button
            onClick={() => {
              handleAddProductToCart({ id });
              removeWishlistItem({ id });
            }}
            className="btn w-[120px] bg-primary-600 text-white !border-primary-600 px-3 py-1"
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              handleDeleteWishlistproduct({ id });
            }}
            className=" px-3 py-1 rounded"
          >
            <FontAwesomeIcon icon={faTrash} className="text-red-600 text-lg" />
          </button>
        </div>
      </div>

      {/* <div className="flex-col  min-w-[150px]"> */}

      {/* </div> */}
    </>
  );
}
