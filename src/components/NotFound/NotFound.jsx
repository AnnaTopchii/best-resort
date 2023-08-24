import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.text_container}>
      <span className={css.main_text}>Sorry</span>
      <span className={css.secondary_text}>something went wrong</span>
      <span className={css.something_mob}>something</span>
      <span className={css.went_wrong_mob}>went wrong</span>
    </div>
  );
}
