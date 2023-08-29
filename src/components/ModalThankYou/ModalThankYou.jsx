import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import ButtonToMain from "../Buttons/";

import css from "./ModalThankYou.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalThankYou = ({ onClose }) => {
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
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal_window}>
        <RxCross1
          className={css.icon}
          aria-label="Close modal window"
          onClick={onClose}
        />
        <div>
          <h2 className={css.title}>Thank you Modal</h2>

          <NavLink to="/" className={css.button}>
            <ButtonToMain />
          </NavLink>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalThankYou;
