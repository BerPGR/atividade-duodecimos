import React, { useContext } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { AlarmContext } from "../context/ContextAlarm";

// formulario
import { useForm } from 'react-hook-form'

function AlarmOption() {
  // formulario
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  const [hour, setHour] = useSelect("Horas");
  const [minutes, setMinutes] = useSelect("Minutos");
  const { setHoraVerificacao } =
    useContext(AlarmContext);

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
        </button>
      </form>
    </div >
  );
}

export default AlarmOption;
