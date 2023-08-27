import css from "./SpecialOffers.module.css";
import Content1 from "./Content1";
import Content2 from "./Content2";
import kidsMobDesk from "../../images/kids-mob-desk.jpg";
import kidsTab from "../../images/kids-tab.jpg";
import kidsNote from "../../images/kids-note.jpg";
import specialMobDesk from "../../images/special-mob-desk.jpg";
import specialTab from "../../images/special-tab.jpg";
import specialNote from "../../images/special-note.jpg";

export default function SpecialOffers() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);

  let image1Src;
  let image2Src;

  if (screenWidth < 768 || screenWidth >= 1920) {
    image1Src = kidsMobDesk;
  } else if (screenWidth < 1440) {
    image1Src = kidsTab;
  } else {
    image1Src = kidsNote;
  }

  if (screenWidth < 768 || screenWidth >= 1920) {
    image2Src = specialMobDesk;
  } else if (screenWidth < 1440) {
    image2Src = specialTab;
  } else {
    image2Src = specialNote;
  }

  return (
    <div className={css.container}>
      <div className={css.section}>
        <img
          className={css.img_1}
          src={image1Src}
          alt={"kids with parents on vocation"}
        />
        <Content1 />
      </div>
      <div className={css.section}>
        <img
          className={css.img_2}
          src={image2Src}
          alt={"the girl rests in a hammock"}
        />
        <Content2 />
      </div>
    </div>
  );
}
