import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const today = new Date();
  const day = today.getDay();
  const hour = today.getHours();
  let isOpen = true;
  if (hour < 18 && hour < 8 && day >= 0 && day <= 4) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  return (
    <div className={styles.footer}>
      <p>Godziny otwarcia: 8-18 (poniedziałek - piątek)</p>
      <p
        className={`${styles.openHours} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {isOpen ? "Otwarte! Zapraszamy!" : "Aktualnie zamknięte!"}
      </p>
    </div>
  );
}
export default Footer;
