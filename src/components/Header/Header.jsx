import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import css from "./Header.module.css";
import ButtonBookNow from "../Buttons/ButtonBookNow";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ModalBookNow from "../ModalBookNow/ModalBookNow";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }

    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [isMenuOpen]);

  return (
    <div className={css.container}>
      <div className={css.logo_container}>
        <FiMenu className={css.icon} onClick={handleMenuClick} />
        <NavLink to="/">
          <h1 className={css.logo}>Best resort</h1>
        </NavLink>
      </div>
      <div className={css.btn_container}>
        <ButtonBookNow onClick={toggleModal} />
      </div>
      {isMenuOpen && <BurgerMenu onItemClick={handleMenuItemClick} />}
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
