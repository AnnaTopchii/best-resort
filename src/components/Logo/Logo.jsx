import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo({ onClick }) {
  return (
    <NavLink to="/" onClick={onClick}>
      <p className={css.logo}>Best resort</p>
    </NavLink>
  );
}
