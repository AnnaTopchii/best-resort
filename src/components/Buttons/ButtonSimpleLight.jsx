import css from "./Buttons.module.css";

export default function ButtonSimpleLight({ onClick }) {
  return (
    <button type="button" className={css.light} onClick={onClick}>
      book now
    </button>
  );
}
