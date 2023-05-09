import { FunctionComponent } from "react";
import Styles from './index.module.scss'

interface BottomPlayerProps {

}

const BottomPlayer: FunctionComponent<BottomPlayerProps> = () => {
  return (
    <div className={Styles.bottom_player}>
      <div className={Styles.left_img}>
        <img className={Styles.inner_img} src="/UAlbum.jpg" />
      </div>
    </div>
  );
}

export default BottomPlayer;