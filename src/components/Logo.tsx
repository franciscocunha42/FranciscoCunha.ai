import styles from "./Logo.module.css";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        d="M81.11 18.89 A44 44 0 1 0 81.11 81.11"
        fill="none"
        stroke="var(--navy)"
        strokeWidth="9"
      />
      <path
        d="M68.38 31.62 A26 26 0 1 0 68.38 68.38"
        fill="none"
        stroke="var(--steel)"
        strokeWidth="10"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className={styles.logo} aria-label="Campos Cunha Consulting">
      <LogoMark className={styles.mark} />
      <span className={styles.divider} aria-hidden />
      <span className={styles.words} aria-hidden>
        <span className={styles.name}>Campos Cunha</span>
        <span className={styles.sub}>Consulting</span>
      </span>
    </span>
  );
}
