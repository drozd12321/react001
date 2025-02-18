import React from "react";
import styles from "./Punct3.module.css";
import Menu from "../Menu/Menu";
const Punct3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>3</div>
    </div>
  );
};

export default Punct3;
