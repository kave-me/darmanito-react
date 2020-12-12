import React, { useState} from "react";
import navbarListItems from './NavbarNavigationItems';
import Logo from "../logo";
import {useLocation, NavLink} from 'react-router-dom';
import MainDownloadModal from "../modal/download-modal/download-modal";
import styles from'./navbar.module.scss';
import cx from 'classnames';

const Navbar = () => {
  const [burger, setBurger] = useState({ isOpen: false });
  const switchBurger = () =>
    setBurger((burger) => ({ isOpen: !burger.isOpen }));

  const location = useLocation();
  const [links, setLinks] = useState(navbarListItems);
  const handleNavigation = () => {
    let newNavItems = links.map(item => {
                      item.href === location.pathname
                      ? item.active = true
                      : item.active=false;
                       return (item)})
      setLinks(newNavItems)}
  const [viewModal, setViewModal] = useState(false);
  return (
    <nav className={cx(styles.navbar, styles.section)}>
      <Logo />
      <div
        className={
          burger.isOpen
            ? cx(styles.navbar__content, styles.navbar__content__active)
            : styles.navbar__content
        }>
        <ul className={styles.navbar__items}>
          {links.map((item, index) => {
            return (
              <li className={styles.navbar__items__li} key={index}>
                <NavLink
                  exact={true}
                  to={item.href}
                  onClick={handleNavigation}
                  activeClassName= {styles.navbar__items__li__a__active}
                  className= {styles.navbar__items__li__a}
                  key={index}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className={styles.navbar__buttonSeparator}></div>
        <button className={styles.navbar__button} onClick={() => setViewModal(true)}>دانلود درمانیتو</button>
      </div>
      <i
        className={
          !burger.isOpen
            ? cx(styles.navbar__hamburger__bars, " fa fa-bars")
            : cx(styles.navbar__hamburger__bars__disable, " fa fa-bars")
        }
        onClick={switchBurger}
      ></i>
      <i
        className={
          burger.isOpen
            ? cx(styles.navbar__hamburger__cross, " fa fa-times")
            : cx(styles.navbar__hamburger__cross__disable, " fa fa-times")
        }
        onClick={switchBurger}
      ></i>
      {viewModal
       ? <MainDownloadModal click={() => setViewModal(!viewModal)}/>
       : null}
    </nav>
  );
};

export default Navbar;