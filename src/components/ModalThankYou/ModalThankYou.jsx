import { React } from "react";
import { RxCross1 } from "react-icons/rx";
import ButtonToMain from "../Buttons/ButtonToMain";
import Logo from "../Logo/Logo";

import css from "./ModalThankYou.module.css";

const ModalThankYou = ({ onClose, name }) => {
  return (
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
          Thank you, {name}!<br />
          We have received your booking request and will contact you as soon as
          possible
        </p>
      </div>
      <div className={css.button}>
        <ButtonToMain onClick={onClose} />
      </div>
    </div>
  );
};

export default ModalThankYou;
