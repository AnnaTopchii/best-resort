import css from "./Memories.module.css";

import relax from "../../images/relax.jpg";
import hotelTab from "../../images/building-tab.jpg";
import hotelNoteDesk from "../../images/building-note-desk.jpg";

export default function Memories() {
  const screenWidth = window.innerWidth;

  let hotel;

  if (screenWidth < 1440) {
    hotel = hotelTab;
  } else {
    hotel = hotelNoteDesk;
  }

  return (
    <section className={css.memories}>
      <div>
        <h1 className={css.subtitle}>
          Create lasting memories at our Best Resort
        </h1>
        <p className={css.text}>
          Discover genuine luxury at Ukrainian most unique 5-star hotel.
          Complete with exceptional amenities and world-class service, our
          family-friendly resort is the only one of its kind in the whole world.
        </p>
        <div className={css.text_box}>
          <p>
            Bordered by an incredible pine forest on one side and the Black Sea
            on the other, our extraordinary resort creates a fantasy world of
            pampering and relaxation.
          </p>
        </div>
        <img
          className={css.img_relax}
          src={relax}
          alt={"the women have rest in a hammock"}
        />
      </div>

      <img
        className={css.img_hotel}
        src={hotel}
        alt={"main building og the hotel"}
      />
    </section>
  );
}
