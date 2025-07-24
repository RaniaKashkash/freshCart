import { createContext, useContext, useEffect, useState } from "react";
import {
  addProductToCart,
  clearUserCart,
  deleteproductFromCart,
  getCartItems,
  updateProductQuantity,
} from "../services/cart-service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleAddProductToCart({ id }) {
    try {
      setLoading(true);

      const response = await addProductToCart({ id });
      if (response.success) {
        setLoading(false);
        toast.success(response.data.message);

        setCartInfo(response);
        await handleGetCartItems();
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  async function handleGetCartItems() {
    try {
      const response = await getCartItems();
      if (response.success) {
        setLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function handleDeleteProductFromCart({ id }) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this product?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#727D73",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const toastId = toast.loading("We are deleting cart item");
        const response = await deleteproductFromCart({ id });
        if (response.success) {
          setLoading(false);
          toast.dismiss(toastId);
          setCartInfo(response.data);
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function handleUpdateProductQuantity({ id, count }) {
    try {
      const toastId = toast.loading("Updating Product Quantity");
      const response = await updateProductQuantity({ id, count });
      setLoading(true);
      if (response.success) {
        toast.dismiss(toastId);
        isLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function removeProductFromCart({ id }) {
    try {
      const response = await deleteproductFromCart({ id });
      if (response.success) {
        setLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function clearYourCart() {
    try {
      const toastId = toast.loading("Clearing the cart, please wait...");
      const response = await clearUserCart();
      if (response.success) {
        toast.dismiss(toastId);
        setLoading(false);
        await handleGetCartItems();
        toast.success("Cart has been cleared successfully");
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    handleGetCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        isLoading,
        error,
        handleAddProductToCart,
        handleGetCartItems,
        handleDeleteProductFromCart,
        handleUpdateProductQuantity,
        removeProductFromCart,
        clearYourCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
