import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Styles from './index.module.scss'
import { appWindow } from '@tauri-apps/api/window'
import getPlatform from "@/hooks/getPlatform";

interface TitleBarWindowControlProps {

}

const isTauri = () => getPlatform() === 'tauri'

const TitleBarWindowControl: FunctionComponent<TitleBarWindowControlProps> = () => {
  const [min, setMin] = useState(true)
  const platfrom = getPlatform()

  useEffect(() => {
    if (isTauri()) appWindow.isMaximized().then((v) => setMin(v))
  }, [])

  function changeWindowSize() {
    if (!isTauri()) return
    setMin(!min)
    min ? appWindow.unmaximize() : appWindow.maximize()
  }

  return (
    platfrom === "tauri" ? <div className={Styles.left_control}>
      <i className={`iconfont icon-24gl-minimization ${Styles.iconfont}`} onClick={() => appWindow.minimize()}></i>
      <Suspense>
        <i className={`iconfont icon-24gl-${min ? "minimize" : "square"} ${Styles.iconfont}`} onClick={changeWindowSize}></i>
      </Suspense>
      <i className={`iconfont icon-24gl-cross ${Styles.iconfont}`} onClick={() => appWindow.close()}></i>
    </div> : null
  );
}

export default TitleBarWindowControl;
