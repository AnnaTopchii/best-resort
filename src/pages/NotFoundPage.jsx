import ButtonToMain from "../components/Buttons/ButtonToMain";
import NotFound from "../components/NotFound/NotFound";

import css from "../styles/general.module.css";

export default function PageNotFound() {
  return (
    <div className={css.notFoundContainer}>
      <NotFound />
      <ButtonToMain />
    </div>
  );
}
