import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ListItemProps {
  title: string;
  icon: string;
}
export function ListItem({ title, icon }: ListItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ width: 1, mt: 3, maxWidth: 500, position: "relative" }}
    >
      <Box sx={{ flexGrow: 0 }}>
        <Image
          src={`/${icon}Token.png`}
          width={25}
          height={25}
          layout="fixed"
          alt=""
        />
      </Box>
      <Typography ml={2} variant="body1" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
}
