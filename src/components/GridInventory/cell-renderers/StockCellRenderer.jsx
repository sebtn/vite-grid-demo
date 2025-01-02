import styles from "./StockCellRenderer.module.css";

export const StockCellRenderer = ({ data: { available, variants } }) => (
  <div className={styles.stock}>
    <span>{available}</span> <span className={styles.stockText}>Stock /</span>{" "}
    <span className={styles.variantsText}>{`${variants} Variants`}</span>
  </div>
);
