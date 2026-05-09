"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const endpoint = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!endpoint) return; // mailto fallback handles itself
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successHead}>
          <em>Thanks — I&rsquo;ll be in touch.</em>
        </p>
        <p className={styles.successBody}>
          You&rsquo;ll get a reply within one business day. If it&rsquo;s
          urgent, email{" "}
          <a href="mailto:francisco@franciscocunha.ai">
            francisco@franciscocunha.ai
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  const fallbackAction = endpoint
    ? undefined
    : "mailto:francisco@franciscocunha.ai";

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      action={fallbackAction}
      method={fallbackAction ? "post" : undefined}
      encType={fallbackAction ? "text/plain" : undefined}
      noValidate
    >
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
          <span className={styles.label}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={styles.input}
          />
        </label>
      </div>
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
      <label className={styles.field}>
        <span className={styles.label}>Message · optional</span>
        <textarea
          name="message"
          rows={4}
          className={styles.textarea}
          placeholder="A line or two about the operation, the problem, or where you'd like to start."
        />
      </label>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.honeypot}
      />
      <div className={styles.actions}>
        <button
          type="submit"
          className={`cta cta--on-navy ${styles.submit}`}
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Sending…"
            : "Request the free diagnostic →"}
        </button>
        {!endpoint && (
          <span className={styles.note}>
            (Form opens your email client — backend not configured.)
          </span>
        )}
        {status === "error" && (
          <span className={styles.errorMsg} role="alert">
            Something went wrong{error ? `: ${error}` : ""}. Please email{" "}
            <a href="mailto:francisco@franciscocunha.ai">
              francisco@franciscocunha.ai
            </a>
            .
          </span>
        )}
      </div>
    </form>
  );
}
