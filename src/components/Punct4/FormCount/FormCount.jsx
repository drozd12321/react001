import React from "react";
import styles from "./FormCount.module.css";
import { useForm } from "react-hook-form";
const FormCount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (dat) => {
    //отправляем данные
    console.log(dat);
    reset();
  };
  const handleStop = () => {
    window.location.reload();
    console.log("fdgs");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.itemForm}>
        <label> НазваниеНазва ниеНазвание</label>
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
      <button className={styles.sb} onClick={handleStop}>
        Сбросить
      </button>
    </form>
  );
};

export default FormCount;
