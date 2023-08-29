import css from "./PhotoGallery.module.css";

export default function PhotoGallery({ gallery }) {
  return (
    <div className={css.gallery}>
      {gallery.map((image, idx) => (
        <img src={image} alt={`room ${idx}`} className={css.img} key={idx} />
      ))}
    </div>
  );
}
