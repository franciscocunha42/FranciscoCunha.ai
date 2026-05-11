import styles from "./Outcomes.module.css";

const outcomes = [
  {
    n: "№ 01",
    label: "Return",
    title: "ROI you can defend.",
    body: (
      <>
        Every engagement is scoped considering payback to the customer —
        agreed in writing before I start. Past engagements:{" "}
        <em>500k€–5M€ annualised savings</em>, depending on scope.
      </>
    ),
  },
  {
    n: "№ 02",
    label: "Time",
    title: "Less admin work.",
    body: (
      <>
        Teams spend multiple hours per week processing data in a repetitive
        way. Automation of the repetitive parts of operations — so people
        spend their day on <em>judgement</em>, not data entry.
      </>
    ),
  },
  {
    n: "№ 03",
    label: "Quality",
    title: "Fewer errors, better consistency.",
    body: (
      <>
        AI-assisted checks catch what tired humans miss. Decisions become more
        uniform across the team.
      </>
    ),
  },
  {
    n: "№ 04",
    label: "Calm",
    title: "Less stress on your people.",
    body: <>Predictable systems, clear handoffs, less firefighting.</>,
  },
];

export default function Outcomes() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="outcomes-title">
      <div className="container">
        <p className="eyebrow">II · Outcomes</p>
        <h2 id="outcomes-title" className={styles.heading}>
          Four outcomes <em>I optimise for.</em>
        </h2>
        <p className={styles.sub}>
          In plain language — before any technology is chosen.
        </p>
        <div className={styles.grid}>
          {outcomes.map((o) => (
            <article key={o.n} className={styles.card}>
              <header className={styles.cardHead}>
                <span className={styles.n}>{o.n}</span>
                <span className={styles.dash}>—</span>
                <span className={styles.label}>{o.label}</span>
              </header>
              <h3 className={styles.title}>{o.title}</h3>
              <p className={styles.body}>{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
