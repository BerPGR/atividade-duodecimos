import React, { useState, useContext } from "react";
import "./AnalogClock.css";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
  };
  setInterval(clock, 1000);

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
