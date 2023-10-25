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

  // formulario
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    setHourAnalog("")
    setMinutesAnalog("")
    setHourAnalog(data.horas)
    setMinutesAnalog(data.minutos)
  }




  const setHorasDuodecimo = () => {
    if (
      !hour.includes("Horas") &&
      !minutes.includes("Minutos")
    ) {
      setHoraVerificacao(`${hour}:${minutes}`);
    }
  };

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
        >
          Selecionar Hora

  const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
  const [test, setTest] = useSelect("Teste")
  const { hasAlarm,setHourAnalog, setMinutesAnalog, setHourDigital, setMinutesDigital } = useContext(AlarmContext);

  // const setHorasDuodecimo = () => {
  //   if (
  //     !hour.includes("Horas") &&
  //     !minutes.includes("Minutos")
  //   ) {
  //     setHoraVerificacao(`${hour}:${minutes}`);
  //   }
  // };

  const { register, handleSubmit, } = useForm();

  const onSubmit = (data) => {

    setHourAnalog("")
    setMinutesAnalog("")
    setHourAnalog(data.hora)
    setMinutesAnalog(data.minuto)

    setHourDigital("")
    setMinutesDigital("")
    setHourDigital(data.hora)
    setMinutesDigital(data.minuto)


    console.log(data)
  }

  return (
    <div className="option-Container">
      <form onSubmit={handleSubmit(onSubmit)} className={`wrapper-option ${hasAlarm && "disable"}`} style={{ display: "flex", flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select {...register("hora")}>
            <option disabled value="Hour">
              Hour
            </option>
            {hourNumber.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select {...register("minuto")}>
            <option disabled value="Minutes">
              Minutes
            </option>
            {minutesNumber.map((minutes, index) => (
              <option key={index} value={minutes}>
                {minutes}
              </option>
            ))}
          </select>
        </div>
        {/* <select {...setAmPmOption}>
          <option disabled value="Am-Pm">
            Am/Pm
          </option>
          <option value="AM">Am</option>
          <option value="PM">Pm</option>
        </select> */}
        <button
          type="submit"
          className={`setAlarm-btn ${hasAlarm && "play"}`}
        >
          {hasAlarm ? "Clear Alarm" : "Set Alarm"}
        </button>
      </form>
    </div >
  );
}

export default AlarmOption;
