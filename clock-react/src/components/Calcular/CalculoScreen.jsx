import React, { useState, useContext, useEffect } from "react";
import "./Calculo.css";
import "../AlarmOption/AlarmOption.css"
import { AlarmContext } from "../context/ContextAlarm";
import { useForm } from 'react-hook-form'
import { minutesNumber, hourNumber } from "../../func";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { horaJudaica, hourAnalog, minutesAnalog, setHourAnalog, setMinutesAnalog, setHoraVerificacao } = useContext(AlarmContext);
  const { register, handleSubmit } = useForm();

  // ao submeter o formulario, adiciona o valor em HourAnalog e MinutesAnalog
  const onSubmit = (data) => {
    setHourAnalog(data.horas);
    setMinutesAnalog(data.minutos);
  };

  const setHorasDuodecimo = () => {
    if (!hour.includes("Horas") && !minutes.includes("Minutos")) {
      setHoraVerificacao(`${hour}:${minutes}`);
    }
  };

  useEffect(() => {
    clock();
    // console.log(hourDigital, minutesDigital)
  }, [hourAnalog, minutesAnalog])

  const clock = () => {
    setHour(`rotateZ(${(hourAnalog * 30)}deg)`);
    setMinutes(`rotateZ(${minutesAnalog * 6}deg)`);
  };

  return (
    <>
      {/* // Relogio */}
      <div className="clock__circle">
        <span className="clock__twelve"></span>
        <span className="clock__three"></span>
        <span className="clock__six"></span>
        <span className="clock__nine"></span>

        <div className="clock__rounder"></div>
        <div className="clock__hour" style={{ transform: hour }}></div>
        <div className="clock__minutes" style={{ transform: minutes }}></div>
      </div>

      <p>{horaJudaica}</p>

      <div className="option-Container">
        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className={`wrapper-option form-container`}>
          <label>Hora</label>
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

          <label>Minutos</label>
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
          <button onClick={setHorasDuodecimo} className={`setAlarm-btn`}>
            Calcular
          </button>
        </form>
      </div>
    </>
  );
}

export default AnalogClock;
