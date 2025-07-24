export default function CheckoutOrderItem({ productDetails }) {
  const { price, count, product } = productDetails;
  const { imageCover, title } = product;

  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-shrink-0 ">
        <div className="flex gap-3 ">
          <div className="image size-14 bg-red-200 overflow-hidden  flex-shrink-0">
            <img src={imageCover} alt={title} className="object-cover" />
          </div>
          <div className="">
            <h3 className="line-clamp-2">{title}</h3>
            <span>Qty: {count}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <span>{price*count} </span>
          <span>EGP</span>
        </div>
      </div>
    </>
  );
}
