import React, { useContext, useState } from 'react'

import { MdOutlineClose } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdSegment } from "react-icons/md";
import { MdOutlineSchedule } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { RxDragHandleHorizontal } from "react-icons/rx";

import { labelClasses } from '../components/data'

import GlobalContext from '../context/GlobalContext'

const EventModal = () => {
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? Object.values(labelClasses)?.find((lbl) => lbl?.value === selectedEvent?.label)
            : labelClasses?.PURPLE?.value
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent?.id : Date.now()
        }
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent })
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent })
        }
        setShowEventModal(false)
    }

    return (
        <div className={"h-screen w-full fixed left-0 top-0 flex justify-center items-center"}>
            <form className={"bg-white rounded-lg shadow-2xl w-1/4"}>
                <header className={"bg-gray-100 px-4 py-2 flex justify-between items-center"}>
                    <RxDragHandleHorizontal className={"text-lg text-gray-400"} />
                    <div className={"flex items-center gap-2"}>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    setShowEventModal(false)
                                    dispatchCalEvent({ type: "delete", payload: selectedEvent })
                                }}
                            >
                                <AiOutlineDelete className={"text-xl text-gray-400 cursor-pointer"} />
                            </span>
                        )}
                        <button
                            className={""}
                            onClick={() => setShowEventModal(false)}
                        >
                            <MdOutlineClose className={"text-xl text-gray-400 cursor-pointer"} />
                        </button>
                    </div>
                </header>
                <div className={"p-3"}>
                    <div className={"grid grid-cols-4 items-end gap-y-7"}>
                        <div className={"col-start-2 col-span-full"}>
                            <input
                                type={"text"}
                                name={"title"}
                                className={"w-full pb-2 pt-3 border-0 border-b-2 border-gray-200 font-bodyPri font-semibold text-gray-600 text-xl focus:outline-none focus:ring-0 focus:border-blue-500"}
                                placeholder={"Add title"}
                                value={title}
                                onChange={(event) => setTitle(event?.target?.value)}
                                required={true}
                            />
                        </div>
                        <div className={"col-span-1"}>
                            <MdOutlineSchedule className={"text-xl text-gray-400"} />
                        </div>
                        <div className={"col-start-2 col-span-full"}>
                            <p className={"font-bodyPri font-normal text-text-900 text-base tracking-wide"}>
                                {daySelected.format('dddd MMMM DD')}
                            </p>
                        </div>
                        <div className={"col-span-1"}>
                            <MdSegment className={"text-xl text-gray-400"} />
                        </div>
                        <div className={"col-start-2 col-span-full"}>
                            <input
                                type={"text"}
                                name={"description"}
                                className={"w-full pb-2 pt-3 border-0 border-b-2 border-gray-200 font-bodyPri text-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500"}
                                placeholder={"Add a description"}
                                value={description}
                                onChange={(event) => setDescription(event?.target?.value)}
                                required={true}
                            />
                        </div>
                        <div className={"col-span-1"}>
                            <BsBookmark className={"text-xl text-gray-400"} />
                        </div>
                        <div className={"col-start-2 col-span-full flex gap-x-2"}>
                            {Object.values(labelClasses)?.map((labelClass, index) => (
                                <span
                                    key={index}
                                    className={`bg-${labelClass?.value}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                    onClick={() => setSelectedLabel(labelClass?.value)}
                                >
                                    {(selectedLabel === labelClass?.value) &&
                                        <FaCheck className={"text-base text-white cursor-pointer"} />
                                    }
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className={"flex justify-end border-t p-3 mt-5"}>
                    <button
                        type={"submit"}
                        className={"bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"}
                        onClick={handleSubmit}
                    >
                        {"Save"}
                    </button>

                </footer>
            </form>
        </div>
    )
}

export default EventModal