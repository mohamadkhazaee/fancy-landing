import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Landing } from "../src/templates/landing";

const Home = () => {
  const router = useRouter();
  return (
    <Button variant="contained" onClick={() => router.push("/login")}>
      login
    </Button>
  );
};

export default Home;
