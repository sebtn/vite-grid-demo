import styles from "./PriceCellRenderer.module.css";

export const PriceCellRenderer = ({ value, data: { priceIncrease } }) => (
  <div className={styles.price}>
    <span className={styles.priceAmount}>{"£" + value}</span>
    <span className={styles.increase}>{priceIncrease + "% increase"}</span>
  </div>
);
