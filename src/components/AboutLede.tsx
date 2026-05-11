import styles from "./AboutLede.module.css";

export default function AboutLede() {
  return (
    <section className={`section--tight ${styles.section}`} aria-labelledby="lede-title">
      <div className={`container ${styles.body}`}>
        <p className="eyebrow">Who&rsquo;s behind this</p>
        <h2 id="lede-title" className={styles.headline}>
          <em>Francisco Cunha.</em>
          <br />
          Industrial engineer, running a solo practice.
        </h2>
        <p className={styles.lede}>
          <em>8+ years</em> scaling warehousing and fulfilment operations
          across logistics, e-commerce, and B2B. The person who scopes the
          work is the person who builds it — and the person who trains your
          team on it.
        </p>
        <p className={styles.lede}>
          Every solution is <em>custom-built</em> around your specific
          problem and the people who&rsquo;ll actually use it.
        </p>
      </div>
    </section>
  );
}
