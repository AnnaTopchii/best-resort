import css from "./ImgBlock.module.css";

import spa from "../../images/spa.jpg";
import pool from "../../images/pool.jpg";

export default function ImgBlock1() {
  return (
    <div className={css.img_container}>
      <img
        className={css.img_1}
        src={spa}
        alt={"Champagne, glass and fruit with sunset view"}
      />
      <img
        className={css.img_2}
        src={pool}
        alt={"Cocktails near the sun lounger"}
      />
    </div>
  );
}
