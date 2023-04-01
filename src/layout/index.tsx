import { FunctionComponent } from 'react';
import Styles from './index.module.scss'
import Background from "./Background";

interface LayoutProps {
  children?: any
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={Styles.layout}>
        {children}
      </div>
      <Background></Background>
    </>
  );
}

export default Layout;
