import axios from "../config/axios";
import { SigninType, SignupType } from "./types";
export function signupApiCall(data: SignupType) {
  return axios.post("/signup", data);
}
export function loginApiCall(data: SigninType) {
  return axios.post("/signin", data);
}
