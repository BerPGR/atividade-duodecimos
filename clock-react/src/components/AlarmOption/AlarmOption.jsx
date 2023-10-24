import React, { useContext } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { AlarmContext } from "../context/ContextAlarm";

function AlarmOption() {
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
      <div className={`wrapper-option`}>
        <select {...setHour}>
          <option disabled value="Horas">
            Horas
          </option>
          {hourNumber.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select {...setMinutes}>
          <option disabled value="Minutos">
            Minutos
          </option>
          {minutesNumber.map((minutes, index) => (
            <option key={index} value={minutes}>
              {minutes}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={setHorasDuodecimo}
        className={`setAlarm-btn`}
      >
        Selecionar Hora
      </button>
    </div>
  );
}

export default AlarmOption;
