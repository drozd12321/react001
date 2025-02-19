import React from "react";
import styles from "./CartUserId.module.css";
const CartUserId = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{props.id}</div>
      <div className={styles.item}>{props.nam}</div>
      <div className={styles.item}>{props.silc}</div>
      <div className={styles.item}>{props.param}</div>
      <div className={styles.item}>{props.param1}</div>
      <div className={styles.item}>{props.param2}</div>
      <div className={styles.item}>{props.param3}</div>
    </div>
  );
};

export default CartUserId;
