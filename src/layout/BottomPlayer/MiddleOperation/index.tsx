import { Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Styles from './index.module.scss'
import TimeSlider from "./TimeSlider";
import IconButton from "@rebuildMui/IconButton";
import FlowUpChangeIcon from "@/components/FlowUpChangeIcon";

interface MiddleOperationProps {

}

const PlayPauseIconMap = {
  pause: <i className={`iconfont ${Styles.iconfont} icon-24gl-pause`} style={{
    fontSize: ".6rem"
  }}></i>,
  play: <i className={`iconfont ${Styles.iconfont} icon-24gl-play`} style={{
    fontSize: ".6rem"
  }}></i>
}

const PlayModeIconMap = {
  1: <i className={`iconfont ${Styles.iconfont} icon-24gl-shuffle`}></i>,
  2: <i className={`iconfont ${Styles.iconfont} icon-24gl-repeat2`}></i>,
  3: <i className={`iconfont ${Styles.iconfont} icon-24gl-repeatOnce2`}></i>
}

const MiddleOperation: FunctionComponent<MiddleOperationProps> = () => {
  const [play, setPlay] = useState(false);
  const [playMode, setPlayMode] = useState(1);

  return (
    <div className={Styles.middle_operation}>
      <Stack spacing={2} direction="row" margin="0 auto">
        <div className={Styles.icon_wrapper} onClick={() => setPlayMode(playMode < 3 ? playMode + 1 : 1)}>
          <FlowUpChangeIcon
            IconMap={PlayModeIconMap}
            style={{
              width: ".5rem",
              height: ".36rem"
            }}
            currentIcon={playMode + ""}
          />
        </div>
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