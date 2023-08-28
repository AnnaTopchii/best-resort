import css from "./TextBlock.module.css";
import Subtitle from "../Title/Subtitle";

export default function TextBlock1() {
  return (
    <div className={css.contentContainer}>
      <div className={css.textContainer}>
        <div className={css.subtitleContainer}>
          <Subtitle>Fitness facilities</Subtitle>
        </div>
        <p className={css.text}>
          Whether you want an active holiday or you can’t miss a day in the gym,
          at Best Resort you can access the fitness room whenever you want.
          There are treadmills, exercise bikes and many types of
          multi-functional gym equipment, so you can train without having to
          leave the hotel.
        </p>
        <p className={css.time}>8:00–20:00</p>
      </div>

      <div className={css.textContainerLast}>
        <div className={css.subtitleContainer}>
          <Subtitle>Cycling along the Black sea coast</Subtitle>
        </div>
        <p className={css.text}>
          Like cycling? The Best Resort is the perfect starting point for your
          cycling routes through Crimea on your bicycle. And if you’ve brought
          your own bicycle, don’t worry – you can store bikes in the hotel
          garage.
        </p>
      </div>
    </div>
  );
}
