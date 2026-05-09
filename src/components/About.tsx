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
            <p className="eyebrow">Background</p>
            <p>
              Industrial engineer. <em>8+ years</em> scaling warehousing and
              fulfilment operations across logistics, e-commerce, and B2B.
              I work across the whole flow — from inception to system
              maintenance — so the design choices and the engineering choices
              stay aligned.
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
          <div className={styles.col}>
            <p className="eyebrow">How I work with teams</p>
            <ul className={styles.list}>
              <li>
                Walk the floor with operators before specifying anything.
                Their workflow is the source of truth.
              </li>
              <li>
                Translate real work into requirements without the
                consulting-deck abstraction layer.
              </li>
              <li>
                Train users <em>as we build</em> — not in a workshop the
                week before launch.
              </li>
              <li>
                Stay engaged through cutover and hyper-care so issues get
                resolved without escalation drama.
              </li>
              <li>
                Write the runbooks the team will actually use after I&rsquo;m
                gone.
              </li>
            </ul>
          </div>
          <aside className={styles.col}>
            <p className="eyebrow">Why me — not a traditional consultancy</p>
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
              <li>
                Tech, ops, and people skills in one person. The same person
                who specs the system trains the users on it.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
