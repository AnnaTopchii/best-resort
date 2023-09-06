import css from "./Buttons.module.css";

export default function ButtonSendBooking({ onClick }) {
  return (
    <button type="submit" className={css.dark} onClick={onClick}>
      send booking
    </button>
  );
}
