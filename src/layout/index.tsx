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
      <div style={{ height: "550px", backgroundColor: "#333", padding: "36px 20px 6px 0" }}>
        <WhiteZebraScrollbar>
          11
          <div style={{ width: "300px", height: "1141px" }}></div>
          22
        </WhiteZebraScrollbar>
      </div>
      <Background></Background>
    </>
  );
}

export default Layout;
