import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Subtitle from "../components/Title/Subtitle";

export default function WeddingsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <Title>Weddings</Title>
      <Subtitle>Sorry, this page is in development</Subtitle>
    </div>
  );
}
