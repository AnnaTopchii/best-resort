import React, { useEffect } from "react";

import css from "../styles/general.module.css";
import Hero from "../components/Main/Hero";
import Memories from "../components/Main/Memories";
import Welcome from "../components/Main/Welcome";
import Offer from "../components/Main/Offer";

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <div className={css.main_container}>
        <Memories />
      </div>
      <Welcome />
      <div className={css.main_container}>
        <Offer />
      </div>
    </>
  );
}
