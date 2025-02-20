import React from "react";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
const MainLayout = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
