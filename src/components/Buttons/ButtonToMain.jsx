import { NavLink } from "react-router-dom";
import css from "./ButtonToMain.module.css";

export default function ButtonToMain() {
  return (
    <NavLink to="/">
      <div className={css.to_main}>
        <span>go to main</span>
      </div>
    </NavLink>
  );
}
