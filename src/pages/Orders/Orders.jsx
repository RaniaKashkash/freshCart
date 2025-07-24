import { useContext, useEffect } from "react";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import { OrdersContext } from "../../context/orders.context";
import OrderItem from "../../components/OrderItem/OrderItem";
import OrdersSkeleton from "../../components/Skeleton/OrdersSkeleton";
import { useLocation } from "react-router";
import { AuthContext } from "../../context/Auth.context";

export default function Orders() {
  const { userId } = useContext(AuthContext);

  const { isLoading, ordersInfo, handleUserOrders } = useContext(OrdersContext);

  const location = useLocation();

  useEffect(() => {
    handleUserOrders({ userId }); // أو أي اسم عندك في الـ context
  }, [location.pathname]); // كل مرة تدخل صفحة جديدة، بتنعاد

  if (isLoading) {
    return <OrdersSkeleton />;
  }

  return (
    <>
      <Pagemetadata title="Orders" />
      <section className=" py-10">
        <div className="container p-6 bg-white border-1 border-gray-200 rounded-lg ">
          <div className="header flex justify-between items-center py-3">
            <h1 className="text-3xl font-semibold text-black">My Orders</h1>
          </div>
          <div className="">
            {ordersInfo ? (
              ordersInfo?.map((order) => (
                <OrderItem key={order.id} orderDetails={order} />
              ))
            ) : (
              <div className="flex items-center justify-center gap-2 text-md">
                <p className="font-semibold">
                  You don’t have any orders yet.📃
                </p>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-primary-600"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
