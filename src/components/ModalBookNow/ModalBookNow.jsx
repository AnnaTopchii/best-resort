import { React, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { RxCross1 } from "react-icons/rx";
import Logo from "../Logo/Logo";
import css from "./ModalBookNow.module.css";
import BookingForm from "./BookingForm";
import ModalThankYou from "../ModalThankYou/ModalThankYou";

const modalRoot = document.querySelector("#modal-root");

const ModalBookNow = ({ onClose }) => {
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [submittedUserName, setSubmittedUserName] = useState(null);

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

  const handleThankYouModalClose = () => {
    setThankYouModalOpen(false);
    setSubmittedUserName(null);
    onClose();
  };

  const openThankYouModal = (userName) => {
    setSubmittedUserName(userName);
    setThankYouModalOpen(true);
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      {thankYouModalOpen ? (
        <ModalThankYou
          onClose={handleThankYouModalClose}
          name={submittedUserName}
        />
      ) : (
        <div className={css.modal_window}>
          <div className={css.modal_header}>
            <RxCross1
              className={css.icon}
              aria-label="Close menu"
              onClick={onClose}
            />
            <Logo />
          </div>

          <p className={css.title}>
            For booking your stay, please fill the form
          </p>

          <BookingForm openThankYouModal={openThankYouModal} />
        </div>
      )}
      ,
    </div>,
    modalRoot
  );
};

export default ModalBookNow;
