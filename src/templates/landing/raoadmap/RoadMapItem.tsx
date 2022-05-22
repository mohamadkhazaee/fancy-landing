import { Box, Typography } from "@mui/material";
import { useIsMobile } from "src/shared/hooks";

interface RoadMapItemProps {
  index: number;
  date: string;
  items: string[];
  status: "DONE" | "DOING" | "UPCOMMING";
}
export function RoadMapItem({ index, date, items, status }: RoadMapItemProps) {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: 3,
        maxWidth: 450,
      }}
    >
      <Box>
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
          STEP 0{index}
        </Typography>
        <Typography variant="subtitle1" textAlign="right">
          {date}
        </Typography>
      </Box>

      <Box sx={{ width: "60%" }}>
        {items.map((i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                minWidth: 6,
                height: 6,
                backgroundColor: "neutral.mute",
                mr: 2,
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography sx={{ color: "neutral.mute" }} component="p" mb={1}>
                {i}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
