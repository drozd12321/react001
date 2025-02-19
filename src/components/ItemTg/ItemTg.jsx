import React from "react";
import styles from "./ItemTg.module.css";
import { Link } from "react-router-dom";
const ItemTg = (props) => {
  return (
    <div className={styles.itemtg}>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <Link to={`/cartitemtg/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
      <div>
        <Link to={`${props.sl}`}>
          <p>Ссылка</p>
        </Link>
      </div>
    </div>
  );
};

export default ItemTg;
