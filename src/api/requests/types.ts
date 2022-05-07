export type SignupType = {
  email: string;
  password: string;
  re_password: string;
};
export type SigninType = Exclude<SignupType, "re_password">;

export type ConnectMetaMaskType = {
  message: string;
  signature: string;
  account: string;
};
