import { FunctionComponent, useEffect, useState } from "react";
import Styles from './index.module.scss'
import WhiteZebraScrollbar from "@/components/WhiteZebraScrollbar";
import { BottomListType, SingleBottomListItemType } from "../constant";
import ListLeftBottomDetailItem from "./ListItem";
import { albums } from "@/api/album";

interface ListLeftBottomDetailsProps {
  ListData: BottomListType
  onClickItem?: (id: string) => void
}

const simData: BottomListType = [
  {
    type: "img",
    src: "/UAlbum.jpg",
    id: "1",
    title: "冉冉升起，直播新星",
    subTitle: "塞壬唱片-MSR",
  },
  {
    id: "3",
    title: "危机合约-利刃行动",
    subTitle: "MSR",
    selected: true
  },
]

const ListLeftBottomDetails: FunctionComponent<ListLeftBottomDetailsProps> = () => {
  const [list, setList] = useState(simData)
  useEffect(() => {
    albums().then(({ data: { data } }) => {
      // @ts-expect-error: 1
      setList(data.map(({ cid, coverUrl, name, artistes }) => ({
        type: "img",
        id: cid,
        src: coverUrl,
        title: name,
        subTitle: artistes[0]
      })))
    })
  }, [])
  return (
    <div className={Styles.list}>
      <WhiteZebraScrollbar marginBarHeightLimit={3}>
        {
          list.map((v) => (
            <ListLeftBottomDetailItem item={v} key={v.id} />
          ))
        }
      </WhiteZebraScrollbar>
    </div>
  );
}

export default ListLeftBottomDetails;
