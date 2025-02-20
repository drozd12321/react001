import React from "react";
import styles from "./MessageUser.module.css";
import { Outlet, useParams } from "react-router-dom";
import { dataTg } from "../../data/data";
import Msg from "../Msg/Msg";
const MessageUser = () => {
  const dataMessageUser = dataTg.filter((item) => {
    return item.id === Number(usid);
  });
  console.log(dataMessageUser.info);
  return (
    <div>
      <h3>Сообщения</h3>
      <div className={styles.masg}>
        {dataMessageUser.map((item, ind) => {
          <Msg key={ind} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MessageUser;
