import { memo } from "react";
import Styles from './index.module.scss'
import BackgroundStoreInstance from "@/store/Background";
import { observer } from "mobx-react";

interface BackgroundMaskProps {
  store: typeof BackgroundStoreInstance
}

export default observer(function BackgroundMask({ store }: BackgroundMaskProps) {
  return <div className={`${Styles.mask} w100 h100`} style={{ opacity: store.maskOpacity }}></div>
})
