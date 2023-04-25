import { FunctionComponent } from 'react';
import Styles from './index.module.scss'


interface RowZebraDividerProps {
  children?: any
}

export const ZebraLine = Styles.line
export const ZebraLeft = `${Styles.zebra} ${Styles.zebra_left}`
export const ZebraRight = `${Styles.zebra} ${Styles.zebra_right}`

const RowZebraDivider: FunctionComponent<RowZebraDividerProps> = ({ children }) => {
  return (
    <div className={`${Styles.zebra_divider} w100`}>
      {children ?? (
        <>
          <div className={ZebraLeft}></div>
          <div className={ZebraLine}></div>
          <div className={ZebraRight}></div>
        </>
      )}
    </div>
  );
}

export default RowZebraDivider;