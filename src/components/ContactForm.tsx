"use client";

import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";

const TO = "francisco.m.camposcunha@gmail.com";
const WHATSAPP = "31613605751";

const topics = [
  "A new website",
  "Social media",
  "Growing sales",
  "Scaling operations",
  "Warehouse & fulfilment",
  "A system implementation (WMS / OMS / ERP)",
  "Continuous improvement / Lean",
  "Project or programme management",
  "Something else",
];

type Draft = { subject: string; body: string };

function buildDraft(data: FormData): Draft {
  const get = (k: string) => String(data.get(k) || "").trim();
  const name = get("name");
  const company = get("company");
  const phone = get("phone");
  const topic = get("topic");
  const message = get("message");

  const lines = [
    "Hi Francisco,",
    "",
    `I'm ${name} from ${company}. I'd like to talk about ${topic.charAt(0).toLowerCase()}${topic.slice(1)}.`,
  ];
  if (message) lines.push("", message);
  lines.push(
    "",
    "Could we set up the free diagnostic?",
    "",
    "Best regards,",
    name,
    company,
  );
  if (phone) lines.push(phone);

  return {
    subject: `Free diagnostic enquiry — ${company}`,
    body: lines.join("\n"),
  };
}

export default function ContactForm() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState<"email" | "address" | null>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDraft(buildDraft(new FormData(e.currentTarget)));
    setCopied(null);
  }

  async function copy(text: string, what: "email" | "address") {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers / insecure contexts: fall back to selecting the text.
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(what);
  }

  if (draft) {
    const s = encodeURIComponent(draft.subject);
    const b = encodeURIComponent(draft.body);
    const links = [
      { label: "Open in email app", href: `mailto:${TO}?subject=${s}&body=${b}`, primary: true },
      { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${s}&body=${b}` },
      { label: "Outlook", href: `https://outlook.office.com/mail/deeplink/compose?to=${TO}&subject=${s}&body=${b}` },
      { label: "WhatsApp", href: `https://wa.me/${WHATSAPP}?text=${b}` },
    ];

    return (
      <div className={styles.draft}>
        <p className={styles.draftHead}>Your email is ready.</p>
        <p className={styles.draftNote}>
          Nothing has been sent yet. Review it, edit it if you like, then send
          it the way that suits you.
        </p>

        <dl className={styles.meta}>
          <div>
            <dt>To</dt>
            <dd>
              {TO}
              <button
                type="button"
                className={styles.inlineBtn}
                onClick={() => copy(TO, "address")}
              >
                {copied === "address" ? "Copied" : "Copy"}
              </button>
            </dd>
          </div>
          <div>
            <dt>Subject</dt>
            <dd>{draft.subject}</dd>
          </div>
        </dl>

        <textarea
          ref={bodyRef}
          className={styles.preview}
          value={draft.body}
          onChange={(e) => setDraft({ ...draft, body: e.target.value })}
          rows={Math.min(16, draft.body.split("\n").length + 1)}
          aria-label="Email text"
        />

        <div className={styles.sendRow}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`cta ${l.primary ? "cta--primary" : "cta--on-navy"} ${styles.sendBtn}`}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className={`cta cta--on-navy ${styles.sendBtn}`}
            onClick={() => copy(`Subject: ${draft.subject}\n\n${draft.body}`, "email")}
          >
            {copied === "email" ? "Copied ✓" : "Copy email"}
          </button>
        </div>

        <button
          type="button"
          className={styles.back}
          onClick={() => setDraft(null)}
        >
          ← Edit details
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Company</span>
          <input
            type="text"
            name="company"
            required
            autoComplete="organization"
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>I&rsquo;d like help with</span>
          <select name="topic" required className={styles.input} defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Phone · optional</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={styles.input}
          />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>Message · optional</span>
        <textarea
          name="message"
          rows={4}
          className={styles.textarea}
          placeholder="A line or two about your business, the problem, or where you'd like to start."
        />
      </label>
      <div className={styles.actions}>
        <button type="submit" className={`cta cta--primary ${styles.submit}`}>
          Draft my email →
        </button>
        <span className={styles.note}>
          Nothing is sent from this page — you review the email and send it
          yourself.
        </span>
      </div>
    </form>
  );
}
