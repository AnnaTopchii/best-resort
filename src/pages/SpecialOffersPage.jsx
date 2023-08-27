import css from "../styles/general.module.css";
import Title from "../components/Title/Title";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";

export default function SpecialOffersPage() {
  return (
    <div className={css.container}>
      <Title>Special Offers Page</Title>
      <SpecialOffers />
    </div>
  );
}
