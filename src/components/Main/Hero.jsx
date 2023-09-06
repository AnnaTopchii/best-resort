import React, { useState, useEffect } from "react";

import css from "./Hero.module.css";
import mainMob from "../../images/main-mob.jpg";
import mainTabNote from "../../images/main-tab-note.jpg";
import mainDesk from "../../images/main-desk.jpg";
import seaViewMob from "../../images/sea-view-mob.jpg";
import seaViewTab from "../../images/sea-view-tab.jpg";
import seaViewNoteDesk from "../../images/sea-view-note-desk.jpg";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setAnimate(true);
        window.removeEventListener("scroll", handleScroll); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let image1Src;
  let image2Src;

  if (screenWidth < 1440) {
    image1Src = mainMob;
  } else if (screenWidth < 1920) {
    image1Src = mainTabNote;
  } else {
    image1Src = mainDesk;
  }

  if (screenWidth < 768) {
    image2Src = seaViewMob;
  } else if (screenWidth < 1440) {
    image2Src = seaViewTab;
  } else {
    image2Src = seaViewNoteDesk;
  }

  return (
    <>
      {/* Full-screen image */}
      <div
        className={`${css.overlay} ${animate ? css.hide : ""}`}
        style={{
          opacity: animate ? 0 : 1,
          transform: animate ? "scale(0.99)" : "scale(1)",
        }}
      >
        <h1 className={css.logo}>Best resort</h1>
        <div className={css.scroll}>
          <IoChevronDownSharp className={css.icon} />
          <span>
            scroll down <br /> to start the experience
          </span>
        </div>
      </div>

      {/* Content that appears after scrolling */}
      <section className={css.hero_block}>
        <div className={css.hero_top}>
          <div className={css.text_block_top}>
            <span className={css.text_best}>Best</span>
            <span className={css.text_place}>place You have</span>
          </div>
          <img
            className={css.img_hero_top}
            src={image1Src}
            alt={"sun beds near the pool"}
          />
        </div>

        <div className={css.hero_bottom}>
          <img
            className={css.img_hero_bottom}
            src={image2Src}
            alt={"vip lounge with sun beds with sea view"}
          />
          <span className={css.text_ever}>ever</span>
        </div>

        <span className={css.text_been_before}>Been before</span>
      </section>
    </>
  );
}
