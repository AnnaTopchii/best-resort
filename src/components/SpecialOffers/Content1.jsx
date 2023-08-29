import React, { useState } from "react";

import css from "./SpecialOffers.module.css";
import ModalBookNow from "../ModalBookNow/ModalBookNow";
import Subtitle from "../Title/Subtitle";
import ButtonSimpleLight from "../Buttons/ButtonSimpleLight";

export default function Content1() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={css.content_container}>
      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Kids stay for free</Subtitle>
        </div>
        <p className={css.text}>
          We want your holidays to exceed your highest expectations. And, of
          course, also those of the people you love most: your children. Our
          hotel where kids stay for free gives you the opportunity to enjoy the
          family holiday you’ve always longed for, with a wide variety of
          entertaining activities for kids.
        </p>
      </div>
      <div className={css.button_container}>
        <ButtonSimpleLight onClick={toggleModal} />
      </div>
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
