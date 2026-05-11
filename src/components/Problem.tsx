import styles from "./Problem.module.css";

const pains = [
  "Operations teams drowning in repetitive admin and document work.",
  "Inflexible tooling that doesn't quite fit how the team works.",
  "Internal knowledge that's locked inside PDFs, inboxes and people's heads.",
];

export default function Problem() {
  return (
    <section
      className={`section panel-navy ${styles.problem}`}
      aria-labelledby="problem-title"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-navy">I · Context</p>
        <h2 id="problem-title" className={styles.headline}>
          Less hype.<br />
          More <em>working solutions.</em>
        </h2>
        <p className={styles.lead}>
          Manual operations bleed margin every shift — repetitive admin,
          knowledge locked in PDFs and inboxes, decisions made on stale data.
          Teams that automate the boring parts are pulling ahead on cost,
          speed, and consistency.
        </p>
        <div className={styles.stats}>
          <blockquote className={styles.stat}>
            <p>
              Yet per McKinsey&rsquo;s <em>State of AI</em> survey, fewer than{" "}
              <em>1 in 10</em> organisations use AI regularly in supply-chain
              or logistics — versus roughly <em>1 in 3</em> in marketing or IT.
            </p>
            <cite className={styles.source}>
              Source · McKinsey, &ldquo;The State of AI&rdquo;
            </cite>
          </blockquote>
          <blockquote className={styles.stat}>
            <p>
              <em>70%</em> of AI value comes from <em>people, process &amp;
              adoption</em> — only 10% from algorithms, 20% from data &amp;
              tech.
            </p>
            <cite className={styles.source}>
              Source · BCG, &ldquo;Where&rsquo;s the Value in AI?&rdquo; — the
              10–20–70 rule
            </cite>
          </blockquote>
        </div>
        <p className={`eyebrow eyebrow--on-navy ${styles.usefulLabel}`}>
          Where I&rsquo;m useful
        </p>
        <ul className={styles.list} aria-label="Where I'm useful">
          {pains.map((p) => (
            <li key={p} className={styles.item}>
              <span className={styles.tick} aria-hidden>
                —
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
