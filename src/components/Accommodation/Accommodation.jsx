import { NavLink } from "react-router-dom";

import css from "./Accommodation.module.css";
import rooms from "../../json/accommodation.json";
import Capacity from "../Capacity/Capacity";
import Price from "../Price/Price";
import ButtonRoomDetails from "../Buttons/ButtonRoomDetails";

export default function Accommodation() {
  return (
    <ul className={css.rooms_list}>
      {rooms.map((room) => (
        <li key={room.id} className={css.card}>
          <img className={css.image} src={room.imageURL} alt={room.type} />
          <div className={css.card_content}>
            <h2 className={css.room_type}>{room.type}</h2>

            <div className={css.capacity_container}>
              <Capacity capacity={room.capacity} size={room.size} />
            </div>

            <div className={css.price_container}>
              <Price price={room.price} />
            </div>

            <NavLink to={`/accommodation/${room.id}`} className={css.button}>
              <ButtonRoomDetails />
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
