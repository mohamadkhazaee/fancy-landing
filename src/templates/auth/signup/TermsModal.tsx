import { Typography } from "@mui/material";
import { Modal } from "src/shared/components";
import { TERMSANDCONDITIONS } from "./constants";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}
export function TermsModal({ open, onClose }: TermsModalProps) {
  return (
    <Modal open={open} onClose={onClose} containerSx={{ maxWidth: 600 }}>
      {TERMSANDCONDITIONS.map((i) => (
        <Typography key={i} variant="body1" mb={2}>
          {i}
        </Typography>
      ))}
    </Modal>
  );
}
