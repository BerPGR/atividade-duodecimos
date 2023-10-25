import React, { useState, useContext, useEffect } from "react";
import "./AnalogClock.css";
import { AlarmContext } from "../context/ContextAlarm";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const { hourAnalog, minutesAnalog } = useContext(AlarmContext)

  useEffect(() => {
    setHour(`rotateZ(${(hourAnalog * 30) + (minutesAnalog * 6) / 12}deg)`);
    setMinutes(`rotateZ(${(minutesAnalog * 6)}deg)`);

    console.log(hourAnalog, minutesAnalog, hour, minutes)
  }, [hourAnalog, minutesAnalog])

  return (
    <div className="clock__circle">
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" style={{ transform: hour }}></div>
      <div className="clock__minutes" style={{ transform: minutes }}></div>
    </div>
  );
}

export default AnalogClock;
