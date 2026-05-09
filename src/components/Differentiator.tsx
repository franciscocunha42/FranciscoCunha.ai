import styles from "./Differentiator.module.css";

export default function Differentiator() {
  return (
    <section className={`section--tight ${styles.strip}`} aria-label="Why me">
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">Why me — not a traditional consultancy</p>
        <p className={styles.line}>
          <em>Custom-built</em> for your specific problem<br />
          and the people who&rsquo;ll actually use it.
        </p>
        <p className={styles.sub}>
          Solo practice. Fixed scope before kickoff. <em>Working software</em>,
          not 80-page decks.
        </p>
      </div>
    </section>
  );
}
