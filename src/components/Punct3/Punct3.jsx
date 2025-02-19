import React from "react";
import styles from "./Punct3.module.css";
import Menu from "../Menu/Menu";
import ItemTg from "../ItemTg/ItemTg";
import { dataTg } from "../../data/data";
const Punct3 = () => {
  console.log("fdsgggdffd");
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>
        <div className={styles.search}>
          <div className={styles.chld}>
            <input type="text" placeholder="Поиск по названию" />
          </div>
          <div className={styles.itemChld}>
            <div className={styles.chld}>
              <select name="action" id="action">
                <option value="setActions">Выберите действие</option>
                <option value="actions">действие</option>
              </select>
            </div>
            <div>
              <button>Применить</button>
            </div>
          </div>
        </div>
        <div className={styles.scroll}>
          {dataTg.map((item, ind) => (
            <ItemTg key={ind} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Punct3;
