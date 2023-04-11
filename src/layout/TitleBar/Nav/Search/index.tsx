import { FunctionComponent, memo, useState } from "react";
import Styles from './index.module.scss'

interface NavSearchProps {

}

const NavSearch: FunctionComponent<NavSearchProps> = memo(
  function NavSearch() {
    const [searchVal, setSearchVal] = useState("")

    return (
      <div className={Styles.search}>
        <input className={Styles.search_input} type="text" onChange={(e) => setSearchVal(e.target.value)} placeholder="搜索..." value={searchVal} />
        <i className={`iconfont icon-24gl-search2 ${Styles.iconfont}`}></i>
      </div>
    );
  }
)

export default NavSearch;