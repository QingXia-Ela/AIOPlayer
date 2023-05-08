import { FunctionComponent, HTMLProps } from 'react';
import Styles from './index.module.scss'

interface AudioInfoTagProps extends HTMLProps<HTMLAnchorElement> {
  href?: string
}

/**
 * color 属性为 inherint，也可通过 style 设置
 */
const AudioInfoTag: FunctionComponent<AudioInfoTagProps> = ({ children, href, ...p }) => {
  return (
    <a {...p} className={`${Styles.audio_tag} ${href || p.onClick ? Styles.alink : ""}`} href={href}>
      {children}
    </a>
  );
}

export default AudioInfoTag;
