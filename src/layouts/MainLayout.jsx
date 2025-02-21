import React from "react";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const MainLayout = () => {
  const [anim] = useAutoAnimate();
  return (
    <div className={styles.cont}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div ref={anim} className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
