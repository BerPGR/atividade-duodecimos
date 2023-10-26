import React, { useContext } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { AlarmContext } from "../context/ContextAlarm";

import { useForm } from 'react-hook-form'

function AlarmOption() {
  const [hour, setHour] = useSelect("Horas");
  const [minutes, setMinutes] = useSelect("Minutos");

  const { setHoraVerificacao, setHourAnalog, setMinutesAnalog } = useContext(AlarmContext);

  const setHorasDuodecimo = () => {
    if (
      !hour.includes("Horas") &&
      !minutes.includes("Minutos")
    ) {
      setHoraVerificacao(`${hour}:${minutes}`);
    }
  };

  // formulario
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    setHourAnalog("")
    setMinutesAnalog("")
    setHourAnalog(data.horas)
    setMinutesAnalog(data.minutos)
  }


  return (
    <div className="option-Container">
      <form onSubmit={handleSubmit(onSubmit)} className={`wrapper-option`}>
        <select {...register("horas")}>
          <option disabled value="Horas">
            Horas
          </option>
          {hourNumber.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select {...register("minutos")}>
          <option disabled value="Minutos">
            Minutos
          </option>
          {minutesNumber.map((minutes, index) => (
            <option key={index} value={minutes}>
              {minutes}
            </option>
          ))}
        </select>
        <button
          onClick={setHorasDuodecimo}
          className={`setAlarm-btn`}
        ></button>
      </form>
    </div>

)}

export default AlarmOption;
