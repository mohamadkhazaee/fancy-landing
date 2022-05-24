import { Box, Collapse, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useIsMobile } from "src/shared/hooks";

interface FaqItemProps {
  title: string;
  desc: string;
}
export function FaqItem({ title, desc }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <Box
      onClick={() => setOpen((prev) => !prev)}
      sx={{ width: 1, cursor: "pointer" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant={!isMobile ? "h4" : "h6"}
          fontWeight="bold"
          mr={3}
          sx={{ width: 20 }}
        >
          {!open ? "+" : "-"}
        </Typography>
        <Typography variant={!isMobile ? "h5" : "body1"} fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Collapse in={open}>
        <Box sx={{ py: 3, ml: 5 }}>{desc}</Box>
      </Collapse>

      <Divider sx={{ borderColor: "#fff", my: 3 }} />
    </Box>
  );
}
