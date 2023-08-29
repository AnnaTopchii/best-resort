import css from "./Price.module.css";

export default function Price({ price }) {
  return (
    <div className={css.price_container}>
      <div>
        <p className={css.price_from}>Price from</p>
        <p className={css.rate_rules}>room/night - taxes included</p>
      </div>
      <div className={css.price}>
        <span>{price}&euro;</span>
      </div>
    </div>
  );
}
