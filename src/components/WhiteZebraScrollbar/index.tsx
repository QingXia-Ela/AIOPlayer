import { appWindow } from "@tauri-apps/api/window";
import { throttle } from "lodash";
import * as React from "react";
import { FunctionComponent } from "react";
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import Styles from './index.module.scss'

interface WhiteScrollbarProps extends React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<Scrollbars>, Scrollbars>> {
  /** 以 rem 作为单位 */
  marginBarHeightLimit?: number
  /** 最小 0 */
  ScrollbarDegNum?: number
}

interface scrollClipPathProps {
  lt: number
  rt: number
  lb: number
  rb: number
  clientHeight: number
}

const onBarScroll = (values: positionValues, setFunc: React.Dispatch<React.SetStateAction<scrollClipPathProps>>, ScrollbarDegNum = 0.5) => {
  const { top, clientHeight, scrollHeight } = values
  const scrollbarHeightP = Number((clientHeight / scrollHeight).toFixed(6)) * 100, emptySpace = (100 - scrollbarHeightP) * top
  setFunc({
    lt: emptySpace - ScrollbarDegNum,
    rt: emptySpace + ScrollbarDegNum,
    lb: scrollbarHeightP + emptySpace - ScrollbarDegNum,
    rb: scrollbarHeightP + emptySpace + ScrollbarDegNum,
    clientHeight
  })
}

const onBarScrollThrottle = throttle(onBarScroll, 50)

const WhiteZebraScrollbar: FunctionComponent<WhiteScrollbarProps> = ({ children, marginBarHeightLimit = 0, ScrollbarDegNum, ...props }) => {
  const [scrollThumbHeightPrecentage, setScrollThumbHeightPrecentage] = React.useState<scrollClipPathProps>({
    lt: -1,
    rt: 1,
    lb: -1,
    rb: 1,
    clientHeight: 0
  })
  const ScrollInstance = React.createRef<Scrollbars>()
  // resize on children change
  React.useEffect(() => {
    const initScrollEle = ScrollInstance.current
    onBarScrollThrottle(initScrollEle!.getValues(), setScrollThumbHeightPrecentage)
    appWindow.onResized(function () {
      onBarScrollThrottle(initScrollEle!.getValues(), setScrollThumbHeightPrecentage)
    })
  }, [children])

  const { lt, rt, lb, rb } = scrollThumbHeightPrecentage

  const marginBarHeightStyle = {
    margin: `${marginBarHeightLimit}rem 0`,
    height: `calc(100% - ${marginBarHeightLimit * 2}rem)`
  }

  return (
    <div
      className={Styles.white_scroll_wrapper}
    >
      <div className={`${Styles["white_zebra_scrollbar_thumb-vertical"]}`} style={{
        clipPath: `polygon(0% ${lt}%, 0% ${lb}%, 100% ${rb}%, 100% ${rt}%)`,
        ...marginBarHeightStyle
      }}></div>
      <Scrollbars
        ref={ScrollInstance}
        {...props}
        renderTrackVertical={(prop) => (
          <div
            {...prop}
            className={`${Styles["white_zebra_scrollbar_track-vertical"]}`}
            style={marginBarHeightStyle}
          />
        )}
        renderThumbVertical={() => (<div></div>)}
        onScroll={() => onBarScrollThrottle(ScrollInstance.current!.getValues(), setScrollThumbHeightPrecentage, ScrollbarDegNum)}
      >
        {children}
      </Scrollbars>
    </div>
  );
}

export default WhiteZebraScrollbar;
