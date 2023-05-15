import { styled } from "@mui/material";
import Slider from "@mui/material/Slider";

export default styled(Slider)(() => ({
  color: "#ccc",
  ".MuiSlider-thumb": {
    width: "1.1250rem",
    height: "1.1250rem",
    "&.Mui-focusVisible, &:hover": {
      boxShadow: "0 0 0 5px #ffffff22",
    },
    "&.Mui-active": {
      boxShadow: "0 0 0 7px #ffffff22",
    }
  },
  ".MuiSlider-valueLabel": {
    fontSize: "0.9375rem",
    padding: "0.3125rem 0.6250rem",
    backgroundColor: "#444"
  },
  ".MuiSlider-rail": {
    opacity: 0.1
  }
}))