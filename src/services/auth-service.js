import { apiClient } from "./api-client";

export async function sendDataToSignUp(values) {
  try {
    const options = {
      method: "POST",
      url: "/auth/signup",
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        rePassword: values.rePassword,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function sendDataToLogin(values) {
  try {
    const options = {
      method: "POST",
      url: "/auth/signin",
      data: {
        email: values.email,
        password: values.password,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function forgetPassword(values) {
  try {
    const options = {
      method: "POST",
      url: "/auth/forgotPasswords",
      data: {
        email: values.email,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function VerifyResetCode({resetCode}) {
  try {
    const options = {
      method: "POST",
      url: "auth/verifyResetCode",
      data: {
        resetCode: resetCode,
      },
    };
    const response = await apiClient.request(options);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function resetPassword(email, password) {
  try {
    const options = {
      method: "PUT",
      url: "/auth/resetPassword",
      data: {
        email: email,
        newPassword: password,
      },
    };
    const response = await apiClient.request(options);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}
