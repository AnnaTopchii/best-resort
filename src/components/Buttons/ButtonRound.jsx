import css from "./Buttons.module.css";

export default function ButtonRound({ onClick }) {
  return (
    <button type="button" className={css.round} onClick={onClick}>
      book now
    </button>
  );
}
