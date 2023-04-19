import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import LeftClassifyList from "./LeftClassifyList";
import RightListDetail from "./RightListDetail";


interface ListPageProps {

}

const ListPage: FunctionComponent<ListPageProps> = () => {
  return (
    <div className={Styles.list_page}>
      <LeftClassifyList />
      <RightListDetail />
    </div>
  );
}

export default ListPage;