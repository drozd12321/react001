import React, { useState } from "react";
import styles from "./Punct5.module.css";
import Menu from "../Menu/Menu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import User from "../User/User";
import { useNavigate } from "react-router-dom";
const Punct5 = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [act, SetACt] = useState(false);
  const [anim] = useAutoAnimate();
  const handleSerch = (e) => {
    setSearch(e.target.value);
  };
  const SetSearchServer = () => {
    navigate(`userid/${search}`);
    SetACt(!act);
    console.log(search);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Поиск пользователя</h1>
        <div className={styles.search}>
          {" "}
          <input
            type="text"
            placeholder="Введите id"
            value={search}
            onChange={handleSerch}
          />
          <button onClick={() => SetSearchServer()}>Найти пользователя</button>
        </div>
        {/* <div ref={anim}>{act && <User id={search} />}</div> */}
      </div>
    </div>
  );
};

export default Punct5;
