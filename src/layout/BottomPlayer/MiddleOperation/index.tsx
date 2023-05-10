import { Stack } from "@mui/material";
import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import TimeSlider from "./TimeSlider";
import IconButton from "@rebuildMui/IconButton";

interface MiddleOperationProps {

}

const MiddleOperation: FunctionComponent<MiddleOperationProps> = () => {
  return (
    <div className={Styles.middle_operation}>
      <Stack spacing={2} direction="row" margin="0 auto">
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-shuffle`}></i>
        </IconButton>
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-previous`}></i>
        </IconButton>
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-pause`} style={{ fontSize: ".5rem" }}></i>
        </IconButton>
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-next`}></i>
        </IconButton>
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-ellipsis`}></i>
        </IconButton>
      </Stack>
      <TimeSlider />
    </div>
  );
}

export default MiddleOperation;