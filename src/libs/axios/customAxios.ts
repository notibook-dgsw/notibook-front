import axios from "axios";
import config from "../../config/config.json";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constant/token/token.constant";

import LocalStorage from "../storage/LocalStorage";

export const customAxios = axios.create({
  baseURL: config.SERVER,
});

customAxios.interceptors.request.use(async (config: any) => {
  config.header = {
    [REQUEST_TOKEN_KEY]: `Bearer ${LocalStorage.get(ACCESS_TOKEN_KEY)}`,
  };
  return config;
});
