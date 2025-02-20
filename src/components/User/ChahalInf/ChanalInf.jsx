import React from "react";
import styles from "./ChahalInf.module.css";
const ChanalInf = (item) => {
  console.log(item);
  return (
    <div className={styles.chan}>
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.link}</p>
      <p>{`${item.msgcount}`}</p>
    </div>
  );
};

export default ChanalInf;
