import { FunctionComponent, HTMLProps } from 'react';
import Styles from './index.module.scss'

type AudioInfoTagProps = HTMLProps<HTMLDivElement>

/**
 * color 属性为 inherint，也可通过 style 设置
 */
const AudioInfoTag: FunctionComponent<AudioInfoTagProps> = ({ children, ...p }) => {
  return (
    <div {...p} className={Styles.audio_tag}>
      {children}
    </div>
  );
}

export default AudioInfoTag;