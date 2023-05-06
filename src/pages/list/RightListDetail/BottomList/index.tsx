import { createRef, forwardRef, FunctionComponent, useCallback, useMemo, useState } from 'react';
import Styles from './index.module.scss'
import WhiteZebraScrollbars from '@/components/WhiteZebraScrollbars';

interface RightBottomListProps {

}

const getSimdata = (cnt: number) => {
  return new Array(cnt).fill(0).map((v, i) => ({
    id: i + "",
    name: "冉冉升起，直播新星",
    artistes: ["塞壬唱片-MSR"],
    type: "siren"
  }))
}

const data = getSimdata(100)

const RightBottomList: FunctionComponent<RightBottomListProps> = () => {

  const [items, setItems] = useState(() => getSimdata(100))

  return (
    <div className={Styles.bottom_list}>
      <WhiteZebraScrollbars
        marginBarHeightLimit={0.8}
        ScrollbarDegNum={0.48}
        VirtuosoOptions={{
          VirtuosoProps: {
            data: items,
            itemContent: (i, d) => (<div key={d.id}>{d.name}</div>)
          }
        }}
      />
    </div >
  );
}

export default RightBottomList;