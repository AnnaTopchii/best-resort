import React, { useState } from "react";

import css from "./SpecialOffers.module.css";
import ModalBookNow from "../ModalBookNow/ModalBookNow";
import Subtitle from "../Title/Subtitle";
import ButtonSimpleLight from "../Buttons/ButtonSimpleLight";

export default function Content2() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={css.content_container}>
      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>This summer, here, together</Subtitle>
        </div>
        <p className={css.text}>
          Spend quality time with your loved ones in our 5 star beachfront
          hotel. Enjoy pristine pools, local cuisine and exclusive services
          tailored to your every need. <br />
          Book at least 7 nights and get 1 night for free.
        </p>
      </div>
      <div className={css.button_container}>
        <ButtonSimpleLight onClick={toggleModal} />
      </div>
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
