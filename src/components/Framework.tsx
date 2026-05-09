import styles from "./Framework.module.css";

const stages = [
  {
    numeral: "I",
    name: "Diagnostics",
    suffix: "— on site",
    body: (
      <>
        A day or two walking your processes with the people who run them.
        I leave with a written read of where AI helps — and where it doesn&rsquo;t —
        and what&rsquo;s worth building next.
      </>
    ),
    meta: ["Free", "~1–2 days"],
  },
  {
    numeral: "II",
    name: "Proposal",
    suffix: "",
    body: (
      <>
        A scoped plan: what we&rsquo;d build, how, by when, at what cost — and
        the payback target it&rsquo;s measured against. You decide whether to
        continue. No pressure.
      </>
    ),
    meta: ["Free", "~1 week"],
  },
  {
    numeral: "III",
    name: "Implementation",
    suffix: "",
    body: (
      <>
        Software is designed, built, and integrated. Your team is trained on it
        as we go — not in a workshop afterwards. They own how it works before
        launch day. Typical engagements ship in <em>4–8 weeks</em> from kickoff.
      </>
    ),
    meta: ["Fixed scope", "weeks–months"],
  },
  {
    numeral: "IV",
    name: "Sustainability",
    suffix: "",
    body: (
      <>
        Handover with runbooks, monitoring, and lightweight governance — so the
        system keeps working predictably without me, and your team knows what to
        do when something drifts.
      </>
    ),
    meta: ["Included", "~1 month"],
  },
  {
    numeral: "V",
    name: "After-care & maintenance",
    suffix: "",
    body: (
      <>
        Optional ongoing support: model updates, small improvements, and a
        senior pair of eyes as your needs and the AI landscape evolve.
      </>
    ),
    meta: ["Optional", "Monthly retainer"],
  },
];

export default function Framework() {
  return (
    <section
      className={`section panel-cream-soft ${styles.section}`}
      aria-labelledby="framework-title"
    >
      <div className="container">
        <p className="eyebrow">IV · Framework</p>
        <h2 id="framework-title" className={styles.heading}>
          Five stages,<br />
          <em>one engagement.</em>
        </h2>
        <ol className={styles.list}>
          {stages.map((s) => (
            <li key={s.numeral} className={styles.row}>
              <span className={`numeral ${styles.numeral}`} aria-hidden>
                {s.numeral}
              </span>
              <div className={styles.body}>
                <h3 className={styles.name}>
                  <em>{s.name}</em>
                  {s.suffix && <span className={styles.suffix}> {s.suffix}</span>}
                </h3>
                <p className={styles.desc}>{s.body}</p>
              </div>
              <div className={styles.meta}>
                {s.meta.map((m, i) => (
                  <span key={i} className={styles.metaLine}>
                    {m}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.footnote}>
          Stages <em>I</em> &amp; <em>II</em> commit you to nothing. The work
          begins at Stage <em>III</em>, on a written, fixed-scope agreement.
        </p>
      </div>
    </section>
  );
}
