import styles from "./Outcomes.module.css";

const outcomes = [
  {
    n: "№ 01",
    label: "Time",
    title: "Less admin work.",
    body: (
      <>
        Teams spend hours each week processing data the same way. Automate the
        repetitive parts so people spend their day on <em>judgement</em>, not
        data entry.
      </>
    ),
  },
  {
    n: "№ 02",
    label: "Quality",
    title: "Fewer errors, better consistency.",
    body: (
      <>
        Software-assisted checks catch what tired humans miss. Decisions become
        more uniform across the team, even on the busy days.
      </>
    ),
  },
  {
    n: "№ 03",
    label: "Predictability",
    title: "Clear and predictable systems.",
    body: (
      <>
        Defined handoffs, runbooks for the edge cases, monitoring on the parts
        that matter. Less firefighting, fewer surprises.
      </>
    ),
  },
  {
    n: "№ 04",
    label: "Return",
    title: "Practical ROI · measurable improvement.",
    body: (
      <>
        Every engagement is scoped against a clear, measurable improvement —
        agreed before we start, checked after we ship. Past engagements:{" "}
        <em>500k€–5M€ annualised</em>, depending on scope.
      </>
    ),
  },
];

export default function Outcomes() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="outcomes-title">
      <div className="container">
        <p className="eyebrow">III · Outcomes</p>
        <h2 id="outcomes-title" className={styles.heading}>
          Four outcomes <em>I optimize for.</em>
        </h2>
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
