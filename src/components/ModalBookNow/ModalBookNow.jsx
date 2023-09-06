import { React, useEffect } from "react";
import { createPortal } from "react-dom";

import { RxCross1 } from "react-icons/rx";
import Logo from "../Logo/Logo";
import css from "./ModalBookNow.module.css";
import BookingForm from "./BookingForm";

const modalRoot = document.querySelector("#modal-root");

const ModalBookNow = ({ onClose }) => {
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
        <div className={css.modal_header}>
          <RxCross1
            className={css.icon}
            aria-label="Close menu"
            onClick={onClose}
          />
          <Logo />
        </div>

        <p className={css.title}>For booking your stay, please fill the form</p>

        <BookingForm />
      </div>
    </div>,
    modalRoot
  );
};

export default ModalBookNow;
