import axios from "axios";
import config from "../../config/config.json";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constant/token/token.constant";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${localStorage.get(ACCESS_TOKEN_KEY)}`,
  },
});
