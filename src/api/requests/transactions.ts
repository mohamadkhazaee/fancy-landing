import axios from "../config/axios";
export function getTransactions() {
  return axios.get("/transactions");
}
export function withdrawTransaction(id: string) {
  return axios.post(`/transaction/withdraw/${id}`);
}
