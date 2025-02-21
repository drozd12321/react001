import React from "react";
import styles from "./MessageUser.module.css";
import { useParams } from "react-router-dom";
import { message } from "../../data/data";
const MessageUser = () => {
  const { usid, tg } = useParams();
  const msg = message.filter((item) => {
    return item.id === Number(usid);
  });
  console.log(msg[0]);
  return (
    <div className={styles.masg}>
      <h3>Сообщения пользователя {usid}</h3>
      <div className={styles.scroll}>
        {msg[0].msg.map((masg, ind) => (
          <div key={ind} className={styles.infmsg}>
            <div>{masg.inf}</div>
            <div>{masg.tm}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageUser;
