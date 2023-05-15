import { styled } from "@mui/material";
import { IconButton } from "@mui/material";

export default styled(IconButton)(({ theme }) => ({
  color: "#fff",
  transition: "opacity 0.3s",
  opacity: 0.8,
  padding: "0.6250rem",
  "&:hover": {
    opacity: 1
  }
}))