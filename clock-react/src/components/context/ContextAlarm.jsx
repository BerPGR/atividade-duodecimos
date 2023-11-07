import React, { createContext, useEffect, useState } from "react";
export const AlarmContext = createContext();

const extensoes = ["", "primeira", "segunda", "terceira", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima", "undécima", "duodécima"]


function ContextAlarm({ children }) {
  const [hourAnalog, setHourAnalog] = useState("");
  const [minutesAnalog, setMinutesAnalog] = useState("");
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  
  const [horaJudaica, setHoraJudaica] = useState("");
  const [horaVerificacao, setHoraVerificacao] = useState("");



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

  const calculaMinuto = minutoNormal => {
    return `São ${parseInt(minutoNormal / 5)} duodécimos`
  }

  const calculaHora = horaNormal => {
    let horaNova = 0

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

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        hourAnalog,
        minutesAnalog,
        setHourAnalog,
        setMinutesAnalog,
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
