import WhiteZebraScrollbar from "@/components/WhiteZebraScrollbar";
import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import ListLeftTopSelect from "./TopSelect";



interface LeftClassifyListProps {

}

const LeftClassifyList: FunctionComponent<LeftClassifyListProps> = () => {
  return (
    <div className={Styles.left_classify_list}>
      <ListLeftTopSelect />
    </div>
  );
}

export default LeftClassifyList;
