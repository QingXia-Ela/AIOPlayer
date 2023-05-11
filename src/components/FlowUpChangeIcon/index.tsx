import { createRef, FunctionComponent, HTMLProps, useEffect, useMemo } from "react";
import Styles from './index.module.scss'

interface FlowUpChangeIconProps extends HTMLProps<HTMLDivElement> {
  IconMap: Record<string, JSX.Element>
  currentIcon?: string
}

const FlowUpChangeIcon: FunctionComponent<FlowUpChangeIconProps> = ({ IconMap, currentIcon, ...p }) => {
  const iconWrapperRef = createRef<HTMLDivElement>()

  const MemoIconMapElement = useMemo(() => Object.entries(IconMap).map(([k, v]) => (
    <div key={k} className={`${Styles.icon} ${currentIcon && currentIcon === k ? Styles.active : Styles.inactive}`}>{v}</div>
  )), [IconMap, currentIcon])

  useEffect(() => {
    requestAnimationFrame(() => {
      // @ts-expect-error: set style
      iconWrapperRef.current.style.animationDuration = '0.3s'
    })
  }, [])

  return (
    <div {...p} className={`${Styles.wrapper} ${p.className || ""}`} ref={iconWrapperRef}>
      {MemoIconMapElement}
    </div>
  );
}

export default FlowUpChangeIcon;
