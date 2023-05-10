import { styled } from "@mui/material";
import Slider from "@mui/material/Slider";

export default styled(Slider)(() => ({
  color: "#ccc",
  ".MuiSlider-thumb": {
    width: ".36rem",
    height: ".36rem",
    "&.Mui-focusVisible, &:hover": {
      boxShadow: "0 0 0 5px #ffffff22",
    },
    "&.Mui-active": {
      boxShadow: "0 0 0 7px #ffffff22",
    }
  },
  ".MuiSlider-valueLabel": {
    fontSize: ".3rem",
    padding: ".1rem .2rem",
    backgroundColor: "#444"
  },
  ".MuiSlider-rail": {
    opacity: 0.1
  }
}))