import React from "react";
import styles from "./User.module.css";
import { Link, useParams } from "react-router-dom";
import { userDT } from "../../data/data";
import { chanal } from "../../data/data";
import UserInf from "./UserInf/UserInf";
import ChanalInf from "./ChahalInf/ChanalInf";
const User = () => {
  const { usid } = useParams();
  //отпавляем запрос на пользователя и на каналы
  const dataUs = userDT.find((item) => item.id === Number(usid));

  console.log(chanal);
  return (
    <div className={styles.container}>
      <h2>Пользователь {dataUs.id}</h2>
      <div className={styles.userinf}>
        <UserInf {...dataUs} />
      </div>
      <div className={styles.chinf}>
        <h2>Каналы</h2>
        <div className={styles.chanel}>
          {chanal.map((item, ind) => (
            <ChanalInf key={ind} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
