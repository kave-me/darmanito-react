import React, { useState } from "react";
import navbarListItems from './NavbarNavigationItems'
import Logo from "./Logo";

const Navbar = () => {
  const [burger, setBurger] = useState({ isOpen: false });
  const switchBurger = () =>
    setBurger((burger) => ({ isOpen: !burger.isOpen }));


  return (
    <nav className="section navbar">
      <Logo />
      <div
        className={
          burger.isOpen
            ? "navbar__content navbar__content__active"
            : "navbar__content"
        }
      >
        <ul className="navbar__items">
          {navbarListItems.map((item, index) => {
            return (
              <li className="navbar__items__li" key={index}>
                <a
                  href={item.href}
                  className={
                    item.active
                      ? "navbar__items__li__a navbar__items__li__a__active"
                      : "navbar__items__li__a"
                  }
                  key={index}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="navbar__buttonSeparator"></div>
        <button className="navbar__button">دانلود درمانیتو</button>
      </div>
      <i
        className={
          !burger.isOpen
            ? "navbar__hamburger__bars fa fa-bars"
            : "navbar__hamburger__bars__disable fa fa-bars"
        }
        onClick={switchBurger}
      ></i>
      <i
        className={
          burger.isOpen
            ? "navbar__hamburger__cross fa fa-times"
            : "navbar__hamburger__cross__disable fa fa-times"
        }
        onClick={switchBurger}
      ></i>
    </nav>
  );
};

export default Navbar;
