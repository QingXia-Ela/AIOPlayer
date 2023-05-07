import { styled } from "@mui/material";
import MenuItem, { MenuItemProps, MenuItemClasses } from "@mui/material/MenuItem";

export default styled(({ ...p }: MenuItemProps) => (
  <MenuItem {...p} className={`text-nowrap ${p.className ?? ""}`} />
))(() => ({
  fontFamily: "SourceHanSansCN-Normal",
  fontSize: ".3rem",
  transition: "background-color .3s",
  "&:hover": {
    backgroundColor: "#333"
  }
}))