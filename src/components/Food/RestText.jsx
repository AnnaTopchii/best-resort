import css from "./Food.module.css";
import Subtitle from "../Title/Subtitle";

export default function RestText() {
  return (
    <div className={css.content_container}>
      <div className={css.rest_text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Playa Restaurant</Subtitle>
        </div>
        <p className={css.text}>
          Don’t leave Crimea without trying its traditional dishes! This
          restaurant offers a selection of the land’s most succulent dishes. Or
          would you rather try the best Ukrainian and international cuisine? In
          that case, try the seafood special, the selection of grilled meat and
          fish or the crispy pizzas from the Italian corner. It’s all delicious!
        </p>
        <p className={css.time}>
          Breakfast: 7:30–10:30 <br /> Dinner: 18:00–21:00
        </p>
      </div>

      <div className={css.rest_text_container}>
        <div className={css.subtitle_container}>
          <Subtitle>Prestige Restaurant</Subtitle>
        </div>
        <p className={css.text}>
          This restaurant chef available to prepare delicious starters and
          salads, meat and fish dishes for you, as well as exquisite cakes and
          fruit sorbets. There’s Ukrainian cuisine too! In addition, in the
          morning for breakfast you can enjoy juices, eggs prepared to your
          taste and all kinds of toasts. All this with views of the Black sea in
          the background.
        </p>
        <p className={css.time}>
          Breakfast: 7:30–10:30 <br /> Dinner: 18:30–21:30
        </p>
      </div>
    </div>
  );
}
