import { createContext, useEffect, useState } from "react";
import { getAllProduct } from "../services/products-service";
import { updateProductQuantity } from "../services/cart-service";
import { toast } from "react-toastify";

export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await getAllProduct();
      setIsLoading(true);
      if (response.success) {
        setIsLoading(false);
        setProducts(response.data.data);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  


  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{ products, isLoading, error, }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
