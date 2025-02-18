import React from "react";
import styles from "./Glavn.module.css";
import { statistica } from "../../data/data";
const Glavn = () => {
  return (
    <div className={styles.inf}>
      <h3>Статистика</h3>
      {statistica.map((item, ind) => (
        <div key={ind} className={styles.statistic}>
          {item.text}: {item.num}
        </div>
      ))}
    </div>
  );
};

export default Glavn;
