import { FunctionComponent } from 'react';
import Styles from './index.module.scss'



interface RightBottomListProps {

}

const RightBottomList: FunctionComponent<RightBottomListProps> = () => {
  return (
    <div className={Styles.bottom_list}></div>
  );
}

export default RightBottomList;