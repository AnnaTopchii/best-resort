import css from "./Buttons.module.css";

export default function ButtonSend({ onClick }) {
  return (
    <button type="submit" className={css.send} onClick={onClick}>
      send
    </button>
  );
}
