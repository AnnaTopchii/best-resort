import css from "./Welcome.module.css";

export default function Welcome() {
  return (
    <section className={css.background}>
      <div className={css.container}>
        <p className={css.text}>
          No matter what brings you to Ukraine, we look forward to welcoming you
          to our
        </p>
        <span className={css.logo}>Best Resort</span>
      </div>
    </section>
  );
}
