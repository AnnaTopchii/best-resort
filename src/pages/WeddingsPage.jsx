import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Weddings from "../components/Weddings/Weddings";

export default function WeddingsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Weddings</Title>
      <Weddings />
    </div>
  );
}
