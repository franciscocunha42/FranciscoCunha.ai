import styles from "./Framework.module.css";

type Stage = {
  numeral: string;
  name: string;
  suffix: string;
  body: React.ReactNode;
  meta: string[];
  cta?: boolean;
};

const stages: Stage[] = [
  {
    numeral: "I",
    name: "Diagnostics",
    suffix: "— on site or remote",
    body: (
      <>
        A few days walking your processes with the people who run them, plus
        a written read of where AI helps — where it doesn&rsquo;t — and
        what&rsquo;s worth building next.
      </>
    ),
    cta: true,
    meta: ["Free", "~1–2 weeks"],
  },
  {
    numeral: "II",
    name: "Proposal",
    suffix: "",
    body: (
      <>
        A scoped plan: what I&rsquo;d build, how, by when, at what cost — and
        the payback target it&rsquo;s measured against. You decide whether to
        continue. No pressure.
      </>
    ),
    meta: ["Free", "~1–2 weeks"],
  },
  {
    numeral: "III",
    name: "Implementation",
    suffix: "",
    body: (
      <>
        The solution is designed, built, and integrated. Your team is trained
        on it as I go — not in a workshop afterwards. They own how it works
        before launch day. Typical engagements ship in <em>4–8 weeks</em> from
        kickoff.
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
        <p className="eyebrow">III · Framework</p>
        <h2 id="framework-title" className={styles.heading}>
          Five stages,<br />
          <em>one engagement.</em>
        </h2>
        <div className={styles.banner}>
          <span className={styles.bannerLabel}>Free · non-binding</span>
          <span className={styles.bannerBody}>
            Stages <em>I</em> &amp; <em>II</em> — <em>Diagnostics</em> and{" "}
            <em>Proposal</em> — are free and commit you to nothing. The work
            begins at Stage <em>III</em>, on a written, fixed-scope agreement.
          </span>
        </div>
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
                {s.cta && (
                  <a className={`cta cta--primary ${styles.stageCta}`} href="#contact">
                    Book the free diagnostic <span aria-hidden>→</span>
                  </a>
                )}
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
      </div>
    </section>
  );
}
