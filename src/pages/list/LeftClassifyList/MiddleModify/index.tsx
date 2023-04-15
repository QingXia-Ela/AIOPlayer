import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import Tooltip from '@rebuildMui/Tooltip';

interface ListLeftMiddleModifyProps {

}

const ListLeftMiddleModify: FunctionComponent<ListLeftMiddleModifyProps> = () => {
  return (
    <div className={Styles.middle_modify}>
      <Tooltip title="排序" placement="right">
        <i className={`iconfont icon-24gl-appsBig2 ${Styles.iconfont}`}></i>
      </Tooltip>
      <Tooltip title="刷新" placement="left">
        <i className={`iconfont icon-24gl-refresh ${Styles.iconfont}`}></i>
      </Tooltip>
    </div>
  );
}

export default ListLeftMiddleModify;
