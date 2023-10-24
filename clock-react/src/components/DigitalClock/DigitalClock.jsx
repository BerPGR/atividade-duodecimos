import React, { useContext } from "react";
import "./DigitalClock.css";
import { AlarmContext } from "../context/ContextAlarm";

function DigitalClock() {
  const { hourDigital, minutesDigital, horaJudaica } =
    useContext(AlarmContext);

  return (
    <div>
      <div className="clock__text">
        <div className="clock__text-hour">{`${hourDigital}:`}</div>
        <div className="clock__text-minutes">{minutesDigital}</div>
      </div>
      {horaJudaica != "" ?
      <div className="clock__date">{horaJudaica}</div>:
      <div></div>
      }
    </div>
  );
}

export default DigitalClock;
