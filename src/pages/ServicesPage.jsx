import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Services from "../components/Services/Services";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Services</Title>
      <Services />
    </div>
  );
}
