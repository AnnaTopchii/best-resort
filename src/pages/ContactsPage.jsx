import React, { useEffect } from "react";
import css from "../styles/general.module.css";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Contacts Page</h1>
    </div>
  );
}
