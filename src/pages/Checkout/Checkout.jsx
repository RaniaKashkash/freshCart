import { faLock } from "@fortawesome/free-solid-svg-icons";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutOrderItem from "../../components/CheckoutOrderItem/CheckoutOrderItem";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import {
  faCreditCard,
  faInfoCircle,
  faMoneyBill1Wave,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { OrdersContext } from "../../context/orders.context";
import { useNavigate } from "react-router";
import CheckoutSkeleton from "../../components/Skeleton/CheckoutSkeleton";
import { toast } from "react-toastify";

export default function Checkout() {
  const { createNewOrder, ordersInfo, checkout, isLoading } =
    useContext(OrdersContext);
  const { cartInfo } = useContext(CartContext);
  console.log(cartInfo);

  const navigate = useNavigate();

  const [selected, setSelected] = useState("cash");
  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const validationSchema = yup.object({
    details: yup.string().required("Details is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "We accept egyptain phone number only"),
    city: yup.string().required("City is required"),
  });

  async function checkOutDetails(values) {
    try {
      if (selected == "cash") {
        await createNewOrder(cartInfo?.cartId, values);
        if (ordersInfo) {
          setTimeout(() => {
            navigate("/orders");
          }, 2000);
        }
      } else if (selected == "online") {
        const response = await checkout(
          cartInfo?.cartId,
          `${window.location.origin}`,
          values
        );

        if (response.success) {
          window.location.href = response.data.session.url;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema,
    onSubmit: checkOutDetails,
  });

  if (isLoading) return <CheckoutSkeleton />;
  return (
    <>
      <Pagemetadata title="Check Out" />
      <section className="bg-gray-100/30">
        <div className="container max-w-5xl py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3   gap-10 items-start">
            <div className="col-span-2">
              <div className="">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                  <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

                  {/* Cash on Delivery */}
                  <div
                    className={`border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                      selected === "cash"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelected("cash")}
                  >
                    <div className="flex  justify-between items-start">
                      <form className="flex gap-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={selected === "cash"}
                            onChange={() => setSelected("cash")}
                            className="mt-1 accent-primary-600"
                          />
                        </label>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-md font-semibold">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-green-600 "
                            />
                            Cash on Delivery
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            Pay when your order arrives
                          </p>
                          {selected == "cash" && (
                            <div className="flex gap-2 items-center text-green-600 text-xs mt-1 font-medium bg-primary-200 rounded-md p-1">
                              <FontAwesomeIcon icon={faInfoCircle} />
                              <p>
                                Please keep exact change ready for hassle-free
                                delivery
                              </p>
                            </div>
                          )}
                        </div>
                      </form>
                      <p className="text-xs text-right font-medium text-primary-500">
                        No extra charges
                      </p>
                    </div>
                  </div>

                  {/* Online Payment */}

                  <div
                    className={`border rounded-lg p-4 mb-3 cursor-pointer transition-all ${
                      selected === "online"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelected("online")}
                  >
                    <div className="flex  justify-between items-start">
                      <div className="flex gap-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="payment"
                            value="online"
                            checked={selected === "online"}
                            onChange={() => setSelected("online")}
                            className="mt-1 accent-primary-600"
                          />
                        </label>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-md font-semibold">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-green-600 "
                            />
                            Online Payment
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            Pay securely with card or digital wallet
                          </p>
                          {selected == "online" && (
                            <div className="flex gap-2 items-center text-green-600 text-xs mt-1 font-medium bg-primary-200 rounded-md p-1">
                              <FontAwesomeIcon icon={faInfoCircle} />
                              <p>
                                you will be redirected to secure payment gateway
                                to complete your transaction
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-right font-medium text-primary-500">
                        Recommended
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-6 ">
                  <h2 className="text-lg font-semibold py-3 ">
                    Shipping Address
                  </h2>
                  <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-3 details ">
                      <label htmlFor="details">
                        Details<span className=" text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          className="form-control px-8! w-full text-sm"
                          type="text"
                          name="details"
                          id="details"
                          placeholder="Enter your details"
                          value={formik.values.details}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                        />
                      </div>
                      {formik.touched.details && formik.errors.details && (
                        <p className="text-red-500">*{formik.errors.details}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 phone">
                      <label htmlFor="phone">
                        Phone Number<span className=" text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          className="form-control px-8! w-full text-sm"
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="+2 010 1253 6985"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500">*{formik.errors.phone}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 city ">
                      <label htmlFor="city">
                        City<span className=" text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          className="form-control px-8! w-full text-sm"
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Enter your city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                        />
                      </div>
                      {formik.touched.city && formik.errors.city && (
                        <p className="text-red-500">*{formik.errors.city}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
                    >
                      Procced To Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className=" shadow-md bg-white rounded-lg px-4 py-8 space-y-5">
              <h3 className="text-lg font-semibold mb-0">Order Summary</h3>
              <div className="">
                <div className="summary">
                  <div className="card space-y-3 py-5 border-b-1 border-gray-200">
                    {cartInfo?.data?.products.map((product) => {
                      return (
                        <div className="" key={product?.product.id}>
                          <CheckoutOrderItem
                            key={product?.product?.id}
                            productDetails={product}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="details *:flex *:items-center *:justify-between  space-y-4 border-b-1 border-b-gray-200 py-4">
                  <div className="">
                    <span>Subtotal({cartInfo?.numOfCartItems ?? 0} items)</span>
                    <span>{cartInfo?.data?.totalCartPrice ?? 0} EGP</span>
                  </div>
                  <div className="">
                    <span>Shipping</span>
                    <span>{cartInfo?.numOfCartItems ? 70 : 0} EGP </span>
                  </div>
                  <div className="">
                    <span>Tax</span>
                    <span>
                      {Math.trunc(cartInfo?.data?.totalCartPrice * 0.14 || 0)}{" "}
                      EGP
                    </span>
                  </div>
                </div>
              </div>

              <div className="totalPrice flex justify-between items-center">
                <span>Total</span>
                <span>
                  {Math.trunc(
                    cartInfo?.data?.totalCartPrice +
                      (cartInfo?.numOfCartItems > 0 ? 70 : 0) +
                      (cartInfo?.data?.totalCartPrice * 0.14 || 0)
                  )}{" "}
                  EGP
                </span>
              </div>
              <div className="buttons flex flex-col grow-1 gap-5">
                <button className="btn   hover:bg-gray-100 transition-colors duration-300">
                  Continue Shopping
                </button>
              </div>
              <div className="features *:bg-gray-100 *:px-6 *:py-4 *:rounded-lg *:space-y-2 space-y-5">
                <div className="">
                  <div className="flex items-center gap-2 ">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-primary-500"
                    />
                    <span className="font-bold">Secure Checkout</span>
                  </div>
                  <p>Your payment information is secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
