import React, { useEffect } from "react";

import css from "../styles/general.module.css";

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>FAQ</h1>
    </div>
  );
}
