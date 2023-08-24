import { SiInstagram } from "react-icons/si";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
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
          <GrFacebookOption className={css.social_icon_dark} />
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
          <BiLogoTelegram className={css.social_icon_dark} />
        </a>
      </li>
      <li>
        <a
          className={css.social_link_dark}
          href="https://github.com/AnnaTopchii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandGithubFilled className={css.social_icon_dark} />
        </a>
      </li>
    </ul>
  );
}
