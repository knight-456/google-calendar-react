import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

const Labels = () => {
    const { labels, updateLabel } = useContext(GlobalContext)
    console.log(labels)

    return (
        <div className={"flex flex-col gap-1.5"}>
            <p className={"font-bodyPri font-bold text-gray-500 mt-10"}>
                {"Label"}
            </p>
            <div className={"flex flex-col gap-3"}>
                {labels?.map(({ label: lbl, checked }, index) => (
                    <label key={index} className={"flex items-center gap-2"}>
                        <input
                            type={"checkbox"}
                            checked={checked}
                            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                            onChange={() => updateLabel({ label: lbl, checked: !checked })}
                        />
                        <span className={"font-bodyPri font-normal text-sm text-gray-700 capitalize"}>
                            {lbl}
                        </span>

                    </label>
                ))}
            </div>
        </div>
    )
}

export default Labels;