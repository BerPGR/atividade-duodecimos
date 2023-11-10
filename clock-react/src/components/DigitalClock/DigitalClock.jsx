import React, { useContext } from "react";
import "./DigitalClock.css";
import { AlarmContext } from "../context/ContextAlarm";

function DigitalClock() {
  const { hourDigital, minutesDigital, horaJudaica } = useContext(AlarmContext);

  return (
    <div>
      <div className="clock__text">
        <div className="clock__text-hour">{`${hourDigital  ? hourDigital : "00"}:`}</div>
        <div className="clock__text-minutes">{`${minutesDigital ? minutesDigital : "00"}`}</div>

      </div>

    </div>
  );
}

export default DigitalClock;
