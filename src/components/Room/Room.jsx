import { React, useState } from "react";

import css from "./Room.module.css";
import Capacity from "../Capacity/Capacity";
import Price from "../Price/Price";
import ButtonSimpleDark from "../Buttons/ButtonSimpleDark";
import ButtonSimpleLight from "../Buttons/ButtonSimpleLight";
import ModalBookNow from "../ModalBookNow/ModalBookNow";

export default function Room({ room }) {
  const { bed, view, description, facilities, capacity, size, price } = room;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={css.container}>
      <div className={css.description}>
        <p>{description}</p>
      </div>

      <div className={css.inner_container}>
        <div className={css.facilities}>
          <p>Facilities:</p>
          <ul>
            {facilities.map((facility, idx) => (
              <li key={idx} className={css.list_item}>
                {facility}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.card}>
          <div className={css.card_info}>
            <Capacity capacity={capacity} size={size} />
            <p>{view}</p>
            <p>{bed}</p>
          </div>
          <div className={css.card_price}>
            <Price price={price} />
            <div className={css.button_inside_dark}>
              <ButtonSimpleDark onClick={toggleModal}>
                book now
              </ButtonSimpleDark>
            </div>
            <div className={css.button_inside_light}>
              <ButtonSimpleLight onClick={toggleModal} />
            </div>
          </div>
        </div>
      </div>

      <div className={css.button_outside}>
        <ButtonSimpleDark onClick={toggleModal}>book now</ButtonSimpleDark>
      </div>
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
