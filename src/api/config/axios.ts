import Router from "next/router";
import axios, { AxiosError } from "axios";
import { getToken } from "src/shared/utils";

const instance = axios.create({
  baseURL: "https://cryptal.global",
  timeout: 15000,
});

instance.interceptors.request.use((config) => {
  const { token } = getToken();
  if (token && config.headers) {
    config.headers.dashagh = token;
  }
  return config;
});
export default instance;
