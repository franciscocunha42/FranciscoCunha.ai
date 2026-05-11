import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.row}`}>
        <span className={styles.left}>Francisco Cunha</span>
        <span className={styles.right}>
          AI Solutions Architect <span className={styles.dot}>·</span> Operations
        </span>
      </div>
      <hr className="rule" />
    </header>
  );
}
