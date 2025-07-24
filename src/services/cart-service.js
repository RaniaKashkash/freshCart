import { apiClient } from "./api-client";

export async function addProductToCart({ id }) {
  try {
    const options = {
      method: "POST",
      url: "/cart",
      data: {
        productId: id,
      },
    };
    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCartItems() {
  try {
    const options = {
      method: "GET",
      url: "/cart",
    };
    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteproductFromCart({ id }) {
  try {
    const options = {
      method: "DELETE",
      url: `/cart/${id}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function updateProductQuantity({ id, count }) {
  try {
    const options = {
      method: "PUT",
      url: `/cart/${id}`,
      data: {
        count: count,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function clearUserCart() {
  try {
    const options = {
      method: "DELETE",
      url: "/cart",
    };
    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}
