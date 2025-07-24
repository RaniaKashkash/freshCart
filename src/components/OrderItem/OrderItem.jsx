export default function OrderItem({ orderDetails }) {
  const {
    id,
    cartItems,
    totalOrderPrice,
    createdAt,
    isDelivered,
    isPaid,
    shippingAddress,
  } = orderDetails;

  return (
    <>
      <div className="orders-item bg-bg-gray bg-gray-100/60 border-1 border-gray-300 rounded-md my-3 p-4">
        <div className="header">
          <div className="space-y-3">
            <div className="order-details flex justify-between ">
              <div className="">
                <div className=" order-no flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-md">Order</h3>
                    <span className="font-semibold text-md">#{id}</span>
                  </div>
                </div>
                <p className="text-gray-500">
                  Place {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span
                  className={`${
                    isDelivered
                      ? "bg-primary-100 text-primary-900"
                      : "bg-yellow-200 text-yellow-800"
                  } py-1 px-2 rounded-full text-[12px]`}
                >
                  {isDelivered ? "Delivered" : "Processing"}
                </span>
                <span
                  className={`${
                    isPaid
                      ? "bg-primary-100 text-primary-900"
                      : "bg-red-100 text-red-900"
                  } py-1 px-2 rounded-full text-[12px]`}
                >
                  {isPaid ? "Paid" : "Unpaid"}
                </span>
              </div>
            </div>

            <div className="order-items bg-white p-3 flex flex-col lg:flex-row  items-start  justify-between gap-3">
              <div className="flex flex-row gap-4 items-center">
                {cartItems?.map((product) => {
                  return (
                    <div key={product?.product.id}>
                      <div className="img flex justify-start relative flex-wrap">
                        <img
                          src={product.product.imageCover}
                          alt="item"
                          className="size-14 object-cover"
                        />
                        <span className="absolute bg-gray-900 text-white top-0 right-0 size-6 text-center">
                          {product.count}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="lg:border-l-2 lg:border-gray-300 flex gap-16 px-4">
                <div className="">
                  <span className="text-[12px] text-gray-500">Items</span>
                  <p className=" text-gray-800 font-semibold">
                    {cartItems.length}
                  </p>
                </div>
                <div className="">
                  <span className="text-[14px] text-gray-500">
                    Total Amount
                  </span>
                  <p className="text-gray-800 font-semibold">
                    {totalOrderPrice}
                  </p>
                </div>
                <div className="">
                  <span className="text-[14px] text-gray-500">
                    Delivered to
                  </span>
                  <p className="text-gray-800 font-semibold">
                    {shippingAddress.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
