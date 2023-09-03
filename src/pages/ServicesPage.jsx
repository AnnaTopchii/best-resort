import React, { useState, useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Services from "../components/Services/Services";
import ButtonRound from "../components/Buttons/ButtonRound";
import ModalBookNow from "../components/ModalBookNow/ModalBookNow";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={css.container}>
      <Title>Services</Title>
      <Services />
      <div className={css.main_button}>
        <ButtonRound onClick={toggleModal} />
      </div>
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
