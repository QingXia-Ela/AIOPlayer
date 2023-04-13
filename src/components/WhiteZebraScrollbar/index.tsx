import { throttle } from "lodash";
import * as React from "react";
import { FunctionComponent } from "react";
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import Styles from './index.module.scss'

type WhiteScrollbarProps = React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<Scrollbars>, Scrollbars>>

interface scrollClipPathProps {
  lt: number
  rt: number
  lb: number
  rb: number
  clientHeight: number
}

const ScrollbarDegNum = 0.5

const onBarScroll = throttle((values: positionValues, setFunc: React.Dispatch<React.SetStateAction<scrollClipPathProps>>) => {
  const { top, clientHeight, scrollHeight } = values
  const scrollbarHeightP = Number((clientHeight / scrollHeight).toFixed(6)) * 100, emptySpace = (100 - scrollbarHeightP) * top
  setFunc({
    lt: emptySpace - ScrollbarDegNum,
    rt: emptySpace + ScrollbarDegNum,
    lb: scrollbarHeightP + emptySpace - ScrollbarDegNum,
    rb: scrollbarHeightP + emptySpace + ScrollbarDegNum,
    clientHeight
  })
}, 33)

/**
 * 通过 padding 控制位置时如果出现斜边不完整需要 1 ~ 6px 的上下微调
 */
const WhiteZebraScrollbar: FunctionComponent<WhiteScrollbarProps> = ({ children, ...props }) => {
  const [scrollThumbHeightPrecentage, setScrollThumbHeightPrecentage] = React.useState<scrollClipPathProps>({
    lt: -1,
    rt: 1,
    lb: -1,
    rb: 1,
    clientHeight: 0
  })
  const ScrollInstance = React.createRef<Scrollbars>()
  React.useEffect(() => {
    onBarScroll(ScrollInstance.current!.getValues(), setScrollThumbHeightPrecentage)
  }, [children])

  const { lt, rt, lb, rb, clientHeight } = scrollThumbHeightPrecentage

  return (
    <div
      className={Styles.white_scroll_wrapper}
    >
      <div className={`${Styles["white_zebra_scrollbar_thumb-vertical"]}`} style={{
        clipPath: `polygon(0% ${lt}%, 0% ${lb}%, 100% ${rb}%, 100% ${rt}%)`,
        height: clientHeight
      }}></div>
      <Scrollbars
        ref={ScrollInstance}
        {...props}
        renderTrackVertical={(prop) => (
          <div
            {...prop}
            className={`${Styles["white_zebra_scrollbar_track-vertical"]}`}
          />
        )}
        renderThumbVertical={() => (<div></div>)}
        onScroll={() => onBarScroll(ScrollInstance.current!.getValues(), setScrollThumbHeightPrecentage)}
      >
        {children}
      </Scrollbars>
    </div>
  );
}

export default WhiteZebraScrollbar;
