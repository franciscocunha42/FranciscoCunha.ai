import styles from "./CaseStudies.module.css";

type Case = {
  eyebrow: string;
  context: React.ReactNode;
  did: React.ReactNode;
  result: React.ReactNode;
};

type Brief = {
  eyebrow: string;
  body: React.ReactNode;
  result: string;
};

const stats = [
  { value: "8+", label: "years in logistics, e-commerce & Lean" },
  { value: "€6M+", label: "annualised savings delivered" },
  { value: "5M+", label: "stock units taken live on time" },
  { value: "−90%", label: "customer complaints on one portfolio" },
];

const cases: Case[] = [
  {
    eyebrow: "EU hub setup · Luxury Fashion",
    context: (
      <>
        Market-leading luxury fashion platform standing up its main worldwide
        logistics hub in the Netherlands. <em>€500M+</em>{" "}in yearly revenue
        and <em>1M+</em>{" "}stock units running through one site.
      </>
    ),
    did: (
      <>
        Scoped <em>WMS</em>{" "}requirements end-to-end for the new hub, defined
        business processes for the whole warehouse, and developed solutions to
        tackle specific use cases.
      </>
    ),
    result: (
      <span className="result">
        €5M+ in annual savings, €1M+ revenue uplift, on-time go-live.
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
        Owned end-to-end <em>UAT</em>{" "}across <em>WMS</em>, <em>ERP</em>, and
        carrier integrations. Wrote the test plan, ran the cycles, triaged
        defects with vendors, and signed off readiness for cutover.
      </>
    ),
    result: (
      <span className="result">5M+ stock units, on-time go-live.</span>
    ),
  },
];

const briefs: Brief[] = [
  {
    eyebrow: "Portfolio turnaround · Global Sportswear Brand",
    body: (
      <>
        Owned delivery and service performance across the European portfolio.
        Scoped, shipped, and monitored changes to warehouse systems and
        operational processes.
      </>
    ),
    result: "Cost per unit −20% · productivity +99% · complaints −90%",
  },
  {
    eyebrow: "Operational excellence · Luxury Fashion",
    body: (
      <>
        Workshop-based programme on the main cost drivers of the logistics
        hub — inbound, outbound, and returns — with the teams who run them.
      </>
    ),
    result: "€1M+ annualised savings",
  },
  {
    eyebrow: "EU expansion · Sneaker Marketplace",
    body: (
      <>
        Global programme management across tech, ops, finance, and HR, taking
        a US-only business unit live in Europe.
      </>
    ),
    result: "On-time, in-scope EU go-live",
  },
  {
    eyebrow: "Partner performance · Luxury E-commerce",
    body: (
      <>
        Raised service levels of boutiques and brands across Europe and the
        Middle East; cut cancellations and wrong-item shipments.
      </>
    ),
    result: "€500k+ annualised savings",
  },
  {
    eyebrow: "Digitalisation · Public Water Utility",
    body: (
      <>
        Moved the licensing process from paper hand-in to digital submission,
        and streamlined the steps behind it.
      </>
    ),
    result: "Lead time −61% · productivity +60% · Kaizen Award",
  },
  {
    eyebrow: "Lean production · Machinery Manufacturer",
    body: (
      <>
        Redesigned the layout of key production areas and optimised the
        planning of welding robots.
      </>
    ),
    result: "Productivity +145% · €200k+ annualised savings",
  },
];

export default function CaseStudies() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="cases-title">
      <div className="container">
        <p className="eyebrow">IV · Case studies</p>
        <h2 id="cases-title" className={styles.heading}>
          Recent work,<br />
          <em>real results.</em>
        </h2>
        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
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
        <p className={`eyebrow ${styles.moreLabel}`}>More from the portfolio</p>
        <ul className={styles.briefs}>
          {briefs.map((b) => (
            <li key={b.eyebrow} className={styles.brief}>
              <p className={styles.label}>{b.eyebrow}</p>
              <p className={styles.briefBody}>{b.body}</p>
              <p className={styles.briefResult}>{b.result}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
