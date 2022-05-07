import { Box, Typography } from "@mui/material";

interface StepperProps {
  index: number;
  title: string;
  desc: string;
}
export function Stepper({ index, title, desc }: StepperProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: 25,
          height: 25,
          borderRadius: "100%",
          border: "2px solid #fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          p: 1,
          mr: 1.5,
        }}
      >
        {index}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body1" fontWeight="bold" mb={1}>
          {title}
        </Typography>
        <Typography variant="caption">{desc}</Typography>
      </Box>
    </Box>
  );
}
