import React, { useContext, useState } from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'

import { AlarmContext } from "../context/ContextAlarm";

import './Quiz.css'
import CorrectModal from '../ModalsQuiz/ModalFeedback';



const QuizScreen = () => {
    // Estados vindo do contexto
    const {
        handleNextQuestion,
        handleQuiz,
        questions,
        score,
        questionNumber,
        openModal,
        handleCloseModal,
        resetQuiz
    } = useContext(AlarmContext);

    // tamanho da lista de questoes
    const questionsLength = questions.length

    return (
        <div className='container'>
            {/* enquanto a questao atual for meno que o tamanho da lista, renderiza o quiz */}
            {questionNumber < questionsLength
                ?
                <div className='quiz-container'>
                    <div className='stats-container'>
                        <h1>Question {questionNumber + 1}/{questionsLength}</h1>
                        <p>Score: <span className='score'>{score}</span></p>
                        <p className='question'>{questions[questionNumber].question}</p>
                    </div>

                    <div className='clock-container'>
                        <AlarmOption />
                        <AnalogClock />
                    </div>

                    <button className='setAnswer-btn' onClick={handleQuiz}>Responder</button>
                    <button className='setAnswer-btn' onClick={handleNextQuestion}>Próxima</button>

                    {openModal.open === true && <CorrectModal handleClose={handleCloseModal} open={openModal} />}
                </div>
                :
                // Senao renderiza o fim do quiz
                < div className="stats-container">
                    <h1>FINALIZADO</h1>
                    <p>Seu Score Final: <span className='score'>{score}</span></p>
                    <button className="btn-primary" onClick={resetQuiz}>Jogar Novamente</button>
                    <a href='/' className="btn-primary" style={{ fontSize: '1rem' }}>Voltar ao Início</a>
                </div>
            }
        </div >
    )
}

export default QuizScreen