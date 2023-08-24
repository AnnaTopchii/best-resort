import { SiInstagram, SiFacebook, SiTelegram, SiGithub } from "react-icons/si";
import css from "./Socials.module.css";

export default function SocialsDark() {
  return (
    <ul className={css.socials_list}>
      <li>
        <a
          className={css.social_link_dark}
          href="https://www.facebook.com/topchii.anna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFacebook className={css.social_icon_dark} />
        </a>
      </li>
      <li>
        <a
          className={css.social_link_dark}
          href="https://www.instagram.com/annatoptour/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram className={css.social_icon_dark} />
        </a>
      </li>
      <li>
        <a
          className={css.social_link_dark}
          href="https://t.me/Anna_Topchii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram className={css.social_icon_dark} />
        </a>
      </li>
      <li>
        <a
          className={css.social_link_dark}
          href="https://github.com/AnnaTopchii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className={css.social_icon_dark} />
        </a>
      </li>
    </ul>
  );
}
