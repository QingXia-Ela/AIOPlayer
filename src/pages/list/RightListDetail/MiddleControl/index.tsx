import { FunctionComponent } from "react";
import Styles from './index.module.scss'

interface RightListMiddleControlProps {

}

const RightListMiddleControl: FunctionComponent<RightListMiddleControlProps> = () => {
  return (
    <div className={Styles.middle_control}></div>
  );
}

export default RightListMiddleControl;