import React from "react";
import styles from "./Cartitemtg.module.css";
import Menu from "../Menu/Menu";
import CartUserId from "../UserId/CartUserId";
import { useParams } from "react-router-dom";
import { dataTg } from "../../data/data";
const Cartitemtg = () => {
  const { id } = useParams();
  console.log(id);
  //отправляем id на сервер и получаем участников
  const data = dataTg.filter((item) => {
    return item.id === Number(id);
  });
  const dataInf = data[0];
  console.log(data);
  return (
    <div className={styles.cont}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.container}>
        <h2>Участники</h2>
        <div className={styles.grid}>
          <div className={styles.header}>
            <div>id</div>
            <div>Имя</div>
            <div>Ссылка</div>
            <div>Что то</div>
            <div>Что то еще</div>
            <div>Что то еще</div>
          </div>
          {dataInf.info && dataInf.info.length > 0 ? (
            dataInf.info.map((iteminf) => (
              <CartUserId key={iteminf.id} {...iteminf} />
            ))
          ) : (
            <div>Нет данных</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cartitemtg;
