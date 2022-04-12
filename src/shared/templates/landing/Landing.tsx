import { Box } from "@mui/system";
import Image from "next/image";
export function Landing() {
  return (
    <Box sx={{ backgroundColor: "neutral.n2", height: 100000 }}>
      <Box
        sx={{ height: "3000px", backgroundColor: "red", position: "relative" }}
      >
        <Box
          sx={{
            width: "90%",
            height: "120vh",
            backgroundColor: "blue",
            borderRadius: "100%",
            position: "absolute",
            top: "-5%",
            left: "5%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "034%",
              right: "0%",
            }}
          >
            <Image
              src="/RedToken.svg"
              width="200px"
              height="200px"
              alt="token"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
