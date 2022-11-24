import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarContainer.css';

const CalendarContainer = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
        <h1 className='my-calendar'>My Calendar</h1>
        <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}/>
        </div>
        </>
    );
};

export default CalendarContainer;