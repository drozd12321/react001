import React, { useState } from "react";
import styles from "./Punct4.module.css";
import Menu from "../Menu/Menu";
import FormCount from "./FormCount/FormCount";
import FormAct from "../FormAct/FormAct";
import { dataTg } from "../../data/data";
import CartUserId from "../UserId/CartUserId";
const Punct4 = () => {
  const dataUser = dataTg.map((it) => it.info);
  console.log(dataUser);
  return (
    <div className={styles.container}>
      <div className={styles.cnt}>
        <h2>Угрозоносители</h2>
        <div className={styles.item}>
          <FormCount />
          <FormAct />
        </div>
        {dataUser.map((us, ind) => (
          <div key={ind}>
            {us.map((it) => (
              <CartUserId key={it.id} {...it} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Punct4;
