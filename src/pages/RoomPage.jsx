import React from "react";
import { useParams, NavLink } from "react-router-dom";

import css from "../styles/RoomPage.module.css";
import rooms from "../json/accommodation.json";
import Room from "../components/Room/Room";
import Carousel from "../components/Room/Carousel";
import PhotoGallery from "../components/Room/PhotoGallery";
import { IoChevronBackSharp } from "react-icons/io5";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = rooms.find((room) => room.id === roomId);

  return (
    <div className={css.container}>
      <div className={css.title_container}>
        <NavLink to="/accommodation" className={css.navlink}>
          <IoChevronBackSharp
            className={css.icon}
            aria-label="back to accommodation page"
          />
        </NavLink>
        <h1 className={css.title}>{room.type}</h1>
      </div>
      <Carousel gallery={room.gallery} />
      <PhotoGallery gallery={room.gallery} />
      <Room room={room} />
    </div>
  );
}
