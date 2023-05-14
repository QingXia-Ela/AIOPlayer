import Styles from './index.module.scss'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material'

const WhiteTabs = styled(Tabs)(() => ({
  minHeight: ".8rem",
  ".MuiTabs-indicator": {
    backgroundColor: "#fff"
  }
}))


const WhiteTab = styled(Tab)(() => ({
  color: "#fff",
  fontSize: ".34rem",
  width: "1.8rem",
  minWidth: "1.8rem",
  minHeight: ".8rem",
  padding: 0,
  "&.Mui-selected": {
    color: "#fff",
  }
}))

export { WhiteTabs, WhiteTab }