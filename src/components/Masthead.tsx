import Logo from "./Logo";
import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.row}`}>
        <Logo />
        <span className={styles.right}>
          Operations <span className={styles.dot}>·</span> AI Solutions
        </span>
      </div>
      <hr className="rule" />
    </header>
  );
}
