import { Box, Typography } from "@mui/material";

interface InfoItemProps {
  divider?: boolean;
  value: string;
  caption: string;
  measure?: string;
}
export function InfoItem({ divider, value, caption, measure }: InfoItemProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderRight: divider ? "1px solid #707070" : undefined,
      }}
    >
      <Typography
        sx={{ color: "#707070", mb: 1 }}
        variant="subtitle1"
        fontWeight="bold"
        textAlign="center"
      >
        {caption}
      </Typography>
      <Typography sx={{ color: "#2F2F2F" }} variant="h5" textAlign="center">
        {value}
        {measure && (
          <Typography
            sx={{ color: "#707070", ml: 1 }}
            variant="subtitle1"
            fontWeight="bold"
            textAlign="center"
            component="span"
          >
            {measure}
          </Typography>
        )}
      </Typography>
    </Box>
  );
}
