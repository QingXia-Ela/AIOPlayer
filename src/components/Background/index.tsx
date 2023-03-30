import { FunctionComponent, memo } from "react";
import BackgroundStoreInstance, { BackgroundType, cssBackgroundOptions, imageBackgroundOptions } from "@/store/Background";
import BackgroundCssComponent from "./BackgroundComponents/css";
import BackgroundImageComponent from "./BackgroundComponents/image"
import Styles from './index.module.scss'

interface BackgroundProps {
  maskOpacity?: number
}

const GetBackgroundTypeComponent = (key: BackgroundType) => {
  switch (key) {
    case "css": {
      const { cssContent } = BackgroundStoreInstance.options as cssBackgroundOptions
      return <BackgroundCssComponent cssContent={cssContent} />
    }
    case "image": {
      const { src, moveWithMouse = false } = BackgroundStoreInstance.options as imageBackgroundOptions
      return <BackgroundImageComponent src={src} moveWithMouse={moveWithMouse} />
    }
  }
}

const Background: FunctionComponent<BackgroundProps> = memo(
  function Background() {
    return (
      <div className={Styles.background}>
        {GetBackgroundTypeComponent(BackgroundStoreInstance.type)}
      </div>
    );
  }
)

export default Background;
