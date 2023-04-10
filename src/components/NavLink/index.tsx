import { NavLink as RouterNavLink, NavLinkProps as RouterNavLinkProps } from "react-router-dom";
import { FunctionComponent, PropsWithChildren } from "react";
import Styles from './index.module.scss'

type NavLinkProps = RouterNavLinkProps

const NavLink: FunctionComponent<PropsWithChildren<NavLinkProps>> = ({ children, to }) => {
  return (
    <RouterNavLink className={({ isActive }) => `${Styles.navlink} ${isActive ? Styles.active_navlink : ""}`} to={to}>
      {children}
    </RouterNavLink>
  );
}

export default NavLink;