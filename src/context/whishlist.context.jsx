import { createContext, useEffect, useState } from "react";
import addProductToWishlist, {
  getUserWishlistProducts,
  removeProductFromWishlist,
} from "../services/wishlist-service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export const wishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const [wishlistProduct, setWishlistProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleAddWishlistProduct({ id }) {
    try {
      setLoading(true);
      const response = await addProductToWishlist({ id });
      if (response.success) {
        setLoading(false);
        toast.success(response.data.message);

        setWishlistProduct(response.data);
        await getWishlistproducts();
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  async function getWishlistproducts() {
    try {
      const response = await getUserWishlistProducts();
      if (response.success) {
        setLoading(false);
        setWishlistProduct(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function handleDeleteWishlistproduct({ id }) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this item form wishlist?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#727D73",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const deleteToastId = toast.loading("We are deleting wishlist item");
        const response = await removeProductFromWishlist({ id });
        if (response.success) {
          setLoading(false);
          toast.dismiss(deleteToastId);
          await getWishlistproducts();
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function removeWishlistItem({ id }) {
    try {
      const response = await removeProductFromWishlist({ id });
      if (response.success) {
        setLoading(false);
        await getWishlistproducts();
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getWishlistproducts();
  }, []);
  return (
    <wishlistContext.Provider
      value={{
        getWishlistproducts,
        handleAddWishlistProduct,
        handleDeleteWishlistproduct,
        removeWishlistItem,
        wishlistProduct,
        isLoading,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
