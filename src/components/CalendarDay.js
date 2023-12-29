import React, { useContext, useEffect, useState } from 'react';

import dayjs from 'dayjs';

import GlobalContext from '../context/GlobalContext';

const CalendarDay = ({ day, rowIdx }) => {

    const { setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent } = useContext(GlobalContext)

    const [dayEvents, setDayEvents] = useState([])

    useEffect(() => {
        const events = filteredEvents?.filter((evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setDayEvents(events)
    }, [filteredEvents, day])

    const getCurrentDayClass = () => {
        return (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY"))
            ? "bg-blue-600 text-white rounded-full w-7"
            : "";
    }

    return (
        <div className={"border border-gray-200 flex flex-col"}>
            <header className={"flex flex-col items-center"}>
                {(rowIdx === 0) &&
                    <p className={"mt-1 font-bodyPri font-normal text-sm tracking-wide"}>
                        {day?.format("ddd")?.toUpperCase()}
                    </p>
                }
                <p className={`p-1 my-1 font-bodyPri font-normal text-sm tracking-wide text-center ${getCurrentDayClass()}`}>
                    {day?.format("DD")}
                </p>
            </header>
            <div
                className={"flex-1 cursor-pointer"}
                onClick={() => {
                    setDaySelected(day)
                    setShowEventModal(true)
                }}
            >
                {dayEvents?.map((evt, index) => (
                    <div
                        key={index}
                        className={`bg-${evt.label}-200 p-1 mr-3 font-bodyPri text-gray-600 text-sm rounded mb-1 truncate`}
                        onClick={() => setSelectedEvent(evt)}
                    >
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarDay