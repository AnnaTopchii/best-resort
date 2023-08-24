import ButtonToMain from "../components/Buttons/ButtonToMain";
import NotFound from "../components/NotFound/NotFound";

import css from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={css.container}>
      <NotFound />
      <ButtonToMain />
    </div>
  );
}
