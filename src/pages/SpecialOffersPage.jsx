import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";

export default function SpecialOffersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Special offers</Title>
      <SpecialOffers />
    </div>
  );
}
