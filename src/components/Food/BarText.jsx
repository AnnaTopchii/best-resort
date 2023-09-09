import css from "./Food.module.css";
import Subtitle from "../Title/Subtitle";

export default function RestText() {
  return (
    <div className={css.content_container}>
      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Lounge Bar</Subtitle>
        </div>
        <p className={css.text}>
          You’re on holiday. Relax in the Lounge bar and enjoy a little
          something from the snack menu or a glass of wine while listening to
          live music. From violin performances to jazz. Snack menu available
          from 12:00 to 18:00.
        </p>
        <p className={css.time}>9:00–00:00</p>
      </div>

      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Pool Bar</Subtitle>
        </div>
        <p className={css.text}>
          There is a wide variety of cocktails, soft drinks and snacks for you
          to enjoy in between dips in the pool. In winter, this bar is closed
          and service is provided in the Lounge bar.
        </p>
        <p className={css.time}>10:00–18:00</p>
      </div>

      <div className={css.text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Sunset Champagne Bar</Subtitle>
        </div>
        <p className={css.text}>
          You, your partner, the Crimean sunset, a backdrop of chill out music
          and a glass of the best champagne. The best ingredients for a magical
          night.
        </p>
        <p className={css.time}>10:00–18:00</p>
      </div>
    </div>
  );
}
