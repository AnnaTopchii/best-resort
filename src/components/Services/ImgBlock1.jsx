import css from "./ImgBlock.module.css";

import spa from "../../images/spa.jpg";
import pool from "../../images/pool.jpg";

export default function ImgBlock1() {
  return (
    <div className={css.img_container}>
      <img
        className={css.img_1}
        src={spa}
        alt={"relaxation room in the spa center"}
      />
      <img
        className={css.img_2}
        src={pool}
        alt={"the man swims in the pool, the woman rests in the cabana"}
      />
    </div>
  );
}
