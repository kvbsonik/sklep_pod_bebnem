import React from "react";
import styles from "./Main.module.css";
import Product from "../Product/Product";
import { products } from "../../helpers/products";

function Main() {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <Product
          imageSrc={product.imageSrc}
          name={product.name}
          description={product.description}
          inStock={product.inStock}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Main;
