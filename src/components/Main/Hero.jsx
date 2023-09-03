import css from "./Hero.module.css";
import mainMob from "../../images/main-mob.jpg";
import mainTabNote from "../../images/main-tab-note.jpg";
import mainDesk from "../../images/main-desk.jpg";
import seaViewMob from "../../images/sea-view-mob.jpg";
import seaViewTab from "../../images/sea-view-tab.jpg";
import seaViewNoteDesk from "../../images/sea-view-note-desk.jpg";

export default function Hero() {
  const screenWidth = window.innerWidth;

  let image1Src;
  let image2Src;

  if (screenWidth < 1440) {
    image1Src = mainMob;
  } else if (screenWidth < 1920) {
    image1Src = mainTabNote;
  } else {
    image1Src = mainDesk;
  }

  if (screenWidth < 768) {
    image2Src = seaViewMob;
  } else if (screenWidth < 1440) {
    image2Src = seaViewTab;
  } else {
    image2Src = seaViewNoteDesk;
  }

  return (
    <section className={css.hero_block}>
      <div className={css.hero_top}>
        <div className={css.text_block_top}>
          <span className={css.text_best}>Best</span>
          <span className={css.text_place}>place You have</span>
        </div>
        <img
          className={css.img_hero_top}
          src={image1Src}
          alt={"the man swims"}
        />
      </div>

      <div className={css.hero_bottom}>
        <img
          className={css.img_hero_bottom}
          src={image2Src}
          alt={"the man swims"}
        />
        <span className={css.text_ever}>ever</span>
      </div>

      <span className={css.text_been_before}>Been before</span>
    </section>
  );
}
