import { ChangeEvent, useId, MutableRefObject } from 'react';
//interface to props, neeed to have a classname for each element and the values
interface Props {
    className?: string
    elements: string[],
    fullClassName?: string,
    label: string,
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
    selectRef?: MutableRefObject<null>
}
export const ComboBox = ({onChange,fullClassName, className, elements, label, selectRef }: Props) => {
    const selectId = useId()
    return (
        <div className={fullClassName}>
            <label htmlFor={selectId}>{label}</label>
            <select id={selectId} ref={selectRef} onChange={onChange} className={className + " comboBox"}  >
                {elements.map((el, index) => {                    
                    return (
                        <option id={`option${index}`} translate='yes' value={index}>{el}</option>
                    )
                })}
            </select>
        </div>
    )
}
