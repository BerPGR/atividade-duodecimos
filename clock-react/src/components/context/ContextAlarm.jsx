import React, { createContext, useEffect, useState } from "react";
export const AlarmContext = createContext();

const extensoes = ["", "primeira", "segunda", "terceira", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima", "undécima", "duodécima"]


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
  // {
  //   question: "Digite 1 hora da tarde",
  //   answer: { hora: 13, minutos: 0 }
  // },
  // {
  //   question: "Digite 11 horas da noite",
  //   answer: { hora: 23, minutos: 0 }
  // },
  // {
  //   question: "Digite 6 horas da manhã",
  //   answer: { hora: 6, minutos: 0 }
  // },
  // {
  //   question: "Digite 5 horas da tarde",
  //   answer: { hora: 17, minutos: 0 }
  // },
  // {
  //   question: "Digite 3 horas da manhã",
  //   answer: { hora: 3, minutos: 0 }
  // },
  // {
  //   question: "Digite 8 horas da noite",
  //   answer: { hora: 20, minutos: 0 }
  // },
  // {
  //   question: "Digite 12 horas da noite",
  //   answer: { hora: 0, minutos: 0 }
  // }
];

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

  // quiz
  const [questionNumber, setQuestionNumber] = useState(0);
  const handleNextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(prev => prev + 1);
    } else {
      setQuestionNumber(questions.length + 1);
    }
  };

  const [userAnswer, setUserAnswer] = useState({
    hora: 0,
    minutos: 0
  })


  const currentQuestion = questions[questionNumber]
  const handleQuiz = () => {
    if (userAnswer.hora === 0 && userAnswer.minutos === 0) {
      alert("Defini primeira a hora.")
      return
    }

    const correctAnswer = currentQuestion.answer
    console.log(correctAnswer, userAnswer)
    if (correctAnswer.hora == userAnswer.hora && correctAnswer.minutos == userAnswer.minutos) {
      setOpenModal(prev => {
        return { ...prev, open: true, correctModal: true, wrongModal: false }
      })
      handleScore()
    } else {
      setOpenModal(prev => {
        return { ...prev, open: true, correctModal: false, wrongModal: true }
      })

      // reset
      setUserAnswer(prev => {
        return { ...prev, hora: 0, minutos: 0 }
      })
    }
  }

  // MODALS
  const [openModal, setOpenModal] = useState({ open: false, correctModal: false, wrongModal: false });

  const handleCloseModal = () => setOpenModal((prev) => {
    return { ...prev, open: false, correctModal: false, wrongModal: false }
  });

  // SCORE
  const [score, setScore] = useState(0);
  const handleScore = () => {
    setScore(prev => prev + 1)
  }

  // reset quiz
  const resetQuiz = () => {
    setUserAnswer({ hora: 0, minutos: 0 })
    setScore(0)
    setOpenModal({ open: false, correctModal: false, wrongModal: false })
    setQuestionNumber(0)
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
        setMinutesDigital,
        questions,
        handleNextQuestion,
        questionNumber,
        userAnswer,
        setUserAnswer,
        currentQuestion,
        handleQuiz,
        openModal,
        handleCloseModal,
        handleScore,
        score,
        resetQuiz
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;
