import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Accommodation from "../components/Accommodation/Accommodation";

export default function AccommodationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Accommodation</Title>
      <Accommodation />
    </div>
  );
}
