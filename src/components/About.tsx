import Image from "next/image";
import styles from "./About.module.css";

const background = [
  { dt: "Previously", dd: "GXO Logistics · Farfetch (Coupang Group) · Kaizen Institute" },
  { dt: "Education", dd: "MSc Industrial Engineering & Management, University of Porto" },
  { dt: "Methods", dd: "Lean Six Sigma · Kaizen · Project Management (PMP® foundations) · Product & Growth Management" },
  { dt: "Recognition", dd: "Kaizen Award for Digitalization · Winner, Startup Pirates" },
];

export default function About() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow">V · Experience</p>
        <h2 id="about-title" className={styles.heading}>
          Senior, hands-on,<br />
          <em>independent.</em>
        </h2>
        <p className={styles.lede}>
          Campos Cunha Consulting is my independent practice. The person who
          scopes the work is the person who builds it — and the person who
          trains your team on it.
        </p>
        <div className={styles.intro}>
          <figure className={styles.portrait}>
            <Image
              src="/portrait.jpg"
              alt="Francisco Cunha"
              width={800}
              height={800}
              sizes="(min-width: 900px) 280px, 60vw"
              className={styles.photo}
            />
            <figcaption className={styles.caption}>
              Francisco Cunha · Founder
            </figcaption>
          </figure>
          <div className={styles.bio}>
            <p className="eyebrow">About me</p>
            <p>
              Industrial engineer with <em>8+ years</em>{" "}across contract
              logistics, e-commerce, and Lean consulting — with a background
              in product and growth management. I&rsquo;ve owned delivery end
              to end, from the first process walk to go-live and the
              improvements that follow.
            </p>
            <p>
              I&rsquo;ve taken warehouses and systems live on time
              (<em>WMS</em>{" "}/ <em>OMS</em>{" "}/ <em>ERP</em>, UAT, data migration,
              SOPs, training) at sites with <em>1M+ stock units</em>{" "}and{" "}
              <em>€500M+</em>{" "}in yearly revenue, and led cross-functional teams
              across the US, the Netherlands, and Portugal.
            </p>
            <p>
              I bring the same discipline to small and medium businesses: a
              website that works, a consistent social presence, and sales and
              operations that scale. I take on a small number of engagements
              at a time, and each one gets senior attention from start to
              finish.
            </p>
            <dl className={styles.background}>
              {background.map((b) => (
                <div key={b.dt}>
                  <dt>{b.dt}</dt>
                  <dd>{b.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <aside className={styles.col}>
          <p className="eyebrow">Why me — not a traditional consultancy</p>
          <ul className={styles.list}>
            <li>
              <em>Independent practice.</em>{" "}No account managers, no offshore
              handover.
            </li>
            <li>
              <em>Fixed scope</em>{" "}agreed in writing before kickoff.
            </li>
            <li>
              <em>Working solutions</em>{" "}— not 80-page slide decks.
            </li>
            <li>
              Tech, ops, and people skills in one person. The same person who
              specs the system trains the users on it.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
