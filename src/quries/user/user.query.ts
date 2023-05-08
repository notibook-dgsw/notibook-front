import { useQuery } from "@tanstack/react-query";
import UserApi from "../../api/user/UserApi";

export const useGetUserQuery = () =>
  useQuery(["login_id/UserApi"], () => UserApi.getUser());

export const useGetRecomendBookQuery = () =>
  useQuery(["books/UserApi"], () => UserApi.getBookrecom(), { enabled: false });
