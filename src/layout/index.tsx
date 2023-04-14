import { FunctionComponent } from 'react';
import Styles from './index.module.scss'
import Background from "./Background";
import TitleBar from './TitleBar';
import WhiteZebraScrollbar from '@/components/WhiteZebraScrollbar';


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
      <Background></Background>
    </>
  );
}

export default Layout;
