import { NavLink } from "react-router-dom";
import css from "./ButtonToMain.module.css";

export default function ButtonToMain({ onClick }) {
  return (
    <NavLink to="/" onClick={onClick}>
      <div className={css.to_main}>
        <span>go to main</span>
      </div>
    </NavLink>
  );
}
