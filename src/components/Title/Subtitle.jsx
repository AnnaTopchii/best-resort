import css from "./Title.module.css";

export default function Subtitle({ children }) {
  return <div className={css.subtitle}>{children}</div>;
}
