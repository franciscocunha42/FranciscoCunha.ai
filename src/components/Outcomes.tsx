import styles from "./Outcomes.module.css";

const outcomes = [
  {
    n: "№ 01",
    label: "Growth",
    title: "More customers, more revenue.",
    body: (
      <>
        A clear online presence and a sales process that doesn&rsquo;t depend
        on luck — so growth becomes <em>repeatable</em>.
      </>
    ),
  },
  {
    n: "№ 02",
    label: "Time",
    title: "Less admin work.",
    body: (
      <>
        Repetitive work removed or automated, so your people spend their day
        on <em>judgement</em>, not data entry.
      </>
    ),
  },
  {
    n: "№ 03",
    label: "Quality",
    title: "Fewer errors, better consistency.",
    body: (
      <>
        Clear processes and the right tools mean fewer mistakes, fewer
        complaints, and more uniform decisions across the team.
      </>
    ),
  },
  {
    n: "№ 04",
    label: "Return",
    title: "ROI you can defend.",
    body: (
      <>
        Every engagement is scoped around payback — agreed in writing before
        I start. Past operations work:{" "}
        <em>€500k–€5M annualised savings</em>, depending on scope.
      </>
    ),
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
          In plain language — whatever the size of your business.
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
