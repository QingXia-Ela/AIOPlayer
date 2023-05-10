import { FunctionComponent, HTMLProps } from 'react';
import Styles from './index.module.scss'

interface LeftInfoProps {

}

const LeftInfo: FunctionComponent<LeftInfoProps> = () => {
  return (
    <div className={`${Styles.left_info}`}>
      <div className={Styles.left_img}>
        <img className={Styles.inner_img} src="/UAlbum.jpg" />
      </div>
      <div className={Styles.right_song_info}>
        <div className={`${Styles.song_name} text_nowrap`} title={"full title"}>理塘金曲合集 - I Got Smoke</div>
        <div className={Styles.song_singer}>理塘丁真</div>
      </div>
    </div>
  );
}

export default LeftInfo;