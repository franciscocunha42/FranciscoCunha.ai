import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow">VI · About</p>
        <h2 id="about-title" className={styles.heading}>
          The person who scopes the work<br />
          <em>is the person who builds it.</em>
        </h2>
        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              Industrial engineer. <em>8+ years</em> scaling warehousing and
              fulfilment operations across logistics, e-commerce, and B2B.
              I work across the whole flow — from inception to system maintenance —
              so the design choices and the engineering choices stay aligned.
            </p>
            <p>
              I take on a small number of engagements at a time. Each one gets
              senior attention from start to finish.
            </p>
            <p>
              Shipped operational software (<em>WMS</em> / <em>ERP</em> /
              integrations) at multiple <em>1M+ stock-unit</em> warehouses with{" "}
              <em>100+ users</em>. Typical engagements ship in 4–8 weeks from
              kickoff.
            </p>
          </div>
          <aside className={styles.aside}>
            <p className="eyebrow">Why me, not a traditional consultancy</p>
            <ul className={styles.list}>
              <li>
                <em>Solo practice.</em> No account managers, no offshore
                handover.
              </li>
              <li>
                <em>Fixed scope</em> before kickoff. Payback target in writing.
              </li>
              <li>
                <em>Working software</em> — not 80-page slide decks.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
