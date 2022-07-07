import axios from "../config/axios";
export function getTransactions() {
  return axios.get("/transactions");
}
