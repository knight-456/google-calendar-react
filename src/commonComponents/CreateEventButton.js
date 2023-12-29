import React, { useContext } from 'react'

import plus from "../assets/plus.svg";

import GlobalContext from '../context/GlobalContext';

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext)

    const handleCreateBtn = () => {
        setShowEventModal(true)
    }

    return (
        <button
            className={"border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"}
            onClick={handleCreateBtn}
        >
            <img
                src={plus}
                className={"w-7 h-7"}
                alt={"plus-icon"}
            />
            <span className={"pl-3 pr-7 font-bodyPri font-normal text-text-800 text-base tracking-wide"}>
                {"Create"}
            </span>
        </button>
    )
}

export default CreateEventButton;