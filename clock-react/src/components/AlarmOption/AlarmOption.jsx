import React, { useContext } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { AlarmContext } from "../context/ContextAlarm";

import { useForm } from 'react-hook-form'

function AlarmOption() {
  const [hour, setHour] = useSelect("Hour");
  const [minutes, setMinutes] = useSelect("Minutes");
  const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
  const [test, setTest] = useSelect("Teste")
  const { setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm, setHourAnalog, setMinutesAnalog, setHourDigital,
    setMinutesDigital } =
    useContext(AlarmContext);

  const setAlarm = () => {
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }

    if (
      !hour.includes("Hour") &&
      !minutes.includes("Minutes") &&
      !amPmOption.includes("Am-Pm")
    ) {
      setHasAlarm(true);
      setAlarmTime(`${hour}:${minutes} ${amPmOption}`);
    }
  };

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
    </div>
  );
}

export default AlarmOption;
