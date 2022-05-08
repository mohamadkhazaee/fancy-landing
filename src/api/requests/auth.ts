import axios from "../config/axios";
import { ConnectMetaMaskType, SigninType, SignupType } from "./types";
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
