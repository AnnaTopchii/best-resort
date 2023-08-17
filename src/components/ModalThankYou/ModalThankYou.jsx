import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

import css from "./ModalThankYou.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalWindow = ({ onClose }) => {
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
      <div className={css.modalWindow}>
        <RxCross1
          className={css.icon}
          aria-label="Close modal window"
          onClick={onClose}
        />
        <div>
          <h2 className={css.title}>Modal Window</h2>

          <NavLink to="/main" className={css.button}>
            To main page
          </NavLink>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
