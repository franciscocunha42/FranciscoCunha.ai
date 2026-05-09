import ContactForm from "./ContactForm";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section
      id="contact"
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
          and what isn&rsquo;t. <em>Stages I &amp; II are free and commit you
          to nothing.</em>
        </p>
        <ContactForm />
        <p className={styles.fallback}>
          Prefer email?{" "}
          <a href="mailto:francisco@franciscocunha.ai?subject=Diagnostic%20enquiry">
            francisco@franciscocunha.ai
          </a>
        </p>
        <hr className="rule rule--on-navy" />
        <dl className={styles.contact}>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/fmccunha"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/fmccunha
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
        </dl>
      </div>
    </section>
  );
}
