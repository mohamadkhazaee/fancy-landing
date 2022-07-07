import axios from "axios";
export function getCopperApi() {
  return axios.get("https://api.metals.live/v1/spot/copper");
}
export function emailSubscribe(email: string) {
  return axios.post("https://cryptal.global/newsletter/sub", { email });
}
