import { FunctionComponent } from 'react';
import RightBottomList from './BottomList';
import Styles from './index.module.scss'
import RightListMiddleControl from './MiddleControl';
import RightListTopInfo from './TopListInfo';

interface RightListDetailProps {

}

const RightListDetail: FunctionComponent<RightListDetailProps> = () => {
  return (
    <div className={Styles.right_list_detail}>
      <RightListTopInfo />
      <RightListMiddleControl />
      <RightBottomList />
    </div>
  );
}

export default RightListDetail;