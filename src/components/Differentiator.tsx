import styles from "./Differentiator.module.css";

export default function Differentiator() {
  return (
    <section className={`section--tight ${styles.strip}`} aria-label="Why me">
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Why me — not a traditional consultancy</p>
        <p className={styles.line}>
          <em>Solo practice.</em> Fixed scope before kickoff.
          <br />
          Working software, <em>not 80-page decks.</em>
        </p>
      </div>
    </section>
  );
}
