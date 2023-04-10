import { FunctionComponent, useEffect } from "react";
import Styles from './index.module.scss'
import TitleBarWindowControl from "./TitleBarWindowControl";
import Nav from './Nav'

interface TitleBarProps {

}

const TitleBar: FunctionComponent<TitleBarProps> = () => {
  useEffect(() => {
    // document
    //   .getElementById('titlebar-minimize')
    //   .addEventListener('click', () => appWindow.minimize())
    // document
    //   .getElementById('titlebar-maximize')
    //   .addEventListener('click', () => appWindow.toggleMaximize())
    // document
    //   .getElementById('titlebar-close')
    //   .addEventListener('click', () => appWindow.close())
  }, [])
  return (
    <div data-tauri-drag-region className={Styles.titlebar}>
      <Nav></Nav>
      <TitleBarWindowControl></TitleBarWindowControl>
    </div>
  );
}

export default TitleBar;
