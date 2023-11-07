// Quiz.js
import React from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'
import AnalogClock from '../AnalogClock/AnalogClock'
import ContextAlarm from "../context/ContextAlarm";

const Quiz = () => {

  return (
    <div>
      <h1>Question</h1>
      <ContextAlarm>
        <AnalogClock />
        <AlarmOption />
      </ContextAlarm>
    </div>
  )
}

export default Quiz;
