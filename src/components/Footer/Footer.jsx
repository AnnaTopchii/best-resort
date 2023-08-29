import css from "./Footer.module.css";
import SocialsLight from "../Socials/SocialsLight";

export default function Footer() {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <address>
          <ul className={css.address_list}>
            <li>
              <a
                className={css.address}
                href="https://goo.gl/maps/PCYvSsK3e4K37gkaA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ukraine, Crimea
              </a>
            </li>
            <li>
              <a className={css.address} href="tel:+380637768467">
                +38 063 776 84 67
              </a>
            </li>
          </ul>
          <p className={css.text}>&copy; Best resort | all rights reserved</p>
        </address>
        <SocialsLight />
      </div>
    </div>
  );
}
