import React, { useState } from 'react'
import { Container, Buttons } from './style'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import {useDispatch,useSelector} from "react-redux"
import { updateDueDateCard } from '../../../../services/slices/boardSlice';
function DueDate({ setToggleDayPicker,card,setToggleSetting }) {
    const FORMAT = 'dd/MM/yyyy';
    const [selectedDay, setSelectedDay] = useState(null)
    const dispatch=useDispatch()
    const board=useSelector(state=>state.board)
    function formatDate(date, format, locale) {
        console.log("format date")
        return dateFnsFormat(date, format, locale);
    }
    function handlePickDay(day) {
        console.log(day)
        setSelectedDay(day)
    }
    function handleSave()
    {
        dispatch(updateDueDateCard({card,due_date:selectedDay.toISOString()}))
        setToggleSetting(false)
        setToggleDayPicker(false)
    }
    return (    
        <Container>
            <DayPicker
                onDayClick={(day) => handlePickDay(day)}
                formatDate={formatDate}
                format={FORMAT}
                locale="en"
                selectedDays={selectedDay}
            // parseDate={parseDate}
            ></DayPicker>
            <Buttons>
                <button className="save" onClick={()=>handleSave()}>Save</button>
                <button className="cancel" onClick={() => setToggleDayPicker(false)}>Cancel</button>
            </Buttons>

        </Container>
    )
}

export default DueDate
