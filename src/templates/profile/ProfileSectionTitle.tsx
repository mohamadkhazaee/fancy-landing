import { SxProps, Typography } from "@mui/material";
import { useIsMobile } from "src/shared/hooks";

interface ProfileSectionTitleProps {
  title: string;
  sx?: SxProps;
}
export function ProfileSectionTitle({ title, sx }: ProfileSectionTitleProps) {
  const isMobile = useIsMobile();
  return (
    <Typography
      variant={isMobile ? "body1" : "h6"}
      fontWeight="bold"
      sx={{ ...sx }}
    >
      {title}
    </Typography>
  );
}
