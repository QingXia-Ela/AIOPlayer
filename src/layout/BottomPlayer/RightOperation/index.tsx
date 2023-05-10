import { IconButton, Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Styles from './index.module.scss'
import Slider from "@rebuildMui/Slider";

interface RightOperationProps {

}

const iconStyle = {
  color: "#fff",
  transition: "opacity 0.3s",
  opacity: 0.8,
  "&:hover": {
    opacity: 1
  }
}

const RightOperation: FunctionComponent<RightOperationProps> = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };


  return (
    <Stack spacing={2} direction="row" className={Styles.right_operation} alignItems="center">
      <IconButton size="large" sx={iconStyle}>
        <i className={`iconfont icon-24gl-volumeMiddle ${Styles.iconfont}`}></i>
      </IconButton>
      <Slider valueLabelDisplay="auto" sx={{ width: "2rem" }} aria-label="Volume" value={value} onChange={handleChange} />
      <IconButton size="large" sx={iconStyle}>
        <i className={`iconfont icon-24gl-playlistMusic2 ${Styles.iconfont}`}></i>
      </IconButton>
    </Stack>
  );
}

export default RightOperation;