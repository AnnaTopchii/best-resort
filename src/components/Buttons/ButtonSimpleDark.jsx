import css from "./Buttons.module.css";

export default function ButtonSimpleDark({ onClick, children }) {
  return (
    <button type="button" className={css.dark} onClick={onClick}>
      {children}
    </button>
  );
}
