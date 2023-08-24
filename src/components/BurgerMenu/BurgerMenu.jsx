import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

import css from "./BurgerMenu.module.css";

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
      <div className={css.modalWindow}>
        <RxCross1
          className={css.icon}
          aria-label="Close menu"
          onClick={onItemClick}
        />
        <div>
          <h2 className={css.title}>Menu</h2>
          {/* вішаємо onClick={onItemClick} на кожен пункт меню для закриття модалки при переході за навігацією */}
          <ul>
            <li>
              <NavLink to="/" className={css.button} onClick={onItemClick}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className={css.button} onClick={onItemClick}>
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accommodation"
                className={css.button}
                onClick={onItemClick}
              >
                Accommodation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={css.button}
                onClick={onItemClick}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default BurgerMenu;
