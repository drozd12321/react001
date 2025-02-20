import React from "react";
import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import { userDT } from "../../data/data";
import logo from "../../assets/react.svg";
const User = () => {
  const { usid } = useParams();
  console.log(usid);
  //отпавляем запрос на пользователя
  const dataUs = userDT.filter((item) => item.id === Number(usid));
  console.log(dataUs);
  return (
    <div className={styles.container}>
      <h2>Пользователь {dataUs[0].id}</h2>
      <div>
        <img src={logo} alt="" />
        <p>{dataUs[0].name}</p>
        <p>{dataUs[0].fam}</p>
        <p>{dataUs[0].nik}</p>
        <p>{dataUs[0].tel}</p>
        <p>{dataUs[0].lin}</p>
      </div>
    </div>
  );
};

export default User;
