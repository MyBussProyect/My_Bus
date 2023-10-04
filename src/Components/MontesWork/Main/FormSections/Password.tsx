import React,{ useRef, useContext } from 'react';
import ValidateForm from '../../../../Contexts/FormOptions';
import { Input } from '../../Input';
const FullInputStyle = 'flex flex-col w-full gap-2';
const InputStyle = 'text-black  px-5 py-1 rounded-2xl';
const LabelStyle = 'self-start font-semibold';
export const Password = () => {
  const { setIsValid } = useContext(ValidateForm);

  const passRef = useRef(null);

  const confirmRef = useRef(null);
  const handleChange = () => {
    let passInput = passRef.current! as HTMLInputElement;
    let confirmInput = confirmRef.current! as HTMLInputElement;
    if (passInput.value !== confirmInput.value) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div id='Password' className="px-24 h-full min-w-full flex flex-col justify-center gap-16">
      <Input
        handleChange={handleChange}
        inputRef={passRef}
        label="Contraseña"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="password"
        InputId='ContraseñaField'
      />
      <Input
        handleChange={handleChange}
        inputRef={confirmRef}
        label="confirmar contraseña"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="password"
      />
    </div>
  );
};
