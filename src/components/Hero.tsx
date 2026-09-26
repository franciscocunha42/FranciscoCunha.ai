import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-title">
      <div className="container">
        <h1 id="hero-title" className={styles.title}>
          Grow your business.{" "}
          <em>Run it better.</em>
        </h1>
        <div className={styles.below}>
          <p className={styles.lede}>
            Campos Cunha Consulting is the independent practice of Francisco
            Cunha. I help small and medium businesses get online, sell more,
            and scale — and help logistics and e-commerce teams run leaner,
            from warehouse floor to system go-live.
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
            Stages <em>I</em>{" "}&amp; <em>II</em>{" "}— <em>Diagnostics</em>{" "}and{" "}
            <em>Proposal</em>{" "}— are free and commit you to nothing. The work
            begins at Stage <em>III</em>, on a written, fixed-scope agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
