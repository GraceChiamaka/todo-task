import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = "https://6223d4023af069a0f9aa6c1b.mockapi.io/api/v1";

class BaseRequest {
  protected api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
    });

    this.attachInterceptors();
  }

  private attachInterceptors() {
    this.api.interceptors.request.use(async (req: AxiosRequestConfig) => {
      return req;
    });
  }
}
export default BaseRequest;
