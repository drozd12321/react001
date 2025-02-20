import React, { useState } from "react";
import styles from "./Punct3.module.css";
import Menu from "../Menu/Menu";
import ItemTg from "../ItemTg/ItemTg";
import { dataTg } from "../../data/data";
import useStateManager from "../../stateManager/stateManager";
const Punct3 = () => {
  const { checked, select, SetSelect } = useStateManager();
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(dataTg);
  const filteredDate = (e) => {
    const val = e.target.value.toLowerCase();
    setSearch(val);
    if (!val) {
      setFilterData(dataTg);
    } else {
      const value = dataTg.filter((item) => {
        return item.name.toLowerCase().includes(val);
      });
      setFilterData(value);
    }
  };
  function SetActionServer() {
    if (checked) {
      console.log("отправляем на сервер");
    }
  }
  console.log(select);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>
        <div className={styles.search}>
          <div className={styles.chld}>
            <input
              type="text"
              placeholder="Поиск по названию"
              value={search}
              onChange={filteredDate}
            />
          </div>
          <div className={styles.itemChld}>
            <div className={styles.chld}>
              <select
                name="action"
                id="action"
                value={select}
                onChange={(e) => {
                  SetSelect(e.target.value);
                }}
              >
                <option value="setActions">Выберите действие</option>
                <option value="actionsDel">действие</option>
              </select>
            </div>
            <div>
              <button onClick={SetActionServer}>Применить</button>
            </div>
          </div>
        </div>
        <div className={styles.scroll}>
          {filterData.map((item, ind) => (
            <ItemTg key={ind} name={item.name} id={item.id} sl={item.sl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Punct3;
