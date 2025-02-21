import React, { useState } from "react";
import styles from "./Menu.module.css";
import { menu } from "../../data/data";
import { Link } from "react-router-dom";
import useStateManager from "../../stateManager/stateManager";
const Menu = () => {
  const [active, setActive] = useState(0);
  const [isOn, SetIsOn] = useState(false);
  function handleActive(num) {
    setActive(num);
  }
  function handleOffOnn() {
    SetIsOn(!isOn);
  }
  const { activeMenu, setActiveMenu } = useStateManager();
  return (
    <>
      <div className={styles.siteBar}>
        <h2>Меню</h2>
        <div>
          {menu.map((item, ind) => (
            <Link to={item.path} key={ind}>
              <div
                className={`${styles.inf} ${
                  activeMenu === item.text ? styles.act : ""
                }`}
                key={ind}
                onClick={() => setActiveMenu(item.text)}
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
