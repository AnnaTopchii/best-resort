import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Header</h1>
    </div>
  );
}
