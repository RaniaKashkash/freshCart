import { createContext, useEffect, useState } from "react";
import { getAllCategories } from "../services/categories";
import { getAllProduct } from "../services/products-service";

export const CategoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCategories() {
    try {
      const response = await getAllCategories();
      setIsLoading(true);
      if (response.success) {
        setIsLoading(false);
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function getProductsByCategory({ id }) {
    try {
      setIsLoading(true);
      const response = await getAllProduct({ category: id });
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        isLoading,
        setIsLoading,
        setError,
        getProductsByCategory,
        fetchCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
