import css from "./Services.module.css";
import TextBlock1 from "./TextBlock1";
import ImgBlock1 from "./ImgBlock1";
import TextBlock2 from "./TextBlock2";
import ImgBlock2 from "./ImgBlock2";

export default function Food() {
  return (
    <div className={css.container}>
      <div className={css.section}>
        <TextBlock1 />
        <ImgBlock1 />
      </div>
      <div className={css.section}>
        <TextBlock2 />
        <ImgBlock2 />
      </div>
    </div>
  );
}
