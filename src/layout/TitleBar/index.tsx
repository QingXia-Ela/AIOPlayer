import { FunctionComponent, useEffect } from "react";
import Styles from './index.module.scss'
import TitleBarWindowControl from "./TitleBarWindowControl";
import Nav from './Nav'

interface TitleBarProps {
  dropShadow?: number
}

const TitleBar: FunctionComponent<TitleBarProps> = ({ dropShadow }) => (
  <div data-tauri-drag-region className={Styles.titlebar} style={{ backdropFilter: `blur${dropShadow}px` }}>
    <Nav></Nav>
    <TitleBarWindowControl></TitleBarWindowControl>
  </div>
)

export default TitleBar;
