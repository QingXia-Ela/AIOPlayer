import { albums } from "@/api/album";
import { FunctionComponent, useEffect, useState } from "react";
import { defaultSort } from "./constant";
import Styles from './index.module.scss'
import ListLeftTopSelect from "./TopSelect";
import ListLeftMiddleModify from "./MiddleModify";
import ListLeftBottomDetails from "./BottomList";
import APIStoreInstance from "@/store/API";
import { observer } from "mobx-react";

interface LeftClassifyListProps {
  store: typeof APIStoreInstance
}

const LeftClassifyList: FunctionComponent<LeftClassifyListProps> = observer(({ store = APIStoreInstance }) => {
  useEffect(() => {
    store.fetchAlbumsData()
  }, [])
  return (
    <div className={Styles.left_classify_list}>
      <ListLeftTopSelect selectOption={defaultSort} />
      <ListLeftMiddleModify />
      <ListLeftBottomDetails ListData={store.AlbumsDataList} ScrollbarDegNum={0.75} />
    </div>
  );
})

export default LeftClassifyList;
