import css from "./ButtonBookNow.module.css";
import { CgArrowTopRight } from "react-icons/cg";

export default function ButtonBookNow({ onClick }) {
  return (
    <button type="button" className={css.btnContainer} onClick={onClick}>
      <div className={css.hasTransition} />
      <div className={css.btn}> book now </div>
      <CgArrowTopRight className={css.icon} size="26" />
    </button>
  );
}
