import { imageBackgroundOptions } from "@/store/Background";
import { createRef, FunctionComponent, memo, useEffect } from "react";
import Styles from './index.module.scss'
import throttle from 'lodash/throttle';

const listenMouseMove = throttle((e: MouseEvent, ele: HTMLImageElement | null) => {
  const w = window.innerWidth / 2, h = window.innerHeight / 2
  const x = (((e.clientX - w) / w) * 0.2).toFixed(2);
  const y = (((e.clientY - h) / h) * 0.2).toFixed(2);
  if (ele) ele.style.transform = `translate(${x}%,${y}%)`;
}, 16);

export default memo(
  function BackgroundImageComponent({ src, moveWithMouse }) {
    const imgEle = createRef<HTMLImageElement>()
    useEffect(() => {
      const moveFunc = (e: MouseEvent) => listenMouseMove(e, imgEle.current)
      imgEle.current!.style.left = `-${imgEle.current!.width / 4 - window.innerWidth / 4}px`
      if (moveWithMouse) window.addEventListener('mousemove', moveFunc);
      return () => {
        window.removeEventListener('mousemove', moveFunc)
      }
    }, [])
    return (
      <div className={Styles.image_bg}>
        <img className={Styles.image_bg__img} src={src} ref={imgEle} style={{ left: 0 }} />
      </div>
    );
  }
) as FunctionComponent<imageBackgroundOptions>
