import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import css from "./Carousel.module.css";

export default function Carousel({ gallery }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const carousel = new Flickity(carouselElement, {
      imagesLoaded: true,
      percentPosition: false,
    });

    const images = carouselElement.querySelectorAll(
      `.${css.carousel_cell} img`
    );

    const transformProp =
      typeof document.documentElement.style.transform === "string"
        ? "transform"
        : "WebkitTransform";

    carousel.on("scroll", function () {
      carousel.slides.forEach(function (slide, i) {
        const img = images[i];
        const x = ((carousel.x + slide.target) * -1) / 3;
        img.style[transformProp] = `translateX(${x}px)`;
      });
    });

    return () => {
      carousel.destroy();
    };
  }, [gallery]);

  return (
    <div className={css.carousel} ref={carouselRef}>
      {gallery.map((image, idx) => (
        <div className={css.carousel_cell} key={idx}>
          <img src={image} alt={`room ${idx}`} />
        </div>
      ))}
    </div>
  );
}
