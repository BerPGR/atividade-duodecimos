import React from 'react'

import AlarmOption from './AlarmOption/AlarmOption';
import AnalogClock from './AnalogClock/AnalogClock';
import ContextAlarm from './context/ContextAlarm';
import DigitalClock from './DigitalClock/DigitalClock';

const SubmitAnswer = () => {
    return (
        <section className="clock container">
            <div className="clock__container grid">
                <div className="clock__content grid">
                    <ContextAlarm>
                        <AnalogClock />
                        <DigitalClock />
                        <AlarmOption />
                    </ContextAlarm>
                </div>
            </div>
        </section>
    )
}

export default SubmitAnswer