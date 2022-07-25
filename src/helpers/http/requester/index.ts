import axios, { AxiosInstance, AxiosResponse } from "axios";

import ApiConfiguration from "./api-config";

export type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

export interface IRequester {
  get<TResponse>(path: string): Promise<AxiosResponse<TResponse>>;
  delete<TResponse>(path: string): Promise<AxiosResponse<TResponse>>;
  put<TRequest, TResponse>(path: string, object: TRequest): Promise<AxiosResponse<TResponse>>;
  post<TRequest, TResponse>(path: string, object: TRequest, config?: RequestConfig): Promise<AxiosResponse<TResponse>>;
}

export class Requester implements IRequester {
  private client: AxiosInstance;

  // ESLint force me to use 'this' inside the function or convert it to a static method!
  // eslint-disable-next-line class-methods-use-this
  protected createAxiosClient(apiConfiguration: ApiConfiguration): AxiosInstance {
    return axios.create({
      baseURL: apiConfiguration.baseUrl ?? "",
      responseType: "json" as const,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  constructor(apiConfiguration: ApiConfiguration) {
    this.client = this.createAxiosClient(apiConfiguration);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<TResponse>(path: string): Promise<AxiosResponse<TResponse, any>> {
    return this.client.get<TResponse>(path);
  }

  delete<TResponse>(path: string): Promise<AxiosResponse<TResponse, any>> {
    return this.client.delete<TResponse>(path);
  }

  put<TRequest, TResponse>(path: string, payload: TRequest): Promise<AxiosResponse<TResponse, any>> {
    return this.client.put<TResponse>(path, payload);
  }

  async post<TRequest, TResponse>(path: string, payload: TRequest, config?: RequestConfig): Promise<AxiosResponse<TResponse, any>> {
    return this.client.post<TResponse>(path, payload, config);
  }
}
