import React, { useContext } from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'

import { AlarmContext } from "../context/ContextAlarm";

const QuizScreen = () => {
    const {
        handleNextQuestion,
        handleQuiz
    } = useContext(AlarmContext);
    return (
        <div>
            <AlarmOption />
            <AnalogClock />
            <button className='setAlarm-btn' onClick={handleQuiz}>Responder</button>
            <button className='setAlarm-btn' onClick={handleNextQuestion}>Próxima</button>
        </div>
    )
}

export default QuizScreen