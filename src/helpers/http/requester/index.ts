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
  async get<TResponse>(path: string): Promise<AxiosResponse<TResponse, any>> {
    return this.client.get<TResponse>(path);
  }
}
