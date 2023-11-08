// Quiz.js
import React, { useContext } from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'
import ContextAlarm from "../context/ContextAlarm";

import { AlarmContext } from "../context/ContextAlarm";
import './Quiz.css'
import QuizScreen from './QuizScreen';

const Quiz = () => {
  return (
    <div className='container quiz-container'>
      <h1>Question</h1>
      <ContextAlarm>
        <QuizScreen />
      </ContextAlarm>
    </div>
  )
}

export default Quiz;
