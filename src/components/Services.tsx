import styles from "./Services.module.css";

type Service = {
  name: string;
  body: string;
};

type Line = {
  audience: string;
  title: string;
  intro: string;
  services: Service[];
};

const lines: Line[] = [
  {
    audience: "For small & medium businesses",
    title: "SME business consulting",
    intro:
      "Hands-on help to get found online, win more customers, and grow without the chaos.",
    services: [
      {
        name: "Websites",
        body: "Fast, modern websites that explain what you do and turn visitors into enquiries — designed, built, and launched for you.",
      },
      {
        name: "Social media",
        body: "A clear plan, a content calendar, and consistent posting — managed for you, or set up so your team can run it.",
      },
      {
        name: "Sales growth",
        body: "A sharper offer, a simple pipeline and CRM, and a repeatable way to follow up leads and grow revenue.",
      },
      {
        name: "Scaling operations",
        body: "Processes, tools, and automation that let you serve more customers without adding chaos — or headcount.",
      },
    ],
  },
  {
    audience: "For logistics, e-commerce & manufacturing",
    title: "Operations & supply chain consulting",
    intro:
      "Senior expertise from global logistics and e-commerce, applied to your warehouse, fulfilment, and supply chain.",
    services: [
      {
        name: "Warehouse & fulfilment",
        body: "Layout, flows, and productivity across inbound, outbound, and returns — lower cost per unit, fewer errors.",
      },
      {
        name: "System implementations",
        body: "WMS / OMS / ERP requirements, UAT, data migration, SOPs, and training — through to an on-time go-live.",
      },
      {
        name: "Continuous improvement",
        body: "Lean Six Sigma and Kaizen programmes that target the biggest cost drivers and make improvements stick.",
      },
      {
        name: "Project & programme management",
        body: "Interim leadership for launches, new sites, and cross-functional programmes across tech, ops, and finance.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={`section panel-navy ${styles.section}`}
      aria-labelledby="services-title"
    >
      <div className="container">
        <p className="eyebrow eyebrow--on-navy">I · Services</p>
        <h2 id="services-title" className={styles.headline}>
          Two ways <em>I can help.</em>
        </h2>
        <div className={styles.grid}>
          {lines.map((l) => (
            <article key={l.title} className={styles.card}>
              <p className={styles.audience}>{l.audience}</p>
              <h3 className={styles.title}>{l.title}</h3>
              <p className={styles.intro}>{l.intro}</p>
              <ul className={styles.list}>
                {l.services.map((s) => (
                  <li key={s.name} className={styles.item}>
                    <span className={styles.name}>{s.name}</span>
                    <span className={styles.body}>{s.body}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Across both: <em>AI and automation</em>{" "}where they genuinely save
          time — and a plain answer when they don&rsquo;t.
        </p>
      </div>
    </section>
  );
}
