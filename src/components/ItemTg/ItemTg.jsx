import React, { useState } from "react";
import styles from "./ItemTg.module.css";
import { Link } from "react-router-dom";
import useStateManager from "../../stateManager/stateManager";
const ItemTg = ({ name, id, sl }) => {
  const { SetChecked } = useStateManager();
  return (
    <div className={styles.itemtg}>
      <div>
        <input
          type="checkbox"
          onChange={() => {
            SetChecked(id);
          }}
        />
      </div>
      <div>
        <Link to={`/cartitemtg/${id}`}>
          <p>{name}</p>
        </Link>
      </div>
      <div>
        <Link to={`${sl}`}>
          <p>Ссылка</p>
        </Link>
      </div>
    </div>
  );
};

export default ItemTg;
