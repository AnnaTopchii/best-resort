import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/">
      <p className={css.logo}>Best resort</p>
    </NavLink>
  );
}
