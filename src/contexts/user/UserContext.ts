import { createContext } from "react";

export type UserContextType = {
  theme: string;
  //setTheme: (c: "dark" | "light") => void;
};

export const UserContext = createContext<UserContextType>({
  theme: "light",
  //setTheme: () => {},
});
