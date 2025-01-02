import styles from "./EmployeeCellRenderer.module.css";

export const EmployeeCellRenderer = ({ value, data: { image, jobTitle } }) => (
  <div className={styles.employeeCell}>
    <div className={styles.employeeData}>
      <span>{value}</span>
      <span className={styles.description}>{jobTitle}</span>
    </div>
    <img
      className={styles.image}
      src={`/hr/${image}.png`}
      alt={value.toLowerCase()}
    />
  </div>
);
