import React, { useContext } from 'react';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import logo from "../assets/logo.png"

import GlobalContext from '../context/GlobalContext';

import dayjs from 'dayjs';

const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext)

    const handleReset = () => {
        setMonthIndex((monthIndex === dayjs().month())
            ? monthIndex + Math.random()
            : dayjs().month()
        )
    }

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }

    return (
        <div className={"px-4 py-2 flex items-center"}>
            <img
                src={logo}
                alt={"logo"}
                className={"w-12 h-12 overflow-hidden"}
            />
            <h1 className={"font-bodyPri font-bold text-gray-500 text-xl mr-10"}>
                {"Calendar"}
            </h1>
            <button
                className={"border rounded py-2 px-4 mr-5 font-bodyPri font-normal"}
                onClick={handleReset}
            >
                {"Today"}
            </button>
            <button
                className={"material-icons-outlined cursor-pointer text-gray-600 mx-2"}
                onClick={handlePrevMonth}
            >
                <FaChevronLeft className={"text-lg text-gray-600"} />
            </button>
            <button
                className={"material-icons-outlined cursor-pointer text-gray-600 mx-2"}
                onClick={handleNextMonth}
            >
                <FaChevronRight className={"text-lg text-gray-600"} />
            </button>
            <h2 className={"ml-4 font-bodyPri font-bold text-gray-500 text-xl"}>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </div>
    )
}

export default CalendarHeader;