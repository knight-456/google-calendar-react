import React from 'react';

import CalendarDay from './CalendarDay';

const CalendarMonth = ({ currentMonth }) => {
    return (
        <div className={"flex-1 grid grid-cols-7 grid-rows-5"}>
            {currentMonth.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map((day, rowIdx) => (
                        <CalendarDay
                            key={rowIdx}
                            day={day}
                            rowIdx={index}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default CalendarMonth;