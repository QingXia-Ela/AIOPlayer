import { Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Styles from './index.module.scss'
import Slider from "@rebuildMui/Slider";
import IconButton from "@rebuildMui/IconButton";

interface RightOperationProps {

}

const getVolumeIcon = (volume: number) => {
  return volume > 66 ? 'icon-24gl-volumeHigh' : volume > 33 ? 'icon-24gl-volumeMiddle' : volume > 0 ? 'icon-24gl-volumeLow' : 'icon-24gl-volumeZero'
}

const RightOperation: FunctionComponent<RightOperationProps> = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };


  return (
    <Stack spacing={2} direction="row" className={Styles.right_operation} alignItems="center">
      <IconButton size="large">
        <i className={`iconfont ${getVolumeIcon(value)} ${Styles.iconfont}`}></i>
      </IconButton>
      <Slider valueLabelDisplay="auto" sx={{ width: "2rem", marginLeft: ".1rem !important" }} aria-label="Volume" value={value} onChange={handleChange} />
      <IconButton size="large">
        <i className={`iconfont icon-24gl-playlistMusic2 ${Styles.iconfont}`}></i>
      </IconButton>
    </Stack>
  );
}

export default RightOperation;