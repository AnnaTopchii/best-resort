import { NavLink } from "react-router-dom";
import css from "./Offer.module.css";

import Title from "../Title/Title";
import accommodation from "../../images/accommodation.jpg";
import rest from "../../images/shef.jpg";
import services from "../../images/sport.jpg";
import wedding from "../../images/wedding.jpg";

export default function Offer() {
  return (
    <section>
      <div className={css.title_container}>
        <Title>What can we offer</Title>
      </div>
      <ul className={css.list}>
        <li className={css.list_item}>
          <div className={css.card}>
            <img className={css.img} src={accommodation} alt={"hotel room"} />
            <h2 className={css.title}>Accommodation</h2>
            <p className={css.text}>
              Our luxury resort rooms offer views of the sea, forest or
              mountains from private balconies or patios
            </p>
          </div>
          <NavLink to="/accommodation" className={css.link}>
            See more
          </NavLink>
        </li>

        <li className={css.list_item}>
          <div className={css.card}>
            <img className={css.img} src={rest} alt={"cook serving the dish"} />
            <h2 className={css.title}>Restaurants</h2>
            <p className={css.text}>
              A culinary experience meant to be shared on sunny days and starry
              nights
            </p>
          </div>
          <NavLink to="/food" className={css.link}>
            See more
          </NavLink>
        </li>

        <li className={css.list_item}>
          <div className={css.card}>
            <img className={css.img} src={services} alt={"gym"} />
            <h2 className={css.title}>Services</h2>
            <p className={css.text}>
              Enjoy our hotel's fitness center and spa for relaxation and
              wellness during your stay
            </p>
          </div>
          <NavLink to="/services" className={css.link}>
            See more
          </NavLink>
        </li>

        <li className={css.list_item}>
          <div className={css.card}>
            <img
              className={css.img}
              src={wedding}
              alt={"couple dancing on their wedding"}
            />
            <h2 className={css.title}>Weddings</h2>
            <p className={css.text}>
              OIf you are looking for a hotel to celebrate your dream wedding
              day, we can help you here at Best Resort
            </p>
          </div>
          <NavLink to="/weddings" className={css.link}>
            See more
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
