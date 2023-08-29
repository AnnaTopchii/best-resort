import { React, useEffect } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

import css from "./ModalBookNow.module.css";
import ButtonSimpleDark from "../Buttons/ButtonSimpleDark";

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
        <RxCross1
          className={css.icon}
          aria-label="Close modal window"
          onClick={onClose}
        />
        <div>
          <h2 className={css.title}>Book Now Modal</h2>
          <p>Тут буде форма</p>
          <ButtonSimpleDark>send booking</ButtonSimpleDark>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalBookNow;
