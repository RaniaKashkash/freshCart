import OrderItemSkeleton from "./OrderItemSkeleton";

export default function OrdersSkeleton() {
  return (
    <>
      <section className="p-6 bg-white rounded-md">
        <div className="header flex justify-between items-center">
          <h1 className="text-xl font-bold text-black">My Orders</h1>
        </div>
        <div>
          {[...Array(3)].map((_, i) => (
            <OrderItemSkeleton key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
