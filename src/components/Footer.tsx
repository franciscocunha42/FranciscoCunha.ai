import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className="rule" />
      <div className={`container ${styles.row}`}>
        <span>© MMXXVI · Francisco Cunha</span>
        <span className={styles.right}>franciscocunha.ai</span>
      </div>
    </footer>
  );
}
