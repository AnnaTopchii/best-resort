import css from "./Footer.module.css";
import SocialsLight from "../Socials/SocialsLight";

export default function Footer() {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <address>
          <ul className={css.address_list}>
            <li className={css.address_link}>
              <a
                href="https://goo.gl/maps/PCYvSsK3e4K37gkaA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ukraine, Crimea
              </a>
            </li>
            <li className={css.address_link}>
              <a href="tel:+380637768467">+38 063 776 84 67</a>
            </li>
          </ul>
          <p className={css.text}>&copy; Best resort | all rights reserved</p>
        </address>
        <SocialsLight />
      </div>
    </div>
  );
}
