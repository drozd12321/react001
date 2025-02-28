import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Home.module.css";
import Glavn from "../Glavn/Glavn";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>
        <Glavn />
      </div>
    </div>
  );
};

export default Home;
