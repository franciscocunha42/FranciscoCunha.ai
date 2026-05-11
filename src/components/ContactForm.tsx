"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error || `Request failed (${res.status})`);
      }
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
          If it&rsquo;s urgent, call me directly on{" "}
          <a href="tel:+31613605751">+31 6 13 60 57 51</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
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
        {status === "error" && (
          <span className={styles.errorMsg} role="alert">
            {error || "Something went wrong"}. Please email{" "}
            <a href="mailto:francisco.m.camposcunha@gmail.com">
              francisco.m.camposcunha@gmail.com
            </a>
            .
          </span>
        )}
      </div>
    </form>
  );
}
