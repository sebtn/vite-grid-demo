import styles from "./FlagCellRenderer.module.css";

export const FlagCellRenderer= ({
  value,
  data: { flag },
}) => (
  <div className={styles.flagCell}>
    <div className={styles.employeeData}>
      <span>{value}</span>
    </div>
    <img
      className={styles.flagImage}
      src={`/hr/${flag}.svg`}
      alt={value.toLowerCase()}
    />
  </div>
);
