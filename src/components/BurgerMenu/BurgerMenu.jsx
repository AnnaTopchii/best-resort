import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

import css from "./BurgerMenu.module.css";
import Logo from "../Logo/Logo";
import ButtonBookNow from "../Buttons/ButtonBookNow";
import SocialsDark from "../Socials/SocialsDark";
import ButtonSimpleDark from "../Buttons/ButtonSimpleDark";

const modalRoot = document.querySelector("#modal-root");

const BurgerMenu = ({ onItemClick }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onItemClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onItemClick]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onItemClick();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal_window}>
        <div className={css.modal_header}>
          <RxCross1
            className={css.icon}
            aria-label="Close menu"
            onClick={onItemClick}
          />
          <Logo />
          <div className={css.animated_button}>
            <ButtonBookNow />
          </div>
        </div>

        <ul className={css.nav}>
          <li className={css.nav_item}>
            <NavLink
              to="/special-offers"
              className={css.link}
              onClick={onItemClick}
            >
              Special offers
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink
              to="/accommodation"
              className={css.link}
              onClick={onItemClick}
            >
              Accommodation
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/food" className={css.link} onClick={onItemClick}>
              Restaurants & Bars
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/weddings" className={css.link} onClick={onItemClick}>
              Weddings
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/services" className={css.link} onClick={onItemClick}>
              Services
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/faq" className={css.link} onClick={onItemClick}>
              FAQ
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/contacts" className={css.link} onClick={onItemClick}>
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className={css.button_container}>
          <ButtonSimpleDark>book now</ButtonSimpleDark>
        </div>

        <div className={css.modal_footer}>
          <SocialsDark />
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default BurgerMenu;
