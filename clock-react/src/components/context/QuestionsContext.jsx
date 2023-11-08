import React, { createContext, useEffect, useState } from "react";
export const QuestionContext = createContext();

function ContextQuestion({ children }) {
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

    const [questionNumber, setQuestionNumber] = useState(0);
    const handleNextQuestion = () => {
        if (questionNumber < questions.length - 1) {
            setQuestionNumber(prev => prev + 1)
        } else {
            setQuestionNumber(questions.length - 1)
        }
    }


    return (
        <QuestionContext.Provider
            value={{
                questions,
                handleNextQuestion,
                questionNumber,
                setQuestionNumber
            }}
        >
            {children}
        </QuestionContext.Provider>
    );
}

export default ContextQuestion;
