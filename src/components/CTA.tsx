import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section
      className={`section panel-navy ${styles.section}`}
      aria-labelledby="cta-title"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-navy">→ Next step</p>
        <h2 id="cta-title" className={styles.heading}>
          Book the <em>free diagnostic.</em>
        </h2>
        <p className={styles.sub}>
          A day on site, a written read on what&rsquo;s worth building —
          and what isn&rsquo;t.
        </p>
        <a
          className={`cta cta--on-navy ${styles.cta}`}
          href="mailto:francisco@franciscocunha.ai?subject=Diagnostic%20enquiry"
        >
          francisco@franciscocunha.ai <span aria-hidden>→</span>
        </a>
        <hr className="rule rule--on-navy" />
        <dl className={styles.contact}>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/franciscocunha"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/franciscocunha
              </a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+31613605751">+31 6 13 60 57 51</a>
            </dd>
          </div>
          <div>
            <dt>Based</dt>
            <dd>Utrecht, Netherlands</dd>
          </div>
          <div>
            <dt>Working</dt>
            <dd>On-site · Hybrid · Remote</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>English · Português · Spanish</dd>
          </div>
          <div>
            <dt>Engagement</dt>
            <dd>
              Stages <em>I</em> &amp; <em>II</em> are free, no commitment.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
