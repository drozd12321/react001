import React from "react";
import styles from "./Msg.module.css";
const Msg = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default Msg;
