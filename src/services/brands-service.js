import { apiClient } from "./api-client";

export async function getAllBrands() {
  try {
    const options = {
      method: "GET",
      url: "/brands",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getBrandById({id}){
try {
    const options = {
      method: "GET",
      url: `/brands/${id}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
