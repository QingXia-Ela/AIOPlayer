import { Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Styles from './index.module.scss'
import TimeSlider from "./TimeSlider";
import IconButton from "@rebuildMui/IconButton";
import FlowUpChangeIcon from "@/components/FlowUpChangeIcon";

interface MiddleOperationProps {

}

const PlayPauseIconMap = {
  pause: <i className={`iconfont ${Styles.iconfont} icon-24gl-play`} style={{
    fontSize: ".6rem"
  }}></i>,
  play: <i className={`iconfont ${Styles.iconfont} icon-24gl-pause`} style={{
    fontSize: ".6rem"
  }}></i>
}

const MiddleOperation: FunctionComponent<MiddleOperationProps> = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className={Styles.middle_operation}>
      <Stack spacing={2} direction="row" margin="0 auto">
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-shuffle`}></i>
        </IconButton>
        <IconButton>
          <i className={`iconfont ${Styles.iconfont} icon-24gl-previous`}></i>
        </IconButton>
        <div className={Styles.icon_wrapper} onClick={() => setPlay(!play)}>
          <FlowUpChangeIcon
            IconMap={PlayPauseIconMap}
            style={{
              width: ".5rem",
              height: ".6rem"
            }}
            currentIcon={play ? 'pause' : 'play'}
          />
        </div>
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