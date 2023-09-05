import React, { useState } from "react";
import { GrMapLocation, GrMailOption } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

import css from "./Contacts.module.css";
import ButtonSend from "../Buttons/ButtonSend";
import ModalThankYouContacts from "../ModalThankYou/ModalThankYouContacts";

export default function Contacts() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={css.container}>
      <ul className={css.address_list}>
        <li className={css.address_link}>
          <GrMapLocation className={css.icon} />
          <a
            href="https://goo.gl/maps/PCYvSsK3e4K37gkaA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ukraine, Crimea
          </a>
        </li>
        <li className={css.address_link}>
          <BsTelephone className={css.icon} />
          <a href="tel:+380637768467">+38 063 776 84 67</a>
        </li>
        <li className={css.address_link}>
          <GrMailOption className={css.icon} />
          <a href="mailto:book@bestresort.ua">book@bestresort.ua</a>
        </li>
      </ul>

      <div className={css.help}>
        <p className={css.main_text}>Do you need some help or advice?</p>
        <p className={css.text}>
          If you prefer to receive a call from us, please leave your telephone
          number
        </p>
        <div className={css.form}>
          <input className={css.input} placeholder="+380631234567" />
          <ButtonSend onClick={toggleModal} />
        </div>
      </div>
      {modalOpen && <ModalThankYouContacts onClose={toggleModal} />}
    </div>
  );
}
