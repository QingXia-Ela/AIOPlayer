import { FunctionComponent, HTMLProps, useMemo } from "react";
import Styles from './index.module.scss'

interface FlowUpChangeIconProps extends HTMLProps<HTMLDivElement> {
  IconMap: Record<string, JSX.Element>
  currentIcon?: string
}

const FlowUpChangeIcon: FunctionComponent<FlowUpChangeIconProps> = ({ IconMap, currentIcon, ...p }) => {

  const MemoIconMapElement = useMemo(() => Object.entries(IconMap).map(([k, v]) => (
    <div key={k} className={`${Styles.icon} ${currentIcon ? (currentIcon === k ? Styles.active : Styles.inactive) : ""}`}>{v}</div>
  )), [IconMap, currentIcon])

  return (
    <div {...p} className={`${Styles.wrapper} ${p.className || ""}`}>
      {MemoIconMapElement}
    </div>
  );
}

export default FlowUpChangeIcon;
