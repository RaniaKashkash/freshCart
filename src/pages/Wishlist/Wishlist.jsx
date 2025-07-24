import { useContext, useState } from "react";
import { wishlistContext } from "../../context/whishlist.context";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import WishlistSkeleton from "../../components/Skeleton/WishlistSkeleton";

export default function Wishlist() {
  const { wishlistProduct, isLoading } = useContext(wishlistContext);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = wishlistProduct?.data || [];
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = totalItems.slice(startIndex, endIndex);

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };

  if (isLoading) {
    return <WishlistSkeleton />;
  }

  return (
    <>
      <Pagemetadata title="Wishlist" />
      {!isLoading && (
        <div className="container py-10">
          <div className=" border-1 border-gray-200 rounded-lg p-4 space-y-4">
            <div className="space-y-1 border-b-1 border-b-gray-200 py-4">
              <h2 className="text-3xl font-semibold">Wishlist</h2>
              {totalItems.length > 0 && (
                <span className="text-gray-600">
                  {totalItems.length} item(s) in your wishlist
                </span>
              )}
            </div>

            <div className="space-y-5">
              {totalItems.length > 0 ? (
                currentItems.map((product) => (
                  <WishlistItem key={product.id} productInfo={product} />
                ))
              ) : (
                <div className="flex items-center justify-center gap-2 text-md">
                  <p className="font-semibold">Your wishlist is Empty</p>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-primary-600"
                  />
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center items-center gap-2 mt-4"
                pageClassName="px-3 py-1 border border-gray-200 rounded"
                activeClassName="bg-primary-600 text-white"
                previousClassName="px-3 py-1 border border-gray-200 rounded"
                nextClassName="px-3 py-1 border border-gray-200 rounded"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
