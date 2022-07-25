import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

export function responseInterceptor(handleSuccessResponse?: (response: AxiosResponse) => void) {
  const success = (response: AxiosResponse) => {
    if (handleSuccessResponse && typeof handleSuccessResponse === "function") {
      handleSuccessResponse && handleSuccessResponse(response);
    }
    return response;
  };
  const error = (error: AxiosError) => {
    return Promise.reject(error);
  };

  return { success, error };
}

export function requestInterceptor(handleSuccessRequest?: (config: AxiosRequestConfig) => void) {
  const success = (config: AxiosRequestConfig) => {
    if (handleSuccessRequest && typeof handleSuccessRequest === "function") {
      handleSuccessRequest && handleSuccessRequest(config);
    }
    return config;
  };
  const error = (error: AxiosError) => {
    return Promise.reject(error);
  };

  return { success, error };
}
