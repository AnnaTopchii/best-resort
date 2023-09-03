import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import css from "./Header.module.css";
import ButtonBookNow from "../Buttons/ButtonBookNow";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ModalBookNow from "../ModalBookNow/ModalBookNow";
import Logo from "../Logo/Logo";

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
        <RxHamburgerMenu className={css.icon} onClick={handleMenuClick} />
        <Logo />
      </div>
      <div className={css.btn_container}>
        <ButtonBookNow onClick={toggleModal} />
      </div>
      {isMenuOpen && <BurgerMenu onItemClick={handleMenuItemClick} />}
      {modalOpen && <ModalBookNow onClose={toggleModal} />}
    </div>
  );
}
