import { albums } from "@/api/album";
import { FunctionComponent, useEffect, useState } from "react";
import ListLeftBottomDetails from "./BottomList";
import { defaultSort } from "./constant";
import Styles from './index.module.scss'
import ListLeftTopSelect from "./TopSelect";

interface LeftClassifyListProps {

}

const LeftClassifyList: FunctionComponent<LeftClassifyListProps> = () => {
  const [list, setList] = useState([])

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
    <div className={Styles.left_classify_list}>
      <ListLeftTopSelect selectOption={defaultSort} />
      <ListLeftBottomDetails ListData={list} ScrollbarDegNum={0.75} />
    </div>
  );
}

export default LeftClassifyList;
