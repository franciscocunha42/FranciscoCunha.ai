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
        <p className="eyebrow eyebrow--on-navy">Get in touch</p>
        <h2 id="cta-title" className={styles.heading}>
          Let&rsquo;s talk about <em>your business.</em>
        </h2>
        <p className={styles.sub}>
          The first stage — an on-site (or remote) diagnostic of your
          business — is on me. I end with a clear, written proposal on
          what&rsquo;s worth doing, what isn&rsquo;t, and what it would
          cost. <em>No commitment to continue.</em>
        </p>
        <ContactForm />
        <p className={styles.fallback}>
          Prefer email?{" "}
          <a href="mailto:francisco.m.camposcunha@gmail.com?subject=Diagnostic%20enquiry">
            francisco.m.camposcunha@gmail.com
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
          <div>
            <dt>Business</dt>
            <dd>
              Campos Cunha Consulting
              <br />
              KVK 42156042
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
