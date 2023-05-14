import { WhiteTab, WhiteTabs } from '@rebuildMui/Tabs/WhiteTab';
import { Badge } from '@mui/material';
import { useState } from 'react';
import Styles from './index.module.scss'
import { ArkBadge } from '@rebuildMui/Badge';

interface DownloadPageProps {

}

const BadgeStyles = {
  color: '#fff',
  ".MuiBadge-badge": {
    fontSize: '.12rem',
    backgroundColor: 'transparent',
    minWidth: '.3rem',
    width: '.3rem',
    height: '.3rem',
    border: "1px solid #fff",
  }
}

const DownloadPage: React.FC<DownloadPageProps> = () => {

  const [value, setValue] = useState(0);



  return (
    <div className={Styles.download_page}>
      <h2 className={Styles.title}>下载管理</h2>
      <WhiteTabs className={Styles.tabs} value={value} onChange={(event, newValue) => setValue(newValue)}>
        <WhiteTab label={
          <Badge badgeContent={1} sx={BadgeStyles}>
            下载中
          </Badge>
        } />
        <WhiteTab label={
          <ArkBadge color="default" sx={{
            color: '#fff',
          }}>
            已完成
          </ArkBadge>
        } />
      </WhiteTabs>
    </div>
  );
}

export default DownloadPage;