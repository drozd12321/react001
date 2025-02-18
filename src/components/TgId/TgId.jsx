import React from "react";
import styles from "./TgId.module.css";
import logo from "../../assets/react.svg";
const TgId = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemImg}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.itemInf}></div>
    </div>
  );
};

export default TgId;
