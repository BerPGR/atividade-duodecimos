import React from 'react'
import AlarmOption from '../AlarmOption/AlarmOption'

import { AlarmContext } from "../context/ContextAlarm";


const Quiz = () => {

  return (
    <AlarmContext.Provider>
      <h1>Question</h1>

      <form>
        <AlarmOption />
      </form>

    </AlarmContext.Provider>
  )
}

export default Quiz