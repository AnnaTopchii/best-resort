import css from "./Bar.module.css";

import bar from "../../images/bar.jpg";
import poolBar from "../../images/pool-bar.jpg";

export default function BarImg() {
  return (
    <div className={css.img_block_container}>
      <img
        className={css.img_big}
        src={bar}
        alt={"Champagne, glass and fruit with sunset view"}
      />
      <img
        className={css.img_small}
        src={poolBar}
        alt={"Cocktails near the sun lounger"}
      />
    </div>
  );
}
