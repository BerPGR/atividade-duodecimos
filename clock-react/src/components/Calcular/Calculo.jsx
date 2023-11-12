// Quiz.js
import React, { useContext } from 'react'
import ContextAlarm from "../context/ContextAlarm";

import './Calculo.css'
import CalculoScreen from './CalculoScreen';
import Header from '../Header/Header';

const Quiz = () => {
  return (
    <div className='container'>
      <Header />
      <ContextAlarm>
        <CalculoScreen />
      </ContextAlarm>
    </div>
  )
}

export default Quiz;
