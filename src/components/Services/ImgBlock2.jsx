import css from "./ImgBlock.module.css";

import gym from "../../images/gym.jpg";
import bicycle from "../../images/bicycle.jpg";

export default function ImgBlock2() {
  return (
    <div className={css.img_container}>
      <img
        className={css.img_3}
        src={gym}
        alt={"Champagne, glass and fruit with sunset view"}
      />
      <img
        className={css.img_4}
        src={bicycle}
        alt={"Cocktails near the sun lounger"}
      />
    </div>
  );
}
