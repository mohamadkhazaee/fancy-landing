export type PoolType = {
  _id: string;
  APY: number;
  address: string;
  date: number;
  start_date: number;
  end_date: number;
  describtion: string;
  freeze: boolean;
  initiated: boolean;
  name: string;
  sold_shares: number;
  total_shares: number;
};
