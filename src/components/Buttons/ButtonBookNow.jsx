import css from "./ButtonBookNow.module.css";
import { CgArrowTopRight } from "react-icons/cg";

export default function ButtonBookNow({ onClick }) {
  return (
    <button type="button" className={css.btn_container} onClick={onClick}>
      <div className={css.has_transition} />
      <div className={css.btn}> book now </div>
      <CgArrowTopRight className={css.icon} size="26" />
    </button>
  );
}
