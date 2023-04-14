import { FunctionComponent } from "react";
import ListLeftBottomDetails from "./BottomList";
import { defaultSort } from "./constant";
import Styles from './index.module.scss'
import ListLeftTopSelect from "./TopSelect";

interface LeftClassifyListProps {

}

const LeftClassifyList: FunctionComponent<LeftClassifyListProps> = () => {
  return (
    <div className={Styles.left_classify_list}>
      <ListLeftTopSelect selectOption={defaultSort} />
      <ListLeftBottomDetails ListData={[]} />
    </div>
  );
}

export default LeftClassifyList;