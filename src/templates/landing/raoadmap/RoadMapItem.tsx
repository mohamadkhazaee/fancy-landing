import { Box, Typography } from "@mui/material";

interface RoadMapItemProps {
  index: number;
  date: string;
  items: string[];
  status: "DONE" | "DOING" | "UPCOMMING";
}
export function RoadMapItem({ index, date, items, status }: RoadMapItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mb: 3,
      }}
    >
      <Box sx={{ mr: 8 }}>
        <Typography variant="h5" fontWeight="bold">
          STEP 0{index}
        </Typography>
        <Typography variant="subtitle1" textAlign="right">
          {date}
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 300 }}>
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
