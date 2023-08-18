import css from "./Title.module.css";

export default function Title({ children }) {
  return <div className={css.title}>{children}</div>;
}
