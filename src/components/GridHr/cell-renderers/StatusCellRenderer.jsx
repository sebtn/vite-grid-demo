import styles from "./StatusCellRenderer.module.css";

export const StatusCellRenderer = ({ value }) => (
  <div className={`${styles.tag} ${styles[value + "Tag"]}`}>
    {value === "paid" && (
      <img className={styles.tick} src={`/hr/tick.svg`} alt="tick" />
    )}
    <span>{value}</span>
  </div>
);
