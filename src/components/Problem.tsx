import styles from "./Problem.module.css";

export default function Problem() {
  return (
    <section
      className={`section panel-navy ${styles.problem}`}
      aria-labelledby="problem-title"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-navy">II · The problem</p>
        <h2 id="problem-title" className={styles.headline}>
          Most operational teams don&rsquo;t need more AI.<br />
          They need <em>software</em> that serves their real needs.
        </h2>
        <div className={styles.grid}>
          <p className={styles.body}>
            Gartner expects at least <strong>30% of generative AI projects</strong> to be
            abandoned after proof of concept by the end of 2025 — most often because of
            poor data quality, weak risk controls, or unclear business value.
          </p>
          <p className={styles.body}>
            Not being in that 30% is a <em>software-engineering</em> problem,
            not an AI one. That&rsquo;s the problem I take on.
          </p>
        </div>
        <p className={styles.source}>
          Source · Gartner press release, 29 July 2024
        </p>
      </div>
    </section>
  );
}
