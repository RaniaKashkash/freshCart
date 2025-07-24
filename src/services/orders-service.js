import { apiClient } from "./api-client";

export default async function getOrdersById({ userId }) {
  try {
    const options = {
      methods: "GET",
      url: `/orders/user/${userId}`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function addNewOrder(id, shippingAddress) {
  try {
    const options = {
      method: "POST",
      url: `/orders/${id}`,
      data: {
        shippingAddress: {
          details: shippingAddress.details,
          phone: shippingAddress.phone,
          city: shippingAddress.city,
        },
      },
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    throw error;
  }
}
