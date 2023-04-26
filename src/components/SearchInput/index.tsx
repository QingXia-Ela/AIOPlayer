import { FunctionComponent, memo, useState } from "react";
import Styles from './index.module.scss'

interface NavSearchProps {
  ClickSearch?: (val: string) => void
  placeholder?: string
}

const NavSearch: FunctionComponent<Partial<HTMLDivElement> & NavSearchProps> = memo(
  function NavSearch({ className, ClickSearch, placeholder }) {
    const [searchVal, setSearchVal] = useState("")

    return (
      <div className={`${Styles.search} ${className ?? ""}`}>
        <input className={Styles.search_input} type="text" onChange={(e) => setSearchVal(e.target.value)} placeholder={placeholder} value={searchVal} />
        <i className={`iconfont icon-24gl-search2 ${Styles.iconfont}`} onClick={(e) => ClickSearch?.call(e.target, searchVal)}></i>
      </div>
    );
  }
)

export default NavSearch;