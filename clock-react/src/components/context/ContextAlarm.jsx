import React, { createContext, useEffect, useState } from "react";
export const AlarmContext = createContext();

function ContextAlarm({ children }) {
  const [hourAnalog, setHourAnalog] = useState("");
  const [minutesAnalog, setMinutesAnalog] = useState("");
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [hourAnalog, setHourAnalog] = useState("");
  const [minutesAnalog, setMinutesAnalog] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     let date = new Date();

  useEffect(() => {
    if (horaVerificacao == "") {
      let date = new Date();
      let HH = date.getHours(),
        MM = date.getMinutes()

      if (HH === 0) HH = 12;
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;

      setHourDigital(HH);
      setMinutesDigital(MM);
    } else {
      let horasNormais = horaVerificacao.split(":")
      setHourDigital(horasNormais[0])
      setMinutesDigital(horasNormais[1])
      const horaJudaica = calculaHora(parseInt(horasNormais[0]))
      const minutoJudaico = calculaMinuto(parseInt(horasNormais[1]))
      setHoraJudaica(`${horaJudaica} ${minutoJudaico}`)
    }
  }, []);

  //     let HH = date.getHours(),
  //       MM = date.getMinutes(),
  //       day = date.getDate(),
  //       month = date.getMonth(),
  //       year = date.getFullYear(),
  //       ampm;

  //     if (HH >= 12) {
  //       HH = HH - 12;
  //       ampm = "PM";
  //     } else {
  //       ampm = "AM";
  //     }

    if (horaNormal >= 0 && horaNormal <= 6) {
      horaNova = horaNormal + 6
    } else if (horaNormal >= 7 && horaNormal <= 18) {
      horaNormal = horaNormal - 6
    } else {
      horaNova = horaNormal - 18
    }

    if (horaNormal >= 7 && horaNormal <= 18) {
      return `hora ${extensoes[horaNova]} (diurna)`
    } else {
      return `hora ${extensoes[horaNova]} noturna`
    }
  }

  const calculaMinuto = minutoNormal => {
    return `São ${parseInt(minutoNormal / 5)} duodécimos`
  }

  //     if (HH === 0) HH = 12;
  //     if (HH < 10) HH = `0${HH}`;
  //     if (MM < 10) MM = `0${MM}`;

  //     setHourDigital(HH);
  //     setMinutesDigital(MM);
  //     setAmPm(ampm);
  //     setDayNow(day);
  //     setMonthNow(months[month]);
  //     setYearNow(year);
  //   }, 1000);
  // }, []);

  // const calculaHora = horaNormal => {
  //   let horaNova = 0

  //   if (horaNormal >=0 && horaNormal<=6) {
  //       horaNova = horaNormal + 6
  //   } else if (horaNormal >= 7 && horaNormal <= 18) {
  //       horaNormal = horaNormal - 6
  //   } else {
  //       horaNova = horaNormal - 18
  //   }

  //   if (horaNormal>=7 && horaNormal<=18) {
  //       return `hora ${extensoes[horaNova]} (diurna)`
  //   } else {
  //       return `hora ${extensoes[horaNova]} noturna`
  //   }
  // }

  // const calculaMinuto = minutoNormal => {
  //   return `São ${parseInt(minutoNormal/5)} duodécimos`
  // }

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        horaJudaica,
        setHoraVerificacao,
        hourAnalog,
        minutesAnalog,
        setHourAnalog,
        setMinutesAnalog
        amPm,
        dayNow,
        monthNow,
        yearNow,
        alarmTime,
        setAlarmTime,
        hasAlarm,
        setHasAlarm,
        setHourAnalog,
        setMinutesAnalog,
        hourAnalog,
        minutesAnalog,
        setHourDigital,
        setMinutesDigital
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;
