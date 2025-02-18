import React, { useState } from "react";
import styles from "./Punct2.module.css";
import Menu from "../Menu/Menu";
import useStateManager from "../../stateManager/stateManager";
const Punct2 = () => {
  const [file, setFile] = useState(null);
  const [idTg, setIdTg] = useState("");
  const { activeVue, SetActiveVue } = useStateManager();
  function handleFile(e) {
    setFile(e.target.files[0]);
  }
  function SendFile() {
    if (file) {
      // Отправляем файл на сервер
      console.log("sent");
    } else {
      alert("Выберите файл");
    }
  }
  function chahgeIgTg(e) {
    setIdTg(e.target.value);
  }
  function SentVueIdTG() {
    if (idTg) {
      //Отправляем id канала для просмотра
      console.log(idTg);
      SetActiveVue();
    } else {
      alert("Введите ссылку на канал");
    }
  }
  console.log(activeVue);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>
        <div className={styles.uppload}>
          <div>
            <input type="file" onChange={handleFile} />
          </div>
          <div>
            <button onClick={SendFile}>Загрузить файл</button>
          </div>
        </div>
        <div className={styles.prosmotr}>
          <input
            type="text"
            placeholder="Введите ссылку на канал"
            value={idTg}
            onChange={chahgeIgTg}
          />
          <button onClick={SentVueIdTG}>Посмотреть канал</button>
        </div>
      </div>
    </div>
  );
};

export default Punct2;
