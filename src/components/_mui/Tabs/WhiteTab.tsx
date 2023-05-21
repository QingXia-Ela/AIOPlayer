import Styles from './index.module.scss'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material'

const WhiteTabs = styled(Tabs)(() => ({
  minHeight: "2.5000rem",
  ".MuiTabs-indicator": {
    backgroundColor: "#fff"
  }
}))


const WhiteTab = styled(Tab)(() => ({
  color: "#fff",
  fontSize: "1.0625rem",
  width: "5.6250rem",
  minWidth: "5.6250rem",
  minHeight: "2.5000rem",
  padding: 0,
  "&.Mui-selected": {
    color: "#fff",
  }
}))

export { WhiteTabs, WhiteTab }