import React, { useEffect } from "react";

import ButtonToMain from "../components/Buttons/ButtonToMain";
import NotFound from "../components/NotFound/NotFound";

import css from "../styles/general.module.css";

export default function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.not_found_container}>
      <NotFound />
      <ButtonToMain />
    </div>
  );
}
