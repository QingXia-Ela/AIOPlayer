import { styled } from "@mui/material";
import Menu, { MenuProps, MenuClasses } from "@mui/material/Menu";
import Collapse from '@mui/material/Collapse';

export default styled(({ ...p }: MenuProps) => (
  <Menu {...p} />
))(() => ({
  ".MuiPaper-root": {
    color: "white",
    minWidth: "2.5rem",
    backgroundColor: "#000",
    boxShadow: "0 0 10px black",
    backgroundImage: "linear-gradient(90deg,rgba(99,99,99,.1),rgba(99,99,99,.1) 1px,transparent 0,transparent),linear-gradient(90deg,hsla(0,0%,100%,.1) -20%,transparent 15%),linear-gradient(0deg,hsla(0,0%,100%,.1),transparent 25%);"
  }
}))