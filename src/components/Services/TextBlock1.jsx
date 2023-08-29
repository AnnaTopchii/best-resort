import css from "./TextBlock.module.css";
import Subtitle from "../Title/Subtitle";

export default function TextBlock1() {
  return (
    <div className={css.content_container}>
      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Massages and beauty treatments</Subtitle>
        </div>
        <p className={css.text}>
          You’ve been working hard all year, you deserve to relax! The spa at
          this five-star hotel offers all kinds of body, facial and beauty
          treatments to help you forget about your everyday worries. In
          addition, you can have a manicure and pedicure or enjoy the
          tranquillity of the water areas such as the sauna, the bucket shower
          and the steam bath.
        </p>
        <p className={css.time}>10:00–19:00</p>
      </div>

      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Pools</Subtitle>
        </div>
        <p className={css.text}>
          Dive into relaxation at our hotel, boasting a refreshing pool, as well
          as a breathtaking rooftop infinity pool with stunning sea views. Your
          ultimate aquatic relaxation experience is just moments away!
        </p>
      </div>
    </div>
  );
}
