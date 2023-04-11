import { FunctionComponent, Suspense, useEffect, useState } from "react";
import Styles from './index.module.scss'
import { appWindow } from '@tauri-apps/api/window'
import getPlatform from "@/hooks/getPlatform";
import { Link } from "react-router-dom";
import BackgroundWave from "@/components/BackgroundWave";

interface TitleBarWindowControlProps {

}

const isTauri = () => getPlatform() === 'tauri'

const TitleBarWindowControl: FunctionComponent<TitleBarWindowControlProps> = () => {
  const [min, setMin] = useState(true)
  const platfrom = getPlatform()

  useEffect(() => {
    if (isTauri()) {
      appWindow.isMaximized().then((v) => setMin(v))
      appWindow.onResized((e) => {
        appWindow.isMaximized().then((v) => setMin(v))
      })
    }
  }, [])

  function changeWindowSize() {
    if (!isTauri()) return
    setMin(!min)
    min ? appWindow.unmaximize() : appWindow.maximize()
  }

  return (
    <div className={Styles.left_control}>
      <BackgroundWave>
        <Link className={`iconfont icon-24gl-gear ${Styles.iconfont}`} to="/settings"></Link>
      </BackgroundWave>
      {platfrom === "tauri" ? <>
        <i className={`iconfont icon-24gl-minimization ${Styles.iconfont}`} onClick={() => appWindow.minimize()}></i>
        <Suspense>
          <i className={`iconfont icon-24gl-${min ? "minimize" : "square"} ${Styles.iconfont}`} onClick={changeWindowSize}></i>
        </Suspense>
        <i className={`iconfont icon-24gl-cross ${Styles.iconfont}`} onClick={() => appWindow.close()}></i>
      </>
        : null}
    </div>
  );
}

export default TitleBarWindowControl;
