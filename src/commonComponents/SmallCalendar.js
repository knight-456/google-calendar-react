import React, { useContext, useEffect, useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import dayjs from 'dayjs';

import GlobalContext from '../context/GlobalContext';

import { getMonth } from '../utils';

const SmallCalendar = () => {
    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useContext(GlobalContext)

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    function getDayClass(day) {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if (nowDay === currDay) {
            return "bg-blue-500 rounded-full text-white"
        } else if (currDay === slcDay) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold"
        } else {
            return ""
        }
    }

    return (
        <div className={"mt-9"}>
            <header className={"flex justify-between"}>
                <p className={"font-bodyPri font-bold text-gray-500"}>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>
                <div className={"space-x-4"}>
                    <button
                        className={""}
                        onClick={handlePrevMonth}
                    >
                        <FaChevronLeft className={"text-lg text-gray-600"} />
                    </button>
                    <button
                        className={""}
                        onClick={handleNextMonth}
                    >
                        <FaChevronRight className={"text-lg text-gray-600"} />
                    </button>
                </div>
            </header>
            <div className={"grid grid-cols-7 grid-rows-6"}>
                {currentMonth[0].map((day, index) => (
                    <span key={index} className={"font-bodyPri font-normal text-sm text-center py-1"}>
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row) => (
                    <>
                        {row.map((day, idx) => (
                            <button
                                key={idx}
                                className={`py-1 w-full ${getDayClass(day)}`}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIdx)
                                    setDaySelected(day)
                                }}
                            >
                                <span className={"font-bodyPri font-normal texts-m"}>
                                    {day.format('D')}
                                </span>
                            </button>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar;