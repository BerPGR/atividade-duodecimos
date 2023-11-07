// AlarmOption.js
import React, { useContext, useState } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { useForm } from 'react-hook-form'
import { AlarmContext } from "../context/ContextAlarm";

const questions = [
  {
    question: "Digite 3 horas da Tarde",
    answer: { hora: 15, minutos: 0 }
  },
  {
    question: "Digite 10 horas da noite",
    answer: { hora: 22, minutos: 0 }
  },
  {
    question: "Digite 2 horas da manha",
    answer: { hora: 2, minutos: 0 }
  },
]

function AlarmOption() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const {
    setHourAnalog,
    setMinutesAnalog,
    setHoraVerificacao
  } = useContext(AlarmContext);

  console.log(setHourAnalog)

  const [hour, setHour] = useSelect("Horas");
  const [minutes, setMinutes] = useSelect("Minutos");

  const setHorasDuodecimo = () => {
    if (!hour.includes("Horas") && !minutes.includes("Minutos")) {
      setHoraVerificacao(`${hour}:${minutes}`);
    }
  };

  // Formulario
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setHourAnalog(data.horas);
    setMinutesAnalog(data.minutos);
    console.log("ANTES", questionNumber)
    handleNextQuestion()
    console.log("DEpois", questionNumber)
  };

  const handleNextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(prev => prev + 1)
    } else {
      setQuestionNumber(questions.length - 1)
    }
  }

  return (
    <div className="option-Container">
      <p>{questions[questionNumber].question}</p>

      <form onSubmit={handleSubmit(onSubmit)} className={`wrapper-option form-container`}>
        <select {...register("horas")}>
          <option disabled value="Horas">
            Horas
          </option>
          {hourNumber.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <select {...register("minutos")}>
          <option disabled value="Minutos">
            Minutos
          </option>
          {minutesNumber.map((minutes, index) => (
            <option key={index} value={minutes}>
              {minutes}
            </option>
          ))}
        </select>
        <button onClick={setHorasDuodecimo} className={`setAlarm-btn`}>
          Definir Hora
        </button>
      </form>
    </div>
  );
}

export default AlarmOption;
