import { NavLink } from "react-router-dom";
// import { PiSmileySadThin, PiPawPrintLight } from "react-icons/pi";

import css from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <span>Ooops!</span>
        <span>This page not found</span>
      </h1>

      <NavLink to="/main" className={css.button}>
        To main page
      </NavLink>
    </div>
  );
}
