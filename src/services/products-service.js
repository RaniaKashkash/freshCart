import { apiClient } from "./api-client";

export  async function getAllProduct({
  page,
  keyword,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category,
  brand,
} = {}) {
  try {
    const options = {
      
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}`: ""}${
        priceGreaterThan ? `&price[gte]=${priceGreaterThan}`: ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}`: ""}${
        sortedBy ? `&sort=${sortedBy}`: ""}${
        category ? `&category[in]=${category}` : ""}${
        brand ? `&brand=${brand}`: ""}`,
      method: "GET",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function getProductById({ id }) {
  try {
    const options = {
      method: "GET",
      url: `/products/${id}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
