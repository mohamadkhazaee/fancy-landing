import { Box, SxProps } from "@mui/material";
import { Modal as MuiModal } from "@mui/material";
import { PropsWithChildren } from "react";

const style = {
  minWidth: 400,
  maxWidth: "90%",
  boxShadow: 24,
  borderRadius: 3,
  p: 3,
  maxHeight: "90%",
};
interface ModalProps {
  open: boolean;
  onClose: () => void;
  containerSx?: SxProps;
}
export function Modal({
  open,
  onClose,
  containerSx,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 11,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0,0,0,0.7) !important",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "neutral.n1",
          ...style,
          px: 5,
          ...containerSx,
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
}
