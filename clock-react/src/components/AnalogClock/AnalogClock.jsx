import React, { useState, useContext, useEffect } from "react";
import "./AnalogClock.css";
import { AlarmContext } from "../context/ContextAlarm";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { hasAlarm, hourAnalog, minutesAnalog } = useContext(AlarmContext);

  useEffect(() => {
    clock();
    // console.log(hourDigital, minutesDigital)
  }, [hourAnalog, minutesAnalog])

  const clock = () => {
    // let date = new Date();

    // // let hh = date.getHours() * 30,
    // //   mm = date.getMinutes() * 6,
    // //   ss = date.getSeconds() * 6;

    setHour(`rotateZ(${(hourAnalog * 30)}deg)`);
    setMinutes(`rotateZ(${minutesAnalog * 6}deg)`);
    console.log("HORA", hourAnalog * 30)
    console.log("MINUTOS", minutesAnalog * 6)
    // setSeconds(`rotateZ(${ss}deg)`);
  };
  // setInterval(clock, 1000);



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
