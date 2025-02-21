import React, { useState } from "react";
import styles from "./Punct4.module.css";
import Menu from "../Menu/Menu";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

const Punct4 = () => {
  const onSubmit = (dat) => {
    //отправляем данные
    console.log(dat);
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.item}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.itemForm}>
            <label> Название</label>
            <input
              type="number"
              min={0}
              {...register("count1", { required: true })}
            />
            {errors.count1 && <p>{errors.count1.message}</p>}
          </div>
          <div className={styles.itemForm}>
            <label>Название1</label>
            <input
              type="number"
              min={0}
              {...register("count2", { required: true })}
            />
            {errors.count2 && <p>{errors.count2.message}</p>}
          </div>
          <div className={styles.itemForm}>
            <label>Название2</label>
            <input
              type="number"
              min={0}
              {...register("count3", { required: true })}
            />
            {errors.count3 && <p>{errors.count3.message}</p>}
          </div>
          <button>Отправить</button>
          <button className={styles.sb}>Сбросить</button>
        </form>
      </div>
    </div>
  );
};

export default Punct4;
