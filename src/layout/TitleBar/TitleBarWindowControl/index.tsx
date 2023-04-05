import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Styles from './index.module.scss'
import { appWindow } from '@tauri-apps/api/window'

interface TitleBarWindowControlProps {

}

const TitleBarWindowControl: FunctionComponent<TitleBarWindowControlProps> = () => {
  const [min, setMin] = useState(true)


  useEffect(() => {
    appWindow.isMaximized().then((v) => setMin(v))
    // appWindow
  }, [])

  function changeWindowSize() {
    console.log(min);

    setMin(!min)
    min ? appWindow.unmaximize() : appWindow.maximize()
    // appWindow.isMaximized().then((v) => setMin(v))
  }

  return (
    <div className={Styles.left_control}>
      <i className={`iconfont icon-24gl-minimization ${Styles.iconfont}`} onClick={() => appWindow.minimize()}></i>
      <Suspense>
        <i className={`iconfont icon-24gl-${min ? "minimize" : "square"} ${Styles.iconfont}`} onClick={changeWindowSize}></i>
      </Suspense>
      <i className={`iconfont icon-24gl-cross ${Styles.iconfont}`} onClick={() => appWindow.close()}></i>
    </div>
  );
}

export default TitleBarWindowControl;