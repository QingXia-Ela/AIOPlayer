/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRef, FunctionComponent, HTMLAttributes, PropsWithChildren, MouseEvent } from "react";
import Styles from './index.module.scss'

interface BackgroundWaveProps {
  color?: string
}

const BackgroundWave: FunctionComponent<PropsWithChildren<BackgroundWaveProps & HTMLAttributes<HTMLDivElement>>> = ({ children, color, ...props }) => {
  const waveWrapper = createRef<HTMLDivElement>()
  function showWave(e: MouseEvent) {
    const { clientX, clientY } = e

    const x = clientX - waveWrapper.current!.offsetLeft
    const y = clientY - waveWrapper.current!.offsetTop

    const ripples = document.createElement('span')
    ripples.setAttribute("class", Styles.wave)
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`;
    if (color) ripples.style.color = color;
    waveWrapper.current?.appendChild(ripples)

    setTimeout(() => {
      ripples.remove()
    }, 800);
  }

  return (
    <div {...props} className={`${Styles.bg_wave} ${props.className ?? ""}`} onClick={showWave} ref={waveWrapper}>
      {children}
    </div>
  );
}

export default BackgroundWave;