import axios from "../config/axios";
import {
  ConnectMetaMaskType,
  SigninType,
  SignupType,
  ChangePassword,
  ResetPassword,
} from "./types";
export function signupApiCall(data: SignupType) {
  return axios.post("/signup", data);
}
export function loginApiCall(data: SigninType) {
  return axios.post("/signin", data);
}
export function connectMetaMask(data: ConnectMetaMaskType) {
  return axios.post("/auth/metamask", data);
}
export function getProfile() {
  return axios.get("/profile/info");
}
export function changePassword(data: ChangePassword) {
  return axios.post("/profile/editpassword", data);
}
export function forgetPassword(data: { email: string }) {
  return axios.post("/forgotpassword", data);
}
export function resetPassword(data: ResetPassword, token: string) {
  return axios.post(`/resetpassword/token=${token}`, data);
}
export function get2faCode() {
  return axios.get("/auth/2fa/get");
}
export function toggle2fa(code: string) {
  return axios.post("/auth/2fa/active", { totp: code });
}
export function toggleNotification() {
  return axios.post("/newsletter/notification");
}
