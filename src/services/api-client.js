import axios from "axios";
import { API_CONFIG } from "../config";
API_CONFIG;
export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
});

apiClient.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }

  return config;
});
apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
      statusCode: response.status,
    });
  },
  (error) => {
    return Promise.reject({
      error: error,
      status: false,
      message: error.response.data.message,
    });
  }
);
