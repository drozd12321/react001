import React from "react";
import styles from "./Punct5.module.css";
import Menu from "../Menu/Menu";
const Punct5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>5</div>
    </div>
  );
};

export default Punct5;
