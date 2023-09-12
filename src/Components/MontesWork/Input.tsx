import { MutableRefObject } from "react"

interface Props {
  type: string,
  label:string,
  inputStyle?:string,
  labelStyle?:string,
  className?:string,
  inputRef?:MutableRefObject<null>;
}

export const Input = ({className,type, label,inputStyle,labelStyle,inputRef}:Props) => {
  return (
    <div className={className}>
        <label htmlFor="input0" className={labelStyle}>{label}</label>
        <input required type={type} ref={inputRef} id="input0" placeholder={`Ingresa tu ${label}`} className={inputStyle} />
    </div>
  )
}
