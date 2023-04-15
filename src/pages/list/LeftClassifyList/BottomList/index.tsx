import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import WhiteZebraScrollbar from "@/components/WhiteZebraScrollbar";
import { BottomListType } from "../constant";
import ListLeftBottomDetailItem from "./ListItem";

interface ListLeftBottomDetailsProps {
  ListData: BottomListType
  onClickItem?: (id: string) => void
}

const ListLeftBottomDetails: FunctionComponent<ListLeftBottomDetailsProps> = ({ ListData }) => {
  return (
    <div className={Styles.list}>
      {
        ListData.length ? (
          <WhiteZebraScrollbar marginBarHeightLimit={3.1}>
            {
              ListData.map((v) => (
                <ListLeftBottomDetailItem item={v} key={v.id} />
              ))
            }
          </WhiteZebraScrollbar>
        ) : <div className={Styles.empty}>
          <i className="iconfont icon-empty" style={{
            marginBottom: ".4rem",
            fontSize: "1.2rem"
          }}></i>
          <div className={Styles.text}>啥都没有找到捏~(￣▽￣)~*</div>
        </div>
      }
    </div>
  );
}

export default ListLeftBottomDetails;
