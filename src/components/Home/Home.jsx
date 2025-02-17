import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Menu />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
