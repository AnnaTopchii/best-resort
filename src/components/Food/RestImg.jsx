import css from "./Rest.module.css";

import foodBig1 from "../../images/food-big-1.jpg";
import foodBig2 from "../../images/food-big-2.jpg";
import food1 from "../../images/food-1.jpg";
import food2 from "../../images/food-2.jpg";
import food3 from "../../images/food-3.jpg";
import food4 from "../../images/food-4.jpg";

export default function RestImg() {
  return (
    <div className={css.img_block_container}>
      <div className={css.small_img_container}>
        <img
          className={css.img_small}
          src={food1}
          alt={"desserts served by the waiter on a tray"}
        />
        <img
          className={css.img_small}
          src={food2}
          alt={"table with breakfast and glasses of juice and cups of coffee"}
        />
      </div>

      <img
        className={css.img_big1}
        src={foodBig1}
        alt={
          "the table is set for dinner. on the table are glasses with water and wine and plates with dishes"
        }
      />

      <img
        className={css.img_big2}
        src={foodBig2}
        alt={"a woman in a blue dress is having dinner"}
      />

      <div className={css.smallImgContainer}>
        <img
          className={css.img_small}
          src={food3}
          alt={"the bartender pours pink champagne into a glass"}
        />
        <img
          className={css.img_small}
          src={food4}
          alt={"Greek salad in a ceramic bowl"}
        />
      </div>
    </div>
  );
}
