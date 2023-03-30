import { imageBackgroundOptions } from "@/store/Background";
import { FunctionComponent, memo } from "react";
import Styles from './index.module.scss'


export default memo(
  function BackgroundImageComponent({ src, moveWithMouse }) {
    return (
      <div className={Styles.image_bg}>
        <img src={src} />
      </div>
    );
  }
) as FunctionComponent<imageBackgroundOptions>
