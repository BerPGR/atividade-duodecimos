// AlarmOption.js
import React, { useContext, useEffect, useState } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../../hook/useSelect";
import { useForm } from 'react-hook-form'
import { AlarmContext } from "../context/ContextAlarm";

const questions = [
  {
    question: "Digite 9 horas da manhã",
    answer: { hora: 9, minutos: 0 }
  },
  {
    question: "Digite 4 horas da tarde",
    answer: { hora: 16, minutos: 0 }
  },
  {
    question: "Digite 7 horas da manhã",
    answer: { hora: 7, minutos: 0 }
  },
  {
    question: "Digite 1 hora da tarde",
    answer: { hora: 13, minutos: 0 }
  },
  {
    question: "Digite 11 horas da noite",
    answer: { hora: 23, minutos: 0 }
  },
  {
    question: "Digite 6 horas da manhã",
    answer: { hora: 6, minutos: 0 }
  },
  {
    question: "Digite 5 horas da tarde",
    answer: { hora: 17, minutos: 0 }
  },
  {
    question: "Digite 3 horas da manhã",
    answer: { hora: 3, minutos: 0 }
  },
  {
    question: "Digite 8 horas da noite",
    answer: { hora: 20, minutos: 0 }
  },
  {
    question: "Digite 12 horas da noite",
    answer: { hora: 0, minutos: 0 }
  }
];


function AlarmOption() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const {
    hourAnalog,
    setHourAnalog,
    minutesAnalog,
    setMinutesAnalog,
    setHoraVerificacao
  } = useContext(AlarmContext);

  const [hour, setHour] = useSelect("Horas");
  const [minutes, setMinutes] = useSelect("Minutos");

  // user answer
  const [userAnswer, setUserAnswer] = useState({
    hora: 0,
    minutos: 0
  })
  const [score, setScore] = useState(0);

  const setHorasDuodecimo = () => {
    if (!hour.includes("Horas") && !minutes.includes("Minutos")) {
      setHoraVerificacao(`${hour}:${minutes}`);
    }
  };

  // Formulario
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setHourAnalog(data.horas);
    setMinutesAnalog(data.minutos);
    setUserAnswer(prev => {
      return { ...prev, hora: Number(data.horas), minutos: Number(data.minutos) }
    })
  };

  useEffect(() => {
    handleQuiz()
  }, [userAnswer])

  const currentQuestion = questions[questionNumber]
  const handleQuiz = () => {
    if (userAnswer.hora === 0 && userAnswer.minutos === 0) {
      return
    }
    const correctAnswer = currentQuestion.answer
    console.log(correctAnswer, userAnswer)
    if (correctAnswer.hora == userAnswer.hora && correctAnswer.minutos == userAnswer.minutos) {
      alert("Hora está correta")
      handleScore()
    } else {
      alert("Hora está errada")
    }
    handleNextQuestion()

  }

  const handleScore = () => {
    setScore(prev => prev + 1)
  }

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

      <p>Score: {score}</p>
    </div>
  );
}

export default AlarmOption;
