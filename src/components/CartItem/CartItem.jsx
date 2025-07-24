import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../Ratings/Ratings";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router";
export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { id, category, imageCover, ratingsAverage, title } = product;
  const {
    handleGetCartItems,
    handleDeleteProductFromCart,
    handleUpdateProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [counter, setCounter] = useState(count);

  async function handleUpdating({ id, count }) {
    console.log(count);

    if (count == 0) {
      removeProductFromCart({ id });
    }
    setIsUpdating(true);
    await handleUpdateProductQuantity({ id, count });
    await handleGetCartItems();

    setIsUpdating(false);
  }
  return (
    <>
      <div
        className={`item flex flex-col md:flex-row justify-between gap-8 ${
          isUpdating && "opacity-70"
        }`}
      >
        <div className="flex items-center gap-4  md:w-[300px] ">
          <div className="image bg-red-50 w-20 h-20 min-w-20 min-h-20 rounded-lg overflow-hidden object-cover">
            <Link to={`/product/${id}`}>
              <img src={imageCover} alt="" />
            </Link>
          </div>
          <div className="details ">
            <h2 className="line-clamp-1">{title}</h2>
            <span className="text-[13px] text-gray-500">{category.name}</span>
            <div className="flex items-center gap-2">
              <Ratings ratings={ratingsAverage} />
              <span className="text-[12px] text-gray-500">
                {ratingsAverage}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2  md:w-[250px] ">
          <div className="border-gray-300 border-1 *:py-1 *:px-2 w-[85px] items-center justify-between">
            <button
              onClick={() => {
                setCounter(counter - 1);
                handleUpdating({ id, count: counter - 1 });
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{counter}</span>
            <button
              onClick={() => {
                setCounter(counter + 1);
                handleUpdating({ id, count: counter + 1 });
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <span>{price * counter} EGP</span>
          <button
            onClick={() => {
              handleDeleteProductFromCart({ id });
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="text-red-600" />
          </button>
        </div>
      </div>
    </>
  );
}
