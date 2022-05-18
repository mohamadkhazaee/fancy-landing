import { keyframes } from "@emotion/react";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";

export const COOKIE_NAME = "dashagh";

export const rotation = keyframes`
0% {
    -webkit-transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
}
`;
export const spinRight = keyframes`
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export function setToken(token: string) {
  Cookies.set(COOKIE_NAME, token);
}

export function getToken() {
  return { token: Cookies.get(COOKIE_NAME) };
}
