import styles from "./StatusCellRenderer.module.css";

export const StatusCellRenderer = ({ value, valueFormatted }) => (
  <div className={`${styles.tag} ${styles[value + "Tag"]} w-fit`}>
    <div className={`${styles.circle} ${styles[value + "Circle"]} w-fit`}></div>
    <span>{valueFormatted}</span>
  </div>
);
