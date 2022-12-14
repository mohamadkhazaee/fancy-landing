import { createContext } from "react";

export type Profile = {
  amount: number;
  email: string;
  referals: number;
  transactions: any[];
  wallet_address: string;
  _id: string;
  totp_active: boolean;
  newsletter: boolean;
};
export type UserContextType = {
  profile: Profile | undefined;
  setProfile: (profile: Profile) => void;
};

export const UserContext = createContext<UserContextType>({
  profile: undefined,
  setProfile: () => {},
});
