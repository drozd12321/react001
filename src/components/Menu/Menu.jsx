import React, { useState } from "react";
import styles from "./Menu.module.css";
const Menu = () => {
  const [active, setActive] = useState(1);
  const [isOn, SetIsOn] = useState(false);
  function handleActive(num) {
    setActive(num);
  }
  function handleOffOnn() {
    SetIsOn(!isOn);
  }
  console.log(isOn);
  return (
    <>
      <div className={styles.siteBar}>
        <h2>Меню</h2>
        <div>
          <p
            className={`${styles.inf} ${active === 1 ? styles.act : ""}`}
            onClick={() => handleActive(1)}
          >
            Пункт 1
          </p>
          <p
            className={`${styles.inf} ${active === 2 ? styles.act : ""}`}
            onClick={() => handleActive(2)}
          >
            Пункт 1
          </p>
          <p
            className={`${styles.inf} ${active === 3 ? styles.act : ""}`}
            onClick={() => handleActive(3)}
          >
            Пункт 1
          </p>
          <p
            className={`${styles.inf} ${active === 4 ? styles.act : ""}`}
            onClick={() => handleActive(4)}
          >
            Пункт 1
          </p>
          <p
            className={`${styles.inf} ${active === 5 ? styles.act : ""}`}
            onClick={() => handleActive(5)}
          >
            Пункт 1
          </p>
          <div
            className={`${styles.toggle} ${isOn ? styles.on : styles.off}`}
            onClick={() => handleOffOnn()}
          >
            <div className={styles.toggleBtn}></div>
            <span className={styles.toggleLabel}>
              {isOn ? "Включено" : "Выключено"}
            </span>
          </div>
          {/* <ul>
            <li className={active ? styles.act : ""}>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
            <li>Пункт 4</li>
            <li>Пункт 5</li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Menu;
