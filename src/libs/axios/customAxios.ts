import axios, { AxiosError } from "axios";
import config from "../../config/config.json";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constant/token/token.constant";

import LocalStorage from "../storage/LocalStorage";

const customAxios = axios.create({
  baseURL: config.SERVER,
});

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      window.alert("토큰이 만료되었습니다");
      LocalStorage.remove(ACCESS_TOKEN_KEY);
      window.location.href = "/signin";
    } else return Promise.reject(error);
  }
);

customAxios.interceptors.request.use(async (config: any) => {
  config.headers = {
    [REQUEST_TOKEN_KEY]: `Bearer ${LocalStorage.get(ACCESS_TOKEN_KEY)}`,
  };
  return config;
});

export default customAxios;
