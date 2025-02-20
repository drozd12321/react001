import React from "react";
import styles from "./CartUserId.module.css";
import { Link, Outlet } from "react-router-dom";
const CartUserId = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link to={`userid/${props.id}`}>{props.id}</Link>
      </div>
      <div className={styles.item}>{props.nam}</div>
      <div className={styles.item}>{props.silc}</div>
      <div className={styles.item}>{props.param}</div>
      <div className={styles.item}>{props.param1}</div>
      <div className={styles.item}>{props.param2}</div>
      <div className={styles.item}>{props.param3}</div>
      <div className={styles.item}>{props.param3}</div>
    </div>
  );
};

export default CartUserId;
