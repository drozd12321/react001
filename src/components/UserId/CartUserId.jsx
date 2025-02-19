import React from "react";
import styles from "./CartUserId.module.css";
const CartUserId = (props) => {
  return (
    <div className={styles.container}>
      <div>{props.id}</div>
      <div>{props.nam}</div>
      <div>{props.silc}</div>
      <div>{props.param}</div>
      <div>{props.param1}</div>
      <div>{props.param2}</div>
    </div>
  );
};

export default CartUserId;
