import React from "react"
import { Input } from '../../Input';

const FullInputStyle = 'flex flex-col w-full gap-2';
const InputStyle = 'text-black  px-5 py-1 rounded-2xl';
const LabelStyle = 'self-start font-semibold';
export const ContactInfo = () => {


  return (
    <div id='ContactInfo' className="px-24 h-full min-w-full w-4/6 flex flex-col justify-center gap-16">
      <Input
        InputId='CorreoField'
        label="Correo"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="email"
      />
      <Input
        InputId='TelefonoField'
        label="telefono"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
    </div>
  );
};
