import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow">I · Scope</p>
        <h1 id="hero-title" className={styles.title}>
          Operations, optimized<br />
          <em>with AI.</em>
        </h1>
        <p className={styles.lede}>
          Operations consulting that ships working software when AI helps —
          and tells you <em>plainly</em> when it won&rsquo;t.
        </p>
        <div className={styles.meta}>
          <span>Utrecht, NL</span>
          <span className={styles.sep}>·</span>
          <span>On-site</span>
          <span className={styles.sep}>·</span>
          <span>Hybrid</span>
          <span className={styles.sep}>·</span>
          <span>Remote</span>
        </div>
        <div className={styles.ctaRow}>
          <a className="cta cta--primary" href="#contact">
            Book the free diagnostic <span aria-hidden>→</span>
          </a>
          <span className={styles.chip}>Free · non-binding</span>
        </div>
        <p className={styles.ctaNote}>
          Stages <em>I</em> &amp; <em>II</em> — <em>Diagnostics</em> and{" "}
          <em>Proposal</em> — are free and commit you to nothing. The work
          begins at Stage <em>III</em>, on a written, fixed-scope agreement.
        </p>
      </div>
    </section>
  );
}
