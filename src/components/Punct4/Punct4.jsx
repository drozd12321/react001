import React from "react";
import styles from "./Punct4.module.css";
import Menu from "../Menu/Menu";

const Punct4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>4</div>
    </div>
  );
};

export default Punct4;
