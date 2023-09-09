import css from "./Weddings.module.css";

import table from "../../images/wedding-table.jpg";
import couple from "../../images/wedding-couple.jpg";

export default function Weddings() {
  return (
    <section className={css.wedding}>
      <h1 className={css.subtitle}>
        Celebrate your beach wedding at the best destination at Best Resort{" "}
      </h1>
      <p className={css.main_text}>
        Always dreamed of having a beach wedding? Make this dream come true with
        Best Resort and start planning the most romantic experience of your life
        by getting in touch with one of our experienced wedding specialists.
        They will be happy to advise you on everything that revolves around
        love: from pre-hotel visits to marriage proposals, honeymoons and
        All-Inclusive destination wedding.
      </p>

      <div className={css.content_block}>
        <div className={css.left_block}>
          <p className={css.text}>
            Any special requests? Contact our experts through the following form
            to organize every detail of your destination wedding: decoration,
            bouquet of flowers and boutonniere, choice of food, photo shoot,
            reception, music?
          </p>
          <p className={css.text}>
            Do you have something unique in mind? You can also customize your
            proposal down to the last detail with various a la carte options!
          </p>
          <div className={css.text_box}>
            <p>
              Organize your beach wedding with Best Resort is to choose the
              tranquility of having paradise at your fingertips.
            </p>
          </div>
          <img className={css.img_table} src={table} alt={"wedding table"} />
        </div>

        <img
          className={css.img_couple}
          src={couple}
          alt={"couple on their wedding"}
        />
      </div>

      <div className={css.text_container}>
        <span className={css.main_text_block}>Wedding</span>
        <span className={css.sec_text_block}>AS IMAGINED BY YOU</span>
      </div>
    </section>
  );
}
