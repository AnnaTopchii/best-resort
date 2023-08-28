import css from "./Rest.module.css";

import foodBig1 from "../../images/food-big-1.jpg";
import foodBig2 from "../../images/food-big-2.jpg";
import food1 from "../../images/food-1.jpg";
import food2 from "../../images/food-2.jpg";
import food3 from "../../images/food-3.jpg";
import food4 from "../../images/food-4.jpg";

export default function RestImg() {
  return (
    <div className={css.imgBlockContainer}>
      <div className={css.smallImgContainer}>
        <img
          className={css.img_small}
          src={food1}
          alt={"the girl rests in a hammock"}
        />
        <img
          className={css.img_small}
          src={food2}
          alt={"the girl rests in a hammock"}
        />
      </div>

      <img
        className={css.img_big1}
        src={foodBig1}
        alt={"the girl rests in a hammock"}
      />

      <img
        className={css.img_big2}
        src={foodBig2}
        alt={"the girl rests in a hammock"}
      />

      <div className={css.smallImgContainer}>
        <img
          className={css.img_small}
          src={food3}
          alt={"the girl rests in a hammock"}
        />
        <img
          className={css.img_small}
          src={food4}
          alt={"the girl rests in a hammock"}
        />
      </div>
    </div>
  );
}
