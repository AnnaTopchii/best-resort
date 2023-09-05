import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import ButtonToMain from "../Buttons/ButtonToMain";
import Logo from "../Logo/Logo";

import css from "./ModalThankYou.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalThankYouContacts = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay_contacts} onClick={handleBackdropClick}>
      <div className={css.modal_window}>
        <div className={css.modal_header}>
          <RxCross1
            className={css.icon}
            aria-label="Close menu"
            onClick={onClose}
          />
          <Logo />
        </div>

        <div className={css.modal_content}>
          <p className={css.text}>
            Thank you!
            <br />
            We will contact you as soon as possible
          </p>
        </div>
        <NavLink to="/" className={css.button}>
          <ButtonToMain />
        </NavLink>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalThankYouContacts;
