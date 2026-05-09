import styles from "./CaseStudies.module.css";

const cases = [
  {
    eyebrow: "EU hub setup · Luxury Fashion",
    body: (
      <>
        Scoped <em>WMS</em> requirements for the main European logistics hub of
        a luxury fashion market leader.{" "}
        <span className="result">
          5M€+ in savings, 1M€+ revenue uplift, on-time go-live.
        </span>
      </>
    ),
  },
  {
    eyebrow: "EU hub setup · Global Sportswear Brand",
    body: (
      <>
        Led end-to-end <em>UAT</em> and go-live of a wholesale + e-commerce hub.{" "}
        <span className="result">5M+ stock units live on schedule.</span>
      </>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="cases-title">
      <div className="container">
        <p className="eyebrow">V · Case studies</p>
        <h2 id="cases-title" className={styles.heading}>
          Senior, hands-on,<br />
          <em>independent.</em>
        </h2>
        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.eyebrow} className={styles.card}>
              <p className={styles.label}>{c.eyebrow}</p>
              <p className={styles.body}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
