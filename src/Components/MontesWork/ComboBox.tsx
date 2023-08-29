import React, { ChangeEvent } from 'react'
//interface to props, neeed to have a classname for each element and the values
interface Props {
    className?: string
    elements: string[],
    fullClassName?: string,
    label: string,
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}
export const ComboBox = ({onChange,fullClassName, className, elements, label }: Props) => {
    return (
        <div className={fullClassName}>
            <label htmlFor="comboBox">{label}</label>
            <select id='comboBox' onChange={onChange} className={className + " comboBox"}  >
                {elements.map((el, index) => {
                    return (
                        <option id={`option${index}`} translate='yes'  value={index}>{el}</option>
                    )
                })}
            </select>
        </div>
    )
}
