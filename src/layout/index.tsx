import { FunctionComponent } from 'react';
import Styles from './index.module.scss'
import Background from "./Background";
import TitleBar from './TitleBar';
import BottomPlayer from './BottomPlayer';

interface LayoutProps {
  children?: any
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <TitleBar></TitleBar>
      <div className={Styles.layout}>
        {children}
      </div>
      <BottomPlayer />
      <Background></Background>
    </>
  );
}

export default Layout;
