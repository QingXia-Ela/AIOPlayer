import { createRef, forwardRef, FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import Styles from './index.module.scss'
import WhiteZebraScrollbars from '@/components/WhiteZebraScrollbars';
import SingleItem from './SingleItem';
import NormalListItem from '@/components/NormalListItem';

interface RightBottomListProps {

}

const getSimdata = (cnt: number) => {
  return new Array(cnt).fill(0).map((v, i) => ({
    id: i + "",
    name: "冉冉升起，直播新星",
    artistes: ["塞壬唱片-MSR"],
    type: "siren",
    tags: [{
      content: "NeteaseMusic",
      color: "#ff4b4b"
    }, {
      content: "QQMusic",
      color: "#1ece9b"
    }]
  }))
}

const data = getSimdata(100)

const NormalListItemStyle = {
  transition: "transform .3s",
  width: "98.2%",
}

const RightBottomList: FunctionComponent<RightBottomListProps> = () => {

  const [items, setItems] = useState(() => getSimdata(100))

  return (
    <div className={Styles.bottom_list}>
      <WhiteZebraScrollbars
        marginBarHeightLimit={0.8}
        ScrollbarDegNum={0.48}
        VirtuosoOptions={
          items.length >= 200 ? {
            VirtuosoProps: {
              data: items,
              components: {
                Item: (p) => <NormalListItem {...p} style={NormalListItemStyle} SmallScaleNum={0.99} />
              },
              itemContent: (i, d) => (<SingleItem key={d.id} name={"Operation Pyrite"} author={"塞壬唱片-MSR"} album={"危机合约"} time={"01:14"} tags={d.tags} />)
            }
          } : undefined
        }
      >
        {
          items.length < 200 ? items.map(
            (d) => (
              <NormalListItem style={NormalListItemStyle} SmallScaleNum={0.99} key={d.id}>
                <SingleItem name={"Operation Pyrite"} author={"塞壬唱片-MSR"} album={"危机合约"} time={"01:14"} tags={d.tags} />
              </NormalListItem>
            )
          ) : null
        }
      </WhiteZebraScrollbars>
    </div >
  );
}

export default RightBottomList;