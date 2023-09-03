import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Food from "../components/Food/Food";

export default function FoodPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Restaurants & bars</Title>
      <Food />
    </div>
  );
}
