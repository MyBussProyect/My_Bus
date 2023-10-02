import { MutableRefObject } from "react"

interface Props {
  type: InputTypes,
  label:string,
  inputStyle?:string,
  labelStyle?:string,
  className?:string,
  inputRef?:MutableRefObject<null>,
  handleChange?:()=>void

}

type InputTypes =  "text" | "password" | "email" | "number" | "date" | "datetime-local" | "time" | "month" | "week" | "tel" | "url" | "search" | "color"

export const Input = ({className,type, label,inputStyle,labelStyle,inputRef, handleChange}:Props) => {
  return (
    <div className={className}>
        <label htmlFor="input0" className={labelStyle}>{label}</label>
        <input required onChange={handleChange} type={type} ref={inputRef} id="input0" placeholder={`Ingresa tu ${label}`} className={inputStyle} />
    </div>
  )
}
