import React, { useState } from "react";
import styles from "./Menu.module.css";
import { menu } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
import useStateManager from "../../stateManager/stateManager";
const Menu = () => {
  const [isOn, SetIsOn] = useState(false);
  function handleOffOnn() {
    SetIsOn(!isOn);
  }
  const { activeMenu, setActiveMenu } = useStateManager();
  const location = useLocation();
  // console.log(location.pathname);
  function SetCheckedActive(locate) {
    setActiveMenu(locate);
  }
  console.log(activeMenu);
  return (
    <>
      <div className={styles.siteBar}>
        <h2>Меню</h2>
        <div>
          {menu.map((item, ind) => (
            <Link to={item.path} key={ind}>
              <div
                className={`${styles.inf} ${
                  (item.path === "/" && location.pathname === "/") ||
                  (item.path !== "/" && location.pathname.startsWith(item.path))
                    ? styles.act
                    : ""
                }`}
                key={ind}
                // onClick={() => SetCheckedActive(location.pathname)}
              >
                {item.text}
              </div>
            </Link>
          ))}
          <p
            className={`${styles.start} ${isOn ? styles.on : ""}`}
            onClick={() => handleOffOnn()}
          >
            {isOn ? "Включен" : "Выключен"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
