import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import LeftClassifyList from "./LeftClassifyList";


interface ListPageProps {

}

const ListPage: FunctionComponent<ListPageProps> = () => {
  return (
    <div className={Styles.list_page}>
      <LeftClassifyList />
    </div>
  );
}

export default ListPage;