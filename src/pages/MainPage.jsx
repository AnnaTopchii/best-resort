import css from "../styles/MainPage.module.css";

import ButtonSimpleDark from "../components/Buttons/ButtonSimpleDark";
import ButtonSend from "../components/Buttons/ButtonSend";
import ButtonSimpleLight from "../components/Buttons/ButtonSimpleLight";
import ButtonRound from "../components/Buttons/ButtonRound";
import ButtonBookNow from "../components/Buttons/ButtonBookNow";
import ButtonToMain from "../components/Buttons/ButtonToMain";
import Title from "../components/Title/Title";
import Subtitle from "../components/Title/Subtitle";

export default function MainPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Main Page</h2>
      <ButtonSimpleDark>book now</ButtonSimpleDark>
      <ButtonSimpleDark>send booking</ButtonSimpleDark>
      <ButtonSimpleDark>see more room details</ButtonSimpleDark>
      <ButtonSend />
      <ButtonSimpleLight />
      <ButtonRound />
      <ButtonBookNow />
      <ButtonToMain />
      <Title>Accommodation</Title>
      <Subtitle>Restaurants</Subtitle>
    </div>
  );
}
