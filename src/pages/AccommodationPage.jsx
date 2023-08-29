import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import Accommodation from "../components/Accommodation/Accommodation";

export default function AccommodationPage() {
  return (
    <div className={css.container}>
      <Title>Accommodation</Title>
      <Accommodation />
    </div>
  );
}
