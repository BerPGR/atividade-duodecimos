import React, { createContext, useEffect, useState } from "react";
export const AlarmContext = createContext();

// Lista das Questoes
const questions = [
  {
    question: "Digite 9 duodécimos da hora terceira",
    answer: { hora: 9, minutos: 9 }
  },
  {
    question: "Digite 4 duodécimos da hora décima",
    answer: { hora: 16, minutos: 4 }
  },
  {
    question: "Digite a hora undécima noturna",
    answer: { hora: 5, minutos: 0 }
  },
  {
    question: "Digite a hora sétima",
    answer: { hora: 13, minutos: 0 }
  },
  {
    question: "Digite a hora quinta noturna",
    answer: { hora: 23, minutos: 0 }
  },
  {
    question: "Digite a hora duodécima noturna",
    answer: { hora: 6, minutos: 0 }
  },
  {
    question: "Digite 5 doudécimos da hora undécima",
    answer: { hora: 17, minutos: 5 }
  },
  {
    question: "Digite a hora nona noturna",
    answer: { hora: 3, minutos: 0 }
  },
  {
    question: "Digite 8 duodécimos da hora segunda noturna",
    answer: { hora: 20, minutos: 8 }
  },
  {
    question: "Digite a hora sexta noturna",
    answer: { hora: 0, minutos: 0 }
  }
];

function ContextAlarm({ children }) {
  // Estados referentes ao ponteiro do relogio
  const [hourAnalog, setHourAnalog] = useState("");
  const [minutesAnalog, setMinutesAnalog] = useState("");

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
    }
  }, []);


  // QUIZ
  // Lógica da questao correspondente
  const [questionNumber, setQuestionNumber] = useState(0);
  const handleNextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(prev => prev + 1);
    } else {
      setQuestionNumber(questions.length + 1);
    }
  };

  // objeto da resposta do usuario
  const [userAnswer, setUserAnswer] = useState({
    hora: 0,
    minutos: 0
  })

  // variavel com a questao atual
  const currentQuestion = questions[questionNumber]

  // logica do quiz
  const handleQuiz = () => {

    // se o usuario nao tiver definido a hora ainda, alerta para definir
    if (userAnswer.hora === 0 && userAnswer.minutos === 0) {
      alert("Defini primeira a hora.")
      return
    }

    // variavel para pegar a resposta da questao
    const correctAnswer = currentQuestion.answer

    // verificacao da questao
    // se estiver correto: 
    if (correctAnswer.hora == userAnswer.hora && correctAnswer.minutos == parseInt(userAnswer.minutos / 5)) {
      //abre o modal de feedback
      setOpenModal(prev => {
        return { ...prev, open: true, correctModal: true, wrongModal: false }
      })
      // incrementa o score
      handleScore()
      // passa para proxima questao
      handleNextQuestion()

      // se estiver errado:
    } else {
      //abre o modal de feedback. No caso feedback como incorreto
      setOpenModal(prev => {
        return { ...prev, open: true, correctModal: false, wrongModal: true }
      })

      // reset da resposta do usuario
      setUserAnswer(prev => {
        return { ...prev, hora: 0, minutos: 0 }
      })
    }
  }

  // MODALS logica
  const [openModal, setOpenModal] = useState({ open: false, correctModal: false, wrongModal: false });

  const handleCloseModal = () => setOpenModal((prev) => {
    return { ...prev, open: false, correctModal: false, wrongModal: false }
  });

  // SCORE logica
  const [score, setScore] = useState(0);
  const handleScore = () => {
    setScore(prev => prev + 1)
  }

  // reset quiz para os valores iniciais
  const resetQuiz = () => {
    setUserAnswer({ hora: 0, minutos: 0 })
    setScore(0)
    setOpenModal({ open: false, correctModal: false, wrongModal: false })
    setQuestionNumber(0)
  }


  // retorno de todos os estados para serem usados na aplicacao
  return (
    <AlarmContext.Provider
      value={{
        hourAnalog,
        minutesAnalog,
        setHourAnalog,
        setMinutesAnalog,
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
