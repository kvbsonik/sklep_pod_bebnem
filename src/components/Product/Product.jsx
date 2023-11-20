import React from "react";
import styles from "./Product.module.css";

function Product({ imageSrc, name, description, inStock, price }) {
  return (
    <div className={styles.product}>
      <img className={styles.image} src={imageSrc} alt={name} />
      <div className={styles.nameBox}>
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.inStock}>
        Na stanie: <span>{inStock}</span>
      </p>
      <p className={styles.price}>{price} zł/kg</p>
    </div>
  );
}

export default Product;
