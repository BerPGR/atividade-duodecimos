import React, { useContext, useState } from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'

import { AlarmContext } from "../context/ContextAlarm";

import './Quiz.css'
import CorrectModal from '../ModalsQuiz/ModalFeedback';



const QuizScreen = () => {
    const {
        handleNextQuestion,
        handleQuiz,
        questions,
        score,
        questionNumber,
        openModal,
        handleCloseModal
    } = useContext(AlarmContext);

    const questionsLength = questions.length

    return (
        <div className='container'>
            <h1>Question {questionNumber + 1}/{questionsLength}</h1>
            <p>Score: <span className='score'>{score}</span></p>
            <p>{questions[questionNumber].question}</p>
            <AlarmOption />
            <AnalogClock />
            <button className='setAlarm-btn' onClick={handleQuiz}>Responder</button>
            <button className='setAlarm-btn' onClick={handleNextQuestion}>Próxima</button>

            {openModal.open === true && <CorrectModal handleClose={handleCloseModal} open={openModal}  />}
        </div>
    )
}

export default QuizScreen