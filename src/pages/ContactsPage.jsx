import React, { useEffect } from "react";
import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Hero from "../components/Contacts/Hero";
import Contacts from "../components/Contacts/Contacts";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.contacts_container}>
      <Hero />
      <div className={css.contacts_inner_container}>
        <Title>Contacts</Title>
        <Contacts />
      </div>
    </div>
  );
}
