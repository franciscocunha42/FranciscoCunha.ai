import styles from "./CaseStudies.module.css";

type Case = {
  eyebrow: string;
  context: React.ReactNode;
  did: React.ReactNode;
  result: React.ReactNode;
};

const cases: Case[] = [
  {
    eyebrow: "EU hub setup · Luxury Fashion",
    context: (
      <>
        Market-leading luxury fashion brand standing up its main European
        logistics hub from scratch. Multi-channel: wholesale, retail, and
        e-commerce, all running through one site.
      </>
    ),
    did: (
      <>
        Scoped <em>WMS</em> requirements end-to-end for the new hub.
      </>
    ),
    result: (
      <span className="result">
        €5M+ in savings, €1M+ revenue uplift, on-time go-live.
      </span>
    ),
  },
  {
    eyebrow: "EU hub setup · Global Sportswear Brand",
    context: (
      <>
        Global sportswear brand launching a combined wholesale + e-commerce
        hub in Europe. Hard go-live deadline tied to the seasonal calendar,
        no room to slip.
      </>
    ),
    did: (
      <>
        Owned end-to-end <em>UAT</em> across <em>WMS</em>, <em>ERP</em>, and
        carrier integrations. Wrote the test plan, ran the cycles, triaged
        defects with vendors, and signed off readiness for cutover.
      </>
    ),
    result: (
      <span className="result">5M+ stock units, on-time go-live.</span>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="cases-title">
      <div className="container">
        <p className="eyebrow">IV · Case studies</p>
        <h2 id="cases-title" className={styles.heading}>
          Senior, hands-on,<br />
          <em>independent.</em>
        </h2>
        <div className={styles.grid}>
          {cases.map((c) => (
            <article key={c.eyebrow} className={styles.card}>
              <p className={styles.label}>{c.eyebrow}</p>
              <dl className={styles.dl}>
                <dt>Context</dt>
                <dd>{c.context}</dd>
                <dt>What I did</dt>
                <dd>{c.did}</dd>
                <dt>Result</dt>
                <dd className={styles.resultLine}>{c.result}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
