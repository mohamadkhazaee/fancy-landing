import { keyframes } from "@emotion/react";
import { Snackbar } from "@mui/material";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const COOKIE_NAME = "dashagh";

export const rotation = keyframes`
0% {
    -webkit-transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
}
`;

export function setToken(token: string) {
  Cookies.set(COOKIE_NAME, token);
}

export function getToken() {
  return { token: Cookies.get(COOKIE_NAME) };
}

type Notify = {
  message: string;
  variant?: "info" | "success" | "warning" | "error";
};
export function notify({ message, variant }: Notify) {
  return toast(message, {
    type: variant,
    autoClose: 5000,
    position: "top-right",
    pauseOnHover: true,
    theme: "dark",
  });
}
