import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import LeftInfo from "./LeftInfo";
import MiddleOperation from "./MiddleOperation";
import RightOperation from "./RightOperation";

interface BottomPlayerProps {

}

const BottomPlayer: FunctionComponent<BottomPlayerProps> = () => {
  return (
    <div className={Styles.bottom_player}>
      <div className="w30">
        <LeftInfo />
      </div>
      <div className="w40">
        <MiddleOperation />
      </div>
      <div className="w30">
        <RightOperation />
      </div>
    </div>
  );
}

export default BottomPlayer;