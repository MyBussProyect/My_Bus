
interface Props {
  type: string,
  label:string,
  inputStyle?:string,
  labelStyle?:string,
  className?:string,
}

export const Input = ({className,type, label,inputStyle,labelStyle}:Props) => {
  return (
    <div className={className}>
        <label htmlFor="input0" className={labelStyle}>{label}</label>
        <input required type={type} id="input0" className={inputStyle} />
    </div>
  )
}
