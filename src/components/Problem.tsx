import styles from "./Problem.module.css";

const pains = [
  "Administrative errors and rework",
  "Inconsistencies across processes and systems",
  "Bugs and gaps in existing tools",
  "Expense and spend-management blind spots",
  "Warehouse and operations waste",
  "Inefficient manual work",
  "Poor system setup, no clear structure",
];

export default function Problem() {
  return (
    <section
      className={`section panel-navy ${styles.problem}`}
      aria-labelledby="problem-title"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-navy">II · The problem</p>
        <h2 id="problem-title" className={styles.headline}>
          Most operations problems aren&rsquo;t AI problems.<br />
          They&rsquo;re <em>software and process</em> problems hiding in plain sight.
        </h2>
        <ul className={styles.list} aria-label="Operational pain points">
          {pains.map((p) => (
            <li key={p} className={styles.item}>
              <span className={styles.tick} aria-hidden>
                —
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className={styles.closing}>
          I diagnose which of these is actually costing you money — and which
          is worth building software for. Sometimes <em>AI</em> is the right
          tool. Sometimes it isn&rsquo;t. I&rsquo;ll tell you plainly which.
        </p>
      </div>
    </section>
  );
}
