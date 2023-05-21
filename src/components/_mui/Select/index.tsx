import { styled } from "@mui/material";
import { Select } from "@mui/material";

export default styled(Select)(({ theme }) => ({
  "& .MuiSelect-icon": {
    color: theme.palette.primary.main,
  },
}))