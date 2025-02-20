import React from "react";
import logo from "../../../assets/react.svg";
import { Link } from "react-router-dom";
const UserInf = (props) => {
  return (
    <>
      <img src={logo} alt="" />
      <p>{props.name}</p>
      <p>{props.fam}</p>
      <p>{props.nik}</p>
      <p>{props.tel}</p>
      <p>
        <Link to={"https://www.perplexity.ai/"}>{props.lin}</Link>
      </p>
    </>
  );
};

export default UserInf;
