import Cookies from "js-cookie";
import { PropsWithChildren, useEffect, useState } from "react";
import { getProfile } from "src/api";
import { Profile, UserContext } from "./UserContext";
export function UserContextProvider({
  children,
}: PropsWithChildren<Record<never, never>>) {
  const [profile, setProfile] = useState<Profile>();
  useEffect(() => {
    if (Cookies.get("dashagh")) {
      getProfile().then((res) => {
        setProfile(res.data.result.profile);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
}
