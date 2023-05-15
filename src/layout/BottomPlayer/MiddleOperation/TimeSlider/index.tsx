import { FunctionComponent, useState } from "react";
import Styles from './index.module.scss'
import Slider from "@rebuildMui/Slider";
import ParseTime from "@/utils/ParseTime";

interface TimeSliderProps {

}

const TimeSlider: FunctionComponent<TimeSliderProps> = () => {

  const [value, setValue] = useState<number>(1145);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={Styles.time_slider}>
      <div className={Styles.timer}>{ParseTime(value)}</div>
      <Slider sx={{ width: "calc(100% - 7.5000rem)", top: "0.0313rem" }} aria-label="Volume" value={value} onChange={handleChange} max={1145} min={0} />
      <div className={Styles.timer}>23:33</div>
    </div>
  );
}

export default TimeSlider;