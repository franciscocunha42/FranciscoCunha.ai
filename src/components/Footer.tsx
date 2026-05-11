import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className="rule" />
      <div className={`container ${styles.row}`}>
        <span>© MMXXVI · Francisco Cunha</span>
      </div>
    </footer>
  );
}
