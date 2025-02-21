import React from "react";
import styles from "./ChahalInf.module.css";
import { Link } from "react-router-dom";
const ChanalInf = (item) => {
  console.log(item);
  return (
    <div className={styles.chan}>
      <p>
        <Link to={`message/${item.id}`}>{item.id}</Link>
      </p>
      <p>{item.title}</p>
      <p>{item.link}</p>
      <p>{`${item.msgcount}`}</p>
    </div>
  );
};

export default ChanalInf;
