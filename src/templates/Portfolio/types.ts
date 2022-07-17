export type TransactionType = {
  amount: number;
  block: string;
  date: number;
  freeze: boolean;
  from: string;
  pool_address: string;
  processed: boolean;
  to: string;
  txid: string;
  _id: string;
  status: "DONE" | "PENDING" | "RECEIVED";
};
