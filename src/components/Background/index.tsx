import { cloneElement, FunctionComponent, memo, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BackgroundStoreInstance, { BackgroundStore, cssBackgroundOptions, imageBackgroundOptions, videoBackgroundOptions } from "@/store/Background";
import BackgroundCssComponent from "./BackgroundComponents/css";
import BackgroundImageComponent from "./BackgroundComponents/image"
import BackgroundVideoomponent from "./BackgroundComponents/video"
import Styles from './index.module.scss'
import { observer } from "mobx-react";
// <Partial<BackgroundProps>>
// @ts-expect-error: test
window._BACKGROUND_STORE_ = BackgroundStoreInstance

const GetBackgroundTypeComponent = (store: typeof BackgroundStoreInstance) => {
  switch (store.type) {
    case "css": {
      const { cssContent } = store.options as cssBackgroundOptions
      return <BackgroundCssComponent cssContent={cssContent} />
    }
    case "image": {
      const { src, moveWithMouse = false } = store.options as imageBackgroundOptions
      return <BackgroundImageComponent src={src} moveWithMouse={moveWithMouse} />
    }
    case "video": {
      const { src } = store.options as videoBackgroundOptions
      return <BackgroundVideoomponent src={src} />
    }
  }
}

export default observer(({ store = BackgroundStoreInstance }) => {
  useEffect(() => {
    console.log('component render');
  })

  return (
    <div className={Styles.background}>
      <TransitionGroup className="w100 h100">
        <CSSTransition
          key={store.type}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: Styles.transition_enter,
            enterActive: Styles.transition_enter_active,
            exit: Styles.transition_exit,
            exitActive: Styles.transition_exit_active,
          }}
        >
          {GetBackgroundTypeComponent(store)}
        </CSSTransition>
      </TransitionGroup>

      {store.type}
    </div>
  );
});
