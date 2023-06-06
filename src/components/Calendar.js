import React, { useState } from 'react'
import CalendarReact from 'react-calendar'

const Calendar = (props) => {
  const [value, setValue] = useState(new Date())

  const today = new Date();
  let nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 6);
  // let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  const onChange = (nextValue) => {
    setValue(nextValue)
    props.setTgl(nextValue)
  }

  return (
    <CalendarReact
      onChange={onChange}
      value={value}
      minDate={new Date()}
      // maxDate={nextWeek}
      prev2Label={null}
      next2Label={null}
      tileClassName={({ date, view }) => view === 'month' && date.getDay() === 0 ? 'react-calendar__sunday' : null}
      tileDisabled={({ date, view }) => view === 'month' && date.getDay() === 0}
    />
  )
}

export default Calendar