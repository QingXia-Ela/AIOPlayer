import { WhiteTab, WhiteTabs } from '@rebuildMui/Tabs/WhiteTab';
import { Badge, Button, Dialog, DialogTitle, SelectChangeEvent, Stack } from '@mui/material';
import { useState } from 'react';
import Styles from './index.module.scss'
import { ArkBadge } from '@rebuildMui/Badge';
import Select from '@rebuildMui/Select';
import BlackMenuItem from '@rebuildMui/MenuItem/BlackMenuItem';

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

  const [audioSource, setAudioSource] = useState("全部")

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    // setAudioSource(event.target.value as number)
  }

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
        <Button variant='text' color="inherit" sx={{ fontSize: '.3rem' }} onClick={() => setDialogOpen(true)}>音频来源：{audioSource}</Button>
      </WhiteTabs>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>test</DialogTitle>
        <BlackMenuItem value="全部">全部</BlackMenuItem>
        <BlackMenuItem value="音频">音频</BlackMenuItem>
        <BlackMenuItem value="视频">视频</BlackMenuItem>
        <Button onClick={() => setDialogOpen(false)}>取消</Button>
      </Dialog>
    </div>
  );
}

export default DownloadPage;