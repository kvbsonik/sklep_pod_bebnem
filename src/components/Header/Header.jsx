import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.img} src="drum.png" alt="beben" />
      <h2 className={styles.title}>Internetowy Sklep "Pod Bębnem"</h2>
    </div>
  );
}
export default Header;
