import React, { useState, useEffect } from "react";

import css from "../styles/general.module.css";
import Hero from "../components/Main/Hero";
import Memories from "../components/Main/Memories";
import Welcome from "../components/Main/Welcome";
import Offer from "../components/Main/Offer";
import ButtonRound from "../components/Buttons/ButtonRound";
import ModalBookNow from "../components/ModalBookNow/ModalBookNow";

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Hero />
      <div className={css.main_container}>
        <Memories />
      </div>
      <Welcome />
      <div className={css.main_container}>
        <Offer />
      </div>

      <div className={css.main_button}>
        <ButtonRound onClick={toggleModal} />
      </div>
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </>
  );
}
