import React, { useContext } from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'

import { AlarmContext } from "../context/ContextAlarm";

import './Quiz.css'



const QuizScreen = () => {
    const {
        handleNextQuestion,
        handleQuiz,
        questions,
        score,
        questionNumber
    } = useContext(AlarmContext);

    const questionsLength = questions.length


    // if (questionNumber > questionsLength - 1) {
    //     alert("Finalizado")
    // }

    return (
        <div className='container'>
            <h1>Question {questionNumber + 1}/{questionsLength}</h1>
            <p>Score: <span className='score'>{score}</span></p>
            <p>{questions[questionNumber].question}</p>
            <AlarmOption />
            <AnalogClock />
            <button className='setAlarm-btn' onClick={handleQuiz}>Responder</button>
            <button className='setAlarm-btn' onClick={handleNextQuestion}>Próxima</button>
        </div>
    )
}

export default QuizScreen