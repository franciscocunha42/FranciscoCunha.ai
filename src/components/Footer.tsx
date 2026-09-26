import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className="rule" />
      <div className={`container ${styles.row}`}>
        <span>© MMXXVI · Campos Cunha Consulting</span>
        <span>KVK 42156042 · Utrecht, NL</span>
      </div>
    </footer>
  );
}
