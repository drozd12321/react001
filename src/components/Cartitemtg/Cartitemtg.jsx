import React from "react";
import styles from "./Cartitemtg.module.css";
import Menu from "../Menu/Menu";
import CartUserId from "../UserId/CartUserId";
import { Outlet, useParams } from "react-router-dom";
import { dataTg } from "../../data/data";
const Cartitemtg = () => {
  const { id } = useParams();
  //отправляем id на сервер и получаем участников
  const data = dataTg.filter((item) => {
    return item.id === Number(id);
  });
  const dataInf = data[0];
  return (
    <div className={styles.cont}>
      <div className={styles.container}>
        <h2>Участники</h2>
        <div className={styles.grid}>
          {dataInf.info && dataInf.info.length > 0 ? (
            dataInf.info.map((iteminf) => (
              <CartUserId key={iteminf.id} {...iteminf} />
            ))
          ) : (
            <div>Нет данных</div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Cartitemtg;
