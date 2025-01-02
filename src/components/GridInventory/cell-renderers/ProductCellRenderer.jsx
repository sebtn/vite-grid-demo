import styles from "./ProductCellRenderer.module.css";

export const ProductCellRenderer = ({ value, data: { image, category } }) => (
  <div className={styles.productCell}>
    <div className={styles.image}>
      <img src={`/inventory/${image}.png`} alt={image} />
    </div>
    <div>
      <div>{value}</div>
      <div className={styles.stockCell}>{category}</div>
    </div>
  </div>
);
