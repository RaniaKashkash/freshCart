import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth.context";
import getOrdersById, { addNewOrder } from "../services/orders-service";
import { apiClient } from "../services/api-client";
import { CartContext } from "./cart.context";
import { toast } from "react-toastify";

export const OrdersContext = createContext(null);
export default function OrdersProvider({ children }) {
  const { token, userId } = useContext(AuthContext);
  const { clearYourCart } = useContext(CartContext);
  const [ordersInfo, setOrdersInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleUserOrders({ userId }) {
    try {
      const response = await getOrdersById({ userId });
      if (response.success) {
        setLoading(false);
        setOrdersInfo(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function createNewOrder(id, shippingAddress) {
    try {
      const response = await addNewOrder(id, shippingAddress);
      if (response.success) {
        toast.success("Order has been added Successfully");
        await clearYourCart();
        await handleUserOrders();
      }
    } catch (error) {
      setError(error);
    }
  }

  async function checkout(cartId, url, shippingAddress) {
    try {
      const options = {
        method: "POST",
        url: `orders/checkout-session/${cartId}?url=${url}`,
        data: {
          shippingAddress: shippingAddress,
        },
      };
      const response = await apiClient.request(options);
      return response;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    handleUserOrders({ userId });
  }, [userId]);

  return (
    <OrdersContext.Provider
      value={{
        ordersInfo,
        isLoading,
        setLoading,
        error,
        checkout,
        handleUserOrders,
        createNewOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
