import css from "./Footer.module.css";
import { SiInstagram, SiFacebook, SiTelegram, SiGithub } from "react-icons/si";

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
        </address>
        <ul className={css.socials_list}>
          <li>
            <a
              className={css.social_link}
              href="https://www.facebook.com/topchii.anna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className={css.social_icon} />
            </a>
          </li>
          <li>
            <a
              className={css.social_link}
              href="https://www.instagram.com/annatoptour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className={css.social_icon} />
            </a>
          </li>
          <li>
            <a
              className={css.social_link}
              href="https://t.me/Anna_Topchii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTelegram className={css.social_icon} />
            </a>
          </li>
          <li>
            <a
              className={css.social_link}
              href="https://github.com/AnnaTopchii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className={css.social_icon} />
            </a>
          </li>
        </ul>
      </div>
      <p className={css.text}>© Best resort 2023 | all rights reserved</p>
    </div>
  );
}
