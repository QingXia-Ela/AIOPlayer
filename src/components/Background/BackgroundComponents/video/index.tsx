import { videoBackgroundOptions } from "@/store/Background";
import { FunctionComponent, memo } from "react";
import Styles from './index.module.scss'


export default memo(
  function BackgroundImageComponent({ src }) {
    return (
      <div className={Styles.image_bg}>
        <video src={src}></video>
      </div>
    );
  }
) as FunctionComponent<videoBackgroundOptions>
