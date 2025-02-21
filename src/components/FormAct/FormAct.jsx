import React from "react";
import styles from "./FormAct.module.css";
import { useForm } from "react-hook-form";
const FormAct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (dat) => {
    //отправляем данные
    console.log(dat);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="checkbox" id="action1" {...register("action1")} />
        <label htmlFor="action1"> Действие</label>
      </div>
      <div>
        <input type="checkbox" id="action2" {...register("action2")} />
        <label htmlFor="action2">Действие1</label>
      </div>
      <button>Отправить</button>
    </form>
  );
};

export default FormAct;
