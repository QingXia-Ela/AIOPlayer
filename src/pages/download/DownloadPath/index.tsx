import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import Styles from './index.module.scss'
import { FolderShared } from '@mui/icons-material';

interface DownloadPathProps {

}

const DownloadPath: FunctionComponent<DownloadPathProps> = () => {
  return (
    <div className={Styles.download_path}>
      <h3>下载路径</h3>
      <Button className={Styles.path_button} startIcon={<FolderShared />}>C:/Users/114514/1919810/哼哼哼啊啊啊啊啊</Button>
      <Button className={Styles.open_folder_button} variant="text">打开目录</Button>
    </div>
  );
}

export default DownloadPath;