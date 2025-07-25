import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../../components/CartItem/CartItem";
import {
  faCartShopping,
  faShield,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CartSkeleton from "../../components/Skeleton/CartSkeleton";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import { Link } from "react-router";

export default function Cart() {
  const { cartInfo, isLoading, clearYourCart } = useContext(CartContext);

  if (isLoading) {
    return <CartSkeleton />;
  }

  return (
    <>
      <Pagemetadata title="Shopping Cart" />
      {cartInfo && (
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 my-8 gap-10 items-start">
            {/* left side */}
            <div className="lg:col-span-2  border-1 border-gray-200 rounded-lg p-4 space-y-4 ">
              <div className="flex border-b-1 border-b-gray-200 items-center justify-between">
                <div className="space-y-1  py-4">
                  <h2 className="text-xl font-semibold">Shopping Cart</h2>
                  {cartInfo.numOfCartItems > 0 && (
                    <span className="text-gray-600">
                      {cartInfo.numOfCartItems ?? 0} items in the cart
                    </span>
                  )}
                </div>
                {cartInfo?.numOfCartItems ? (
                  <div className="buttons flex gap-2">
                    <button
                      onClick={clearYourCart}
                      className="btn  text-gray-800  border-gray-300! hover:bg-gray-100 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="space-y-5">
                {cartInfo.data.products.length > 0 ? (
                  <>
                    {!isLoading
                      ? cartInfo.data.products.map((product) => {
                          return (
                            <CartItem key={product._id} productInfo={product} />
                          );
                        })
                      : ""}
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-md">
                    <p className="font-semibold">Your cart is Empty</p>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-primary-600"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Right side */}
            <div className="border-1  border-gray-200 rounded-lg px-4 py-8 space-y-5">
              <h3 className="text-lg font-semibold mb-0">Order Summary</h3>
              <div className="details *:flex *:items-center *:justify-between  space-y-4 border-b-1 border-b-gray-200 py-2">
                <div className="">
                  <span>Subtotal({cartInfo.numOfCartItems ?? 0} items)</span>
                  <span>{cartInfo.data.totalCartPrice ?? 0} EGP</span>
                </div>
                <div className="">
                  <span>Shipping</span>
                  <span>{cartInfo.data.products.length > 0 ? 70 : 0} EGP </span>
                </div>
                <div className="">
                  <span>Tax</span>
                  <span>
                    {Math.trunc(cartInfo.data.totalCartPrice * 0.14 || 0)} EGP
                  </span>
                </div>
              </div>
              <div className="totalPrice flex justify-between items-center">
                <span>Total</span>
                <span>
                  {Math.trunc(
                    cartInfo.data.totalCartPrice +
                      (cartInfo.data.products.length > 0 ? 70 : 0) +
                      (cartInfo.data.totalCartPrice * 0.14 || 0)
                  )}{" "}
                  EGP
                </span>
              </div>
              <div className="buttons flex flex-col gap-5">
                <Link to={"/checkout"}>
                  <button
                    className={`btn ${
                      !cartInfo?.numOfCartItems
                        ? "bg-red-600  hover:bg-red-700"
                        : "bg-primary-600  hover:bg-primary-700"
                    } text-white transition-colors duration-200 border-none w-full `}
                    disabled={!cartInfo?.numOfCartItems}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="btn hover:bg-gray-100 transition-colors duration-300 w-full">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div className="features *:bg-gray-100 *:px-6 *:py-4 *:rounded-lg *:space-y-2 space-y-5">
                <div className="">
                  <div className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-primary-500"
                    />
                    <span className="font-bold">Free Delivery</span>
                  </div>
                  <p>
                    Your Order qualified for free delivery.Estimated delivery
                    2-3 business days
                  </p>
                </div>

                <div className="">
                  <div className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faShield}
                      className="text-primary-500"
                    />
                    <span className="font-bold">Secure Checkout</span>
                  </div>
                  <p>
                    Your Order qualified for free delivery.Estimated delivery
                    2-3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
