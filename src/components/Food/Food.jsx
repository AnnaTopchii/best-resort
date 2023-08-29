import css from "./Food.module.css";
import RestText from "./RestText";
import RestImg from "./RestImg";
import BarText from "./BarText";
import BarImg from "./BarImg";

export default function Food() {
  return (
    <div className={css.container}>
      <div className={css.rest_section}>
        <RestText />
        <RestImg />
      </div>
      <div className={css.bar_section}>
        <BarText />
        <BarImg />
      </div>
    </div>
  );
}
