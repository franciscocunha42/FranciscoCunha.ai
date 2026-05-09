import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.row}`}>
        <span className={styles.left}>
          Francisco Cunha <span className={styles.dot}>·</span> № 01 / MMXXVI
        </span>
        <span className={styles.right}>
          Operations Consultant <span className={styles.dot}>·</span> AI Implementation
        </span>
      </div>
      <hr className="rule" />
    </header>
  );
}
