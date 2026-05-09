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
          <a
            className="cta cta--primary"
            href="mailto:francisco@franciscocunha.ai?subject=Diagnostic%20enquiry"
          >
            Book the free diagnostic <span aria-hidden>→</span>
          </a>
          <span className={styles.ctaNote}>
            Stages I &amp; II are <em>free</em> and commit you to nothing.
          </span>
        </div>
      </div>
    </section>
  );
}
