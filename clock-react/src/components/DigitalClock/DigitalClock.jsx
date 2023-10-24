import React, { useContext } from "react";
import "./DigitalClock.css";
import { AlarmContext } from "../context/ContextAlarm";

function DigitalClock() {
  const { hourDigital, minutesDigital } =
    useContext(AlarmContext);

  return (
    <div>
      <div className="clock__text">
        <div className="clock__text-hour">{`${hourDigital}:`}</div>
        <div className="clock__text-minutes">{minutesDigital}</div>
      </div>
      <div className="clock__date"></div>
    </div>
  );
}

export default DigitalClock;
