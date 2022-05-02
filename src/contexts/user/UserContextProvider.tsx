import { PropsWithChildren } from "react";
import { UserContext } from "./UserContext";
export function UserContextProvider({
  children,
}: PropsWithChildren<Record<never, never>>) {
  return (
    <UserContext.Provider value={{ theme: "felan" }}>
      {children}
    </UserContext.Provider>
  );
}
