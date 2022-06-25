import axios from "../config/axios";
export function getPoolsApiCall() {
  return axios.get("/pools");
}
